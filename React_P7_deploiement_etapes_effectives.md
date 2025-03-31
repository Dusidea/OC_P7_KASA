# Deploiement sur hebergement mutualisé

1. Go to OVH > hebergement : cliquer sur mon hebergment > FTP SSH
   l'hote est la ligne copiable ftp.cluster029.hosting.ovh.net

2.

- Dans le dossier de mon projet : npm run build
- modifier la config de vite.confing.js pour ajouter le chemin du dossier dans ovh (home/dusided) => je rajoute la ligne :

```
base: "/dusided/", => NON, en fait tout est bien à la racine, c'est de la merde, laisse la valeur de base
```

- rebuild : lancer "npm run build"

3. Uploader les fichiers sur le serveur
   3.1 il faut un client FTP => je DL FileZilla client (version miniomale), j'installe. Je me connecte avec mes ID (ligne du haut du client)
   J'ai rencontré un pb de mdp => j'ai mis à jour le mdp du cluster => attendre mail de confirmation pour que le changement soit effectif
   Connexion réussie

3.2 Accède au dossier de ton site web

Si tu veux que ton site soit accessible depuis monsite.com, envoie les fichiers dans le dossier public_html/ (OVH) ou www/ (selon l’hébergeur).

Si c'est un sous-domaine ou un sous-dossier, place le contenu de dist/ dans le bon dossier.

=> une fois la co établie, à droite, je choisis le dossier www

2.3 Upload le contenu de dist/

Important : Envoie uniquement le contenu de dist et non le dossier lui-même.
📤 Envoyer les fichiers dans "www"
Côté gauche (ton PC) dans FileZilla, navigue jusqu’au dossier dist/ généré par npm run build.

Sélectionne tout le contenu de dist/ (mais pas le dossier lui-même !).

Glisse-dépose les fichiers dans "www" côté serveur.

⏳ Attends que l’upload se termine (ça peut prendre quelques minutes).

**\*\*\*\***\*\***\*\*\*\***J'ai sauté 3 et 4 des prérequis OVH, à voir\***\*\*\*\*\*\*\***

5. Une configuration Apache correcte (.htaccess pour React Router)
   Si ton app utilise React Router, ajoute ce fichier .htaccess dans www/ :

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

Cela empêche les erreurs 404 en mode SPA.

note : il y avait déjà un fichier .htaccess, je l'ai remplacé

erreur MIME, là on doit récupérer un fichier JS on a en réalité de l'html

Si on essaie d’accéder directement à un fichier JS, par exemple :
🔗 https://dusidea.fr/assets/index-_eCZvA3V.js
📌 Ça affiche une page HTML au lieu de ton script JS, ce qui provoque l’erreur "Failed to load module script".

Cela signifie que ton serveur ne trouve pas les fichiers JS correctement. Voyons comment régler ça !
Modifier ton fichier .htaccess
Ajoute cette ligne avant le RewriteRule pour s'assurer que les fichiers statiques sont bien servis :

```
RewriteCond %{REQUEST_URI} !^/assets/ [NC]
```

Sans cette ligne, toutes les requêtes sont redirigées vers index.html, y compris tes fichiers .js, ce qui explique le bug. 🚀

ok j'avais un autre pb :

1. je n'aurais pas du modifier la ligne "base" dans vite.config.js car les fichiers sont bien à la racine, j'ai rétabli sa valeur précédente

```
 base: "/",
```

2. dans mon code, 2 fichiers font un fetch vers un fichier json et utilisent un chemin relatif. Il fallait un chemin absolu. Lors du build, vite gère le fait d'avoir le json à la racine du projet. J'ai donc du modifier le chemin du fetch dans logement.jsx et home.jsx => "logements.json" au lieu "../../public/logements.json"

Ca fonctionne, le projet KASA est dispo sur dusidea.fr
Par contre il est à la racine, pas dans un sous dossier et donc c'est le site principal. Pb

# Deploiement sur VPS

## Possible sur Linux et Windows
- Sur Linux : simple mais nécessite Linux
- Sur Windows via Windows Server Live ou outils comme Caddy ou Nginx
