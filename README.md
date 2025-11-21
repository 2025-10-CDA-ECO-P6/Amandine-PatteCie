# Patte&Cie - Gestion des Animaux

![Diagram Use Case](/public/logo_PatteCie.png)

## Description

Patte&Cie est une application web développée avec **Next.js**, permettant de gérer 
et consulter les informations des animaux de compagnie.

Elle inclut actuellement :

- Affichage de la liste des animaux
- Barre de recherche par nom de l'animal ou propriétaire
- Affichage du carnet de santé de l'animel avec sa fiche, les prochains rendez-vous et traitements
- Interface responsive et simple à utiliser

## Stack Technique

- **Framework** : Next.js
- **Langage** : JavaScript (React)
- **Gestion des données** : Fichiers JSON
- **Icônes** : lucide-react

## Installation

1. Cloner le dépôt :
```bash
git clone git@github.com:2025-10-CDA-ECO-P6/Amandine-PatteCie.git
cd Amandine-PatteCie
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le projet en mode développement :
```bash
npm run dev
```

4. Ouvrir le navigateur sur `http://localhost:3000`

## Structure du Projet
```
src/
  ├─ app/
  │   ├─ globals.css       # Styles globaux
  │   ├─ layout.js         # Layout principal
  │   └─ page.js           # Page principale avec recherche
  │
  ├─ components/
  │   ├─ card-animal/      # Carte animale
  │   ├─ header/           # Composant Header
  │   └─ ui/button/        # Composant Button
  │
  └─ data/
      └─ animals.json      # Données des animaux
```

![Organisation du projet GitHub](/Ressources/images/Github_project_screen.png)

## Fonctionnalités

### 1. Barre de recherche
- Permet de filtrer les animaux par nom ou propriétaire.

### 2. Responsive design
- L’interface est adaptée aux mobiles.

## Diagrammes et Maquettes:

### Diagramme UML – Cas d’utilisation
![Diagram Use Case](/Ressources/images/Diagram_Use_case-PatteCie.png)

### Dictionnaire de données
![Dictionnaire Donnees](/Ressources/images/Dictionnaire_donnees_PatteCie.png)

### Maquette Mobile
![Maquette Mobile](/Ressources/images/MaquetteMobileFigma.png)

### MCD (MERISE)
![MCD](/Ressources/images/MCD_PatteCie_Amandine_Haitem.png)

## Diagramme UML – Cas d’utilisation
- Voir liste animaux
- Rechercher un animal
- Voir fiche (vaccinations, visites, traitements)

## MCD (MERISE)
- Un propriétaire possède 1 à N animaux (1,n)
- Un animal appartient à 1 propriétaire (1,1)
- Un animal reçoit 0 à N visites (0,n)
- Une visite concerne 1 animal (1,1)
- Une visite est consultée par 1 vétérinaire (1,n)
- Un vétérinaire consulte N visites (1,1)
- Une visite inclut 0 à N traitements (0,n)
- Un traitement est inclus dans 1 visite (1,n)

## User-Stories
### Vétérinaire (Dr. Stone Lucie)
- Objectif : Accéder aux carnets de santé des animaux
- Motivations : Sécurité et bien-être des animaux, gain de temps
- Frustrations : Données dispersées sur plusieurs systèmes

### Propriétaire (Julie Dupont)
- Objectif : Suivre la santé de son animal
- Motivations : Vérifier vaccinations et traitements
- Frustrations : Applications complexes ou jargon médical

### Secrétaire (Stéphanie Leroy)
- Objectif : Faciliter la recherche d'animaux et planification des rendez-vous
- Motivations : Gestion efficace et rapide
- Frustrations : Applications peu intuitives

## Structure des commits
- `US-10: Fix search bar`
- `US-06: Add the project tree structure Nextjs`

## Déploiement
- Déploiement sur Render
- Créer un compte sur Render
- Connecter le dépôt GitHub
- Configurer les paramètres de build
- Déployer automatiquement à chaque push

## Linter
```bash
pnpm lint
```
![Linter](/Ressources/images/Linter.png)

## Prochaines fonctionnalités
- Authentification propriétaire pour un accès sécurisé
- Intégration d'une API backend

## Licence
MIT License

## Contact
**Amandine KEMP** - https://github.com/amandinekemp  

GitHub : https://github.com/2025-10-CDA-ECO-P6/Amandine-PatteCie
Projet : Patte&Cie

## Présentation Vidéo
Vous pouvez voir une présentation vidéo du projet ici : [Présentation du projet](https://www.loom.com/share/4e358d1bf5c34822bdc2a532be9a1cf2)
