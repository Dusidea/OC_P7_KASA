Salut ! Pour déployer ton application React avec Vite, tu as plusieurs options en fonction de tes besoins. Voici les méthodes les plus courantes :

---

### **1. Déploiement sur GitHub Pages (Gratuit)**

Si ton projet est sur GitHub, tu peux utiliser GitHub Pages pour le déployer.

#### **Étapes :**

1. **Installer le package pour GitHub Pages**
   ```bash
   npm install gh-pages --save-dev
   ```
2. **Configurer le fichier `vite.config.js`**  
   Ajoute la base de ton repo GitHub :
   ```js
   export default defineConfig({
     base: "/nom-du-repo/",
     plugins: [react()],
   });
   ```
3. **Modifier le fichier `package.json`**  
   Ajoute les scripts :
   ```json
   "scripts": {
     "build": "vite build",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. **Déployer**
   ```bash
   npm run deploy
   ```
5. **Activer GitHub Pages**
   - Va dans ton repo GitHub → _Settings_ → _Pages_
   - Choisis la branche `gh-pages` comme source.

---

### **2. Déploiement sur Vercel (Facile & Rapide)**

Vercel est optimisé pour les projets React et Next.js.

#### **Étapes :**

1. **Installer Vercel CLI (optionnel)**
   ```bash
   npm install -g vercel
   ```
2. **Se connecter à Vercel**
   ```bash
   vercel login
   ```
3. **Déployer**
   ```bash
   vercel
   ```
   Suis les instructions, et ton site sera en ligne avec une URL fournie par Vercel.

---

### **3. Déploiement sur Netlify (Facile & No-Code possible)**

Netlify est une autre bonne option, notamment si tu utilises Git.

#### **Étapes :**

1. **Créer un compte sur [Netlify](https://www.netlify.com/)**
2. **Lier ton repo GitHub**
3. **Spécifier la commande de build**
   - Build command: `npm run build`
   - Directory: `dist`
4. **Déployer !**

Si tu préfères le CLI :

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

### **4. Déploiement sur un hébergement traditionnel (FTP, OVH, etc.)**

Si tu as un hébergement type OVH, Hostinger, etc., tu peux simplement uploader ton dossier `dist`.

#### **Étapes :**

1. **Générer le build**
   ```bash
   npm run build
   ```
2. **Uploader le contenu du dossier `dist`** sur ton serveur via FTP.

---

💡 **Quelle méthode préfères-tu ?**

Parfait ! Voici comment déployer ton application React avec Vite sur un hébergement traditionnel (FTP, OVH, Hostinger, etc.).

---

### **1. Construire l’application**

Avant d’uploader ton projet, il faut générer les fichiers optimisés pour la production.

#### **Exécute cette commande :**

```bash
npm run build
```

Cela va créer un dossier `dist/` contenant tous les fichiers nécessaires.

---

### **2. Vérifier la configuration de `vite.config.js`**

Si ton application n'est pas à la racine de ton domaine (ex: `https://monsite.com/app/`), ajoute une `base` dans `vite.config.js` :

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/app/", // Mets ici le sous-dossier de ton site si nécessaire
});
```

Si ton site est à la racine, laisse `base: '/'` (ou supprime cette ligne).

Ensuite, rebuild avec :

```bash
npm run build
```

---

### **3. Uploader les fichiers sur ton serveur**

Une fois le dossier `dist` prêt, il faut l’envoyer sur ton serveur. Tu peux utiliser :

#### **Via un client FTP (FileZilla, Cyberduck, etc.)**

1. **Ouvre ton client FTP** et connecte-toi à ton hébergement avec tes identifiants (généralement fournis par ton hébergeur).
2. **Accède au dossier de ton site web**
   - Si tu veux que ton site soit accessible depuis `monsite.com`, envoie les fichiers dans le dossier `public_html/` (OVH) ou `www/` (selon l’hébergeur).
   - Si c'est un sous-domaine ou un sous-dossier, place le contenu de `dist/` dans le bon dossier.
3. **Upload le contenu de `dist/`**
   - **Important :** Envoie uniquement le **contenu** de `dist` et non le dossier lui-même.

---

### **4. Configurer le serveur pour gérer le routing (si nécessaire)**

Si tu utilises **React Router**, ton serveur doit rediriger toutes les requêtes vers `index.html`. Voici comment faire selon ton hébergement :

#### **Sur Apache (OVH, Hostinger, etc.)**

Dans le dossier `dist`, crée (ou modifie) un fichier `.htaccess` :

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

Cela s'assure que toutes les URL sont gérées par React.

#### **Sur Nginx**

Ajoute cette configuration dans ton fichier de configuration Nginx :

```nginx
location / {
    root /var/www/monapp;
    index index.html;
    try_files $uri /index.html;
}
```

---

### **5. Tester ton site**

Rends-toi sur ton domaine (`https://monsite.com/`).  
Si ça ne fonctionne pas :

- Vérifie que les fichiers HTML, CSS et JS sont bien dans `public_html/`.
- Si le CSS ou JS ne charge pas, vérifie la config `base` dans `vite.config.js`.

---

Ton site est maintenant en ligne ! 🚀  
Si tu rencontres un problème, dis-moi. 😊

quels sont les prérequis côté OVH, qu'est ce que je dois avoir ?

Pour déployer ton application React avec Vite sur un hébergement OVH, voici ce dont tu as besoin et comment t’assurer que tout est en place.

---

### ✅ **1. Un hébergement OVH actif**

