## Hebergements

Il existe différents types hébergement web disponibles à savoir :

- l’hébergement mutualisé, mon site dusidea sur ovh
- l’hébergement dédié,
- l’hébergement VPS
- ou encore l’hébergement cloud

## Deploiement Kasa sur site mutualisé

1. Si besoin, préciser le chemin cible sur le site dans vite.congif.js avec base: "/sousdomaine/" + relancer le build
2. Uploader les fichiers sur le serveur cible via un client comme FileZilla :
   - connexion au serveur ID et mdp du cluster
   - partie gauche (machine/local) : naviguer jusqu'au dossier dist et sélectionner le contenu
   - partie droite (serveur) : www/ (ou public_html, selon hébergeur)
   - glisser déposer le contenu de dist dans la partie droite (serveur)

Points d'attention : - en cas de fetch : utiliser un chemin absolu vers le fichier data - veiller à ce qu'on n'arrive pas sur du html quand on essaie d'accéder à du JS (réglable dans le fichier .htaccess ?)

# Deploiement sur VPS

## Possible sur Linux et Windows

- Sur Linux : simple mais nécessite Linux
- Sur Windows :
  - Déploiement avec IIS (Windows Server)
  - Déploiement avec outil (Nginx ou Caddy)

## Déployer KASA (OC_P7) avec Nginx

Etapes fournies par ChatGpt

D'accord ! Si ton VPS tourne sous **Windows Server**, voici comment déployer ton application React (Vite) dessus.

---

### 📌 **1. Prendre un VPS Windows**

- Choisis un hébergeur qui propose **Windows Server** (ex: **Hetzner, OVH, Contabo**).
- Connecte-toi au VPS via **Bureau à distance (RDP)**.

---

### 📌 **2. Installer un serveur web**

Sous Windows, tu peux utiliser :

1. **IIS (Internet Information Services)** → intégré à Windows Server.
2. **Nginx** → plus léger et performant.

## ⚙️ **Méthode 2 : Déploiement avec Nginx**

Si tu préfères utiliser **Nginx** au lieu de IIS :

### 🔹 **2.1 Installer Nginx**

