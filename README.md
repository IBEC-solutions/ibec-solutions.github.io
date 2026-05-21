####### ceci est un site fictif dans le cadre d un projet d école #######

# IBEC Solutions — Site web officiel

> **La solution IBECable** — ESN bordelaise spécialisée en Informatique, Bureautique, Expertise & Conseil

---

## 🚀 Déploiement sur GitHub Pages (5 minutes)

### Étape 1 — Créer le dépôt GitHub

1. Connecte-toi sur [github.com](https://github.com)
2. Clique sur **"New repository"**
3. Nomme-le **`ibec-solutions`** (ou `ibec-solutions.github.io` pour une URL courte)
4. Mets-le en **Public**
5. Clique **"Create repository"**

### Étape 2 — Uploader les fichiers

**Option A — Via l'interface GitHub (le plus simple) :**
1. Dans ton dépôt, clique **"Add file" > "Upload files"**
2. Glisse-dépose **tous les fichiers et dossiers** de ce projet
3. Clique **"Commit changes"**

**Option B — Via Git en ligne de commande :**
```bash
git init
git add .
git commit -m "🚀 Initial commit — Site IBEC Solutions"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/ibec-solutions.git
git push -u origin main
```

### Étape 3 — Activer GitHub Pages

1. Dans le dépôt, va dans **Settings > Pages**
2. Sous **"Source"**, sélectionne **"Deploy from a branch"**
3. Choisir la branche **`main`** et le dossier **`/ (root)`**
4. Clique **Save**

⏱️ Attends 1-2 minutes, ton site sera disponible à :
```
https://TON_USERNAME.github.io/ibec-solutions/
```

---

## ✏️ Modifier le site facilement

### Structure des fichiers
```
ibec-solutions/
├── index.html          ← Contenu : textes, sections, équipe...
├── css/
│   └── style.css       ← Design : couleurs, polices, tailles...
├── js/
│   └── main.js         ← Interactions : animations, formulaire...
└── README.md
```

### Changer les textes (index.html)
Ouvre `index.html` dans n'importe quel éditeur de texte (VS Code recommandé).

Chaque section est commentée :
```html
<!-- ═══ HERO ══════ -->   ← Page d'accueil
<!-- ═══ SERVICES ══ -->   ← Offre de services
<!-- ═══ EQUIPE ════ -->   ← Membres de l'équipe
<!-- ═══ CHIFFRES ══ -->   ← Stats & croissance
<!-- ═══ CONTACT ═══ -->   ← Formulaire de contact
<!-- ═══ FOOTER ════ -->   ← Pied de page
```

### Changer les couleurs (css/style.css)
En haut du fichier, modifie les variables :
```css
:root {
  --pink:    #E91E8C;   ← Rose IBEC (accents, boutons)
  --violet:  #7B2FBE;   ← Violet (cartes, titres)
  --cyan:    #00BCD4;   ← Cyan (badges, liens)
  --dark:    #0A0A14;   ← Fond principal
}
```

### Ajouter un membre de l'équipe
Copie-colle ce bloc dans la section `#equipe` de `index.html` :
```html
<div class="team-card">
  <div class="team-avatar" style="--av-color: #E67E22">XX</div>
  <div class="team-info">
    <h3>Prénom NOM</h3>
    <span class="team-role">Poste</span>
    <p>Description du collaborateur.</p>
    <div class="team-certs">
      <span>CERT1</span><span>CERT2</span>
    </div>
  </div>
</div>
```

### Activer le formulaire de contact
Le formulaire est prêt visuellement. Pour recevoir les messages, deux options gratuites :

**Formspree (recommandé) :**
1. Crée un compte sur [formspree.io](https://formspree.io)
2. Crée un nouveau formulaire et récupère ton endpoint
3. Dans `index.html`, modifie la balise form :
   ```html
   <form class="contact-form" action="https://formspree.io/f/TON_ID" method="POST">
   ```
4. Supprime le `id="contactForm"` et `novalidate`
5. Retire la gestion JS du submit dans `main.js`

---

## 🎨 Personnalisation avancée

| Élément | Fichier | Ligne |
|---|---|---|
| Titre hero "La solution IBECable" | index.html | ~55-60 |
| Slogan nav | index.html | ~15 |
| Données CA prévisionnel | index.html | ~195-200 |
| Compteurs animés (5, 6, 10+, 180K€) | index.html | attr `data-target` |
| Police d'affichage (Syne) | index.html | balise `<link>` Google Fonts |

---

## 📦 Technologies utilisées

- **HTML5** sémantique — aucune dépendance
- **CSS3** : variables, grid, flexbox, animations
- **JavaScript vanilla** — pas de framework
- **Google Fonts** : Syne (display) + DM Sans (body)
- **GitHub Pages** pour l'hébergement (gratuit)

---

*IBEC Solutions SARL — contact@ibec-solutions.fr — www.ibec-solutions.fr*