Tu dois avoir un **hébergement web OVH** avec un **nom de domaine**.  
Si tu n’en as pas encore, tu peux en commander un sur [OVH](https://www.ovh.com/).

---

### ✅ **2. Un accès FTP actif**

Tu dois pouvoir **transférer des fichiers** sur ton hébergement via FTP.

🔹 **Vérifier tes identifiants FTP :**

1. Connecte-toi à ton espace client OVH.
2. Va dans **Hébergement** → Sélectionne ton hébergement.
3. Onglet **FTP - SSH** → Note tes identifiants FTP (hôte, utilisateur, mot de passe).
4. Si besoin, **active le FTP** (bouton "Activer").

🔹 **Tester l’accès FTP avec FileZilla :**

1. Télécharge [FileZilla](https://filezilla-project.org/).
2. Renseigne ces infos :
   - **Hôte :** `ftp.ton-domaine.com` ou `ftp.clusterXXX.hosting.ovh.net`
   - **Identifiant et mot de passe** (trouvés sur OVH).
   - **Port :** `21` (FTP) ou `22` (SFTP si activé).
3. Clique sur **Connexion rapide**.

Si ça fonctionne, tu vois les fichiers de ton site (`www/` ou `public_html/`).

---

### ✅ **3. Un hébergement compatible (Apache, PHP, MySQL si besoin)**

OVH utilise **Apache** par défaut. Ton application React est **statique**, donc **pas besoin de PHP ou MySQL** sauf si tu as une API.

🔹 **Vérifier la version Apache :**

1. Crée un fichier `info.php` dans `www/` avec ce contenu :
   ```php
   <?php phpinfo(); ?>
   ```
2. Va sur `https://ton-site.com/info.php` pour voir la config Apache.

👉 **Tu peux ensuite supprimer ce fichier** (`info.php`).

---

### ✅ **4. HTTPS activé (SSL)**

Pour que ton site soit sécurisé avec `https://`, active **le certificat SSL** sur OVH.

🔹 **Activer SSL sur OVH :**

1. Dans l’espace client OVH, va dans **Hébergement**.
2. Onglet **Multisite** → Active **SSL** sur ton domaine.
3. Dans l’onglet **Informations générales**, active **"Forcer HTTPS"**.

Cela peut prendre quelques heures pour être actif.

---

### ✅ **5. Une configuration Apache correcte (`.htaccess` pour React Router)**

Si ton app utilise **React Router**, ajoute ce fichier `.htaccess` dans `www/` :

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

Cela empêche les erreurs 404 en mode SPA.

---

### **Résumé des prérequis :**

✅ **Hébergement web OVH actif**  
✅ **Accès FTP avec FileZilla ou un autre client**  
✅ **Apache actif (pas besoin de PHP ni MySQL)**  
✅ **SSL (HTTPS) activé**  
✅ **Fichier `.htaccess` si React Router est utilisé**

💡 **Tout est bon ? Tu peux maintenant transférer ton build `dist/` sur OVH !** 🚀

# Déploiement sur VPS via Windows

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

Je vais détailler les deux options. Tu peux choisir celle qui te convient.

---

## ⚙️ **Méthode 1 : Déploiement avec IIS (Windows Server)**
### 🔹 **2.1 Activer IIS**
1. Ouvre **"Gestionnaire de serveur"**.
2. Va dans **"Ajouter des rôles et fonctionnalités"**.
3. Coche **"Serveur Web (IIS)"** et valide l’installation.

### 🔹 **2.2 Configurer IIS**
1. Place ton app dans `C:\inetpub\wwwroot\` :
   - Sur ton PC, exécute :  
     ```sh
     npm run build
     ```
   - Transfère le dossier `dist/` sur le serveur (`C:\inetpub\wwwroot\`).
   - Renomme `dist` en `myapp`.

2. Ajoute un **site web IIS** :
   - Ouvre **Gestionnaire IIS**.
   - Fais **"Ajouter un site Web"**.
   - Dans **"Chemin d’accès physique"**, mets `C:\inetpub\wwwroot\myapp`.
   - Choisis un port (ex: `80` ou `8080`).

3. Active **le mode SPA** :
   - Dans IIS, sélectionne **"myapp"** > **"Erreur HTTP"** > **"Ajouter une redirection"**.
   - Mets **"404"** et redirige vers `index.html`.

4. Redémarre IIS :
   ```sh
   iisreset
   ```

**Ton app est en ligne !** 🚀

---

## ⚙️ **Méthode 2 : Déploiement avec Nginx**
Si tu préfères utiliser **Nginx** au lieu de IIS :

### 🔹 **2.1 Installer Nginx**
1. Télécharge **Nginx pour Windows** :  
   → [https://nginx.org/en/download.html](https://nginx.org/en/download.html)
2. Décompresse-le dans `C:\nginx`.

### 🔹 **2.2 Configurer Nginx**
1. Place ton app dans `C:\nginx\html\myapp` :
   - Fais un build sur ton PC :
     ```sh
     npm run build
     ```
   - Copie `dist/` dans `C:\nginx\html\myapp`.

2. Modifie la config Nginx (`C:\nginx\conf\nginx.conf`) :
   ```nginx
   server {
       listen 80;
       server_name localhost;

       root C:/nginx/html/myapp;
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

**Ton app est disponible sur `http://localhost` !** 🎉

---

## 📌 **3. Ajouter un nom de domaine (optionnel)**
Si tu veux un **nom de domaine** :
- Achète un domaine (`mon-site.com`).
- Dans ton fournisseur DNS, pointe le domaine vers **l’IP de ton VPS**.
- Ajoute un certificat SSL avec **Let's Encrypt**.

---

## **Conclusion**
- **Méthode IIS** → simple, mais un peu plus lourd.  
- **Méthode Nginx** → plus léger et rapide.  

Si tu veux encore plus de contrôle, tu peux installer **Caddy** (serveur web moderne qui gère SSL automatiquement).

💡 **Tu veux que je t’aide à choisir entre IIS et Nginx ?**
