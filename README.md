Meditrack Core – Backend API

Ce projet a été réalisé dans le cadre de l’épreuve de Conception et Développement Backend.
Il s’agit d’une API REST permettant de gérer des produits médicaux, des dépôts, des zones de stockage et des mouvements (entrées, sorties, transferts).
Le projet respecte une architecture MVC, utilise MongoDB + PostgreSQL, et suit les bonnes pratiques de structuration backend.

 Fonctionnalités principales
  API Produits (CRUD complet)

Création / Lecture / Mise à jour / Suppression

Stock géré automatiquement lors des mouvements

  API Dépôts

Création, mise à jour, suppression

Association avec des produits et une structure de zones

  API Zones (MongoDB)

Structure dynamique des zones pour chaque dépôt

Stock réparti par zone

  API Mouvements

Entrée en stock

Sortie de stock

Transfert entre zones

  Authentification

Inscription

Connexion

JWT sécurisé

 Technologies utilisées
Technologie	Rôle
Node.js	Environnement d'exécution
Express	Framework backend
MongoDB / Mongoose	Stockage flexible pour les zones
PostgreSQL / pg	Données relationnelles (produits, dépôts, mouvements)
JWT	Authentification
bcrypt	Hash des mots de passe
dotenv	Variables d’environnement
Nodemon	Redémarrage automatique
 Structure du projet
meditrack-core/
│── server.js                 -> Point d’entrée du serveur
│── package.json
│── .env
│
└── src/
    ├── config/
    │     └── db.js          -> Connexions MongoDB + PostgreSQL
    │
    ├── controllers/         -> Logique métier
    │     ├── authController.js
    │     ├── depotController.js
    │     ├── produitController.js
    │     ├── zoneController.js
    │     └── mouvementController.js
    │
    ├── models/              -> Modèles Mongoose et SQL
    │     ├── userModel.js
    │     ├── produitModel.js
    │     ├── zoneModel.js
    │     └── mouvementModel.js
    │
    └── routes/              -> Routes API regroupées
          ├── authRoutes.js
          ├── depotRoutes.js
          ├── produitRoutes.js
          ├── zoneRoutes.js
          └── mouvementRoutes.js

 Installation
1️ Télécharger le projet

Récupérer le dossier fourni ou cloner depuis GitHub.

2️ Installer les dépendances
npm install

3️ Configurer les variables d’environnement

Créer un fichier .env :

PORT=3000

# MongoDB
MONGO_URI=mongodb://localhost:27017/meditrack

# PostgreSQL
PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=motdepasse
PG_DATABASE=meditrack

# Tokens
JWT_SECRET=secret123

4️ Lancer le serveur
npm run dev


Le serveur démarre sur :
 http://localhost:3000/

 Routes API
 Authentification
Méthode	Route	Description
POST	/auth/register	Créer un utilisateur
POST	/auth/login	Se connecter
 Dépôts
Méthode	Route
GET	/depots
POST	/depots
PUT	/depots/:id
DELETE	/depots/:id
 Produits
Créer un produit

POST /produits
Body :

{
  "nom": "Seringue",
  "code": "SRG-10",
  "quantite": 100,
  "depot_id": 1
}

Obtenir tous les produits

GET /produits

Mettre à jour un produit

PUT /produits/:id

Supprimer un produit

DELETE /produits/:id

 Zones (MongoDB)
Méthode	Route
GET	/zones/:depot_id
POST	/zones/:depot_id
PUT	/zones/:depot_id
 Mouvements
Action	Route
Entrée	POST /mouvements/entree
Sortie	POST /mouvements/sortie
Transfert	POST /mouvements/transfert
 Objectifs pédagogiques validés

- Mise en place d’une architecture MVC
- Création d'une API REST fonctionnelle
- Manipulation MongoDB + PostgreSQL
- Authentification sécurisée
- Tests via Thunder Client / Postman
- Usage de Git + commits structurés
- Gestion rigoureuse des variables d’environnement
- Organisation du code propre, claire et extensible

 Tests API

Toutes les routes ont été testées avec :

Thunder Client (VS Code)

Postman

Chaque action (POST, GET, PUT, DELETE, transfert, entrée, sortie) fonctionne avec des réponses JSON cohérentes et des mises à jour automatiques du stock.

 Notes

Projet développé entièrement en local.

Architecture pensée pour être lisible, évolutive et maintenable.

Peut être déployé facilement sur Render, Railway, ou autres.