1. Télécharge **Nginx pour Windows** :  
   → [https://nginx.org/en/download.html](https://nginx.org/en/download.html)
2. Décompresse-le dans `C:\nginx`.

### 🔹 **2.2 Configurer Nginx**

1. Crée un répertoire pour le contenu de ton app `C:\nginx\html\myapp` (j'ai tout placé dans D:/Workspace):

   - Dans le répertoire d'origine du code Fais un build sur ton PC :
     ```sh
     npm run build
     ```
   - Copie le contenu de `dist/` dans `C:\nginx\html\myapp` (pas le dossier, juste son contenu).

2. Modifie la config Nginx (`C:\nginx\conf\nginx.conf`) :

   ```nginx
   server {
       listen 80;
       server_name localhost;

       root C:/nginx/html/myapp;
       \\\\\*************ici j'ai mis  root D:/Workspace/nginx/html/Kasa; *****\\\\
       index index.html;
       location / {
           try_files $uri /index.html;
       }
   }
   ```

3. Lancer Nginx :
   - Ouvre une invite de commande (`cmd`).
   - Exécute :
     ```sh
     C:\nginx\nginx.exe
     ```

dans mon cas, je dois aller dans D en tapant D:
puis cd Workspace/Nginx/NginxVersionxxxx
puis nginx.exe

**Ton app est disponible sur `http://localhost` !** 🎉
-ouvrir un navigateur et se rendre sur l'url ci dessus

---

## 📌 **3. Ajouter un nom de domaine (optionnel)**

## 📌 **1. Pointer ton domaine vers ton VPS**

### 🔹 **1.1 Récupérer l’IP de ton VPS**

- Ouvre une invite de commande (`cmd`) et tape :
  ```sh
  ipconfig
  ```
- Cherche ton **adresse IPv4** ou utilise celle fournie par ton hébergeur.
  192.168.1.21

### 🔹 **1.2 Modifier les DNS chez OVH**

1. Connecte-toi à ton espace OVH.
2. Va dans **"Domaines"**, puis sélectionne ton domaine.
3. Dans l’onglet **"Zone DNS"**, ajoute ou modifie ces entrées :
   - **Type A** :
     - Nom : `@`
     - Cible : **l’IP de ton VPS**
   - **Type CNAME** (si tu veux un sous-domaine `www` par exemple) :
     - Nom : `www`
     - Cible : **ton domaine principal**

📌 **Attendre la propagation DNS** : ça peut prendre de **quelques minutes à 24h**.

---

## 📌 **2. Configurer Nginx pour ton domaine**

1. Ouvre **`D:\Workspace\Nginx\conf\nginx.conf`** avec un éditeur de texte.
2. Ajoute une nouvelle configuration pour ton domaine :

   ```nginx
   server {
       listen 80;
       server_name mon-domaine.com www.mon-domaine.com;

       root D:/Workspace/Nginx/html/myapp;
       index index.html;

       location / {
           try_files $uri /index.html;
       }
   }
   ```

3. **Redémarrer Nginx** :
   ```sh
   D:\Workspace\Nginx\nginx.exe -s reload
   ```

---

## 📌 **3. Ajouter un certificat SSL (HTTPS)**

### 🔹 **3.1 Installer Certbot**

OVH ne fournit pas directement de certificat SSL, donc on va utiliser **Let's Encrypt** avec Certbot.

1. Télécharge **Certbot pour Windows** ici :  
   → [https://certbot.eff.org/instructions](https://certbot.eff.org/instructions)  
   (Choisis **Windows** + **Nginx**)
2. Ouvre un **invite de commande en administrateur** et exécute :
   ```sh
   certbot certonly --nginx -d mon-domaine.com -d www.mon-domaine.com
   ```
3. Certbot va générer les certificats SSL dans :
   ```
   C:\Certbot\live\mon-domaine.com\
   ```

### 🔹 **3.2 Configurer Nginx pour HTTPS**

1. Ouvre `nginx.conf` et modifie ton bloc `server` :

   ```nginx
   server {
       listen 80;
       server_name mon-domaine.com www.mon-domaine.com;
       return 301 https://$host$request_uri;
   }

   server {
       listen 443 ssl;
       server_name mon-domaine.com www.mon-domaine.com;

       root D:/Workspace/Nginx/html/myapp;
       index index.html;

       ssl_certificate C:/Certbot/live/mon-domaine.com/fullchain.pem;
       ssl_certificate_key C:/Certbot/live/mon-domaine.com/privkey.pem;

       location / {
           try_files $uri /index.html;
       }
   }
   ```

2. **Recharger Nginx** :
   ```sh
   D:\Workspace\Nginx\nginx.exe -s reload
   ```

---

## 🚀 **Ton site est maintenant accessible avec ton domaine OVH !**

Dis-moi si tu veux plus de détails sur une étape. 😊

- Ajoute un certificat SSL avec **Let's Encrypt**.

---

## **Conclusion**

- **Méthode IIS** → simple, mais un peu plus lourd.
- **Méthode Nginx** → plus léger et rapide.

Si tu veux encore plus de contrôle, tu peux installer **Caddy** (serveur web moderne qui gère SSL automatiquement).

## Pour arrêter le serveur :

Pour arrêter Nginx sous Windows, tu as plusieurs options :

### 📌 **1. Avec la commande officielle**

Dans ton invite de commande (`cmd`), exécute :

```sh
D:\Workspace\Nginx\nginx.exe -s stop
```

Cela arrête immédiatement Nginx.

---

### 📌 **2. Redémarrer Nginx proprement**

Si tu veux juste recharger la config sans tout arrêter :

```sh
D:\Workspace\Nginx\nginx.exe -s reload
```

---

### 📌 **3. Forcer l'arrêt avec le Gestionnaire des tâches**

Si la commande ne fonctionne pas :

1. Ouvre **le Gestionnaire des tâches** (`Ctrl + Shift + Échap`).
2. Trouve **"nginx.exe"** dans l’onglet **"Détails"**.
3. Fais un clic droit → **"Fin de tâche"**.

---

💡 **Et si tu veux redémarrer Nginx ensuite**  
Après l'arrêt, pour le relancer :

```sh
D:\Workspace\Nginx\nginx.exe
```

https://docs.google.com/spreadsheets/d/1b16mD_aQk_8iLAI__JX5vf8IriktX2JBwcglUARh8fU/edit?usp=sharing
