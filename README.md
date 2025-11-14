 Meditrack Core – Backend API

Ce projet a été réalisé dans le cadre de l’épreuve de Conception et Développement Backend.
L’objectif est de mettre en place une API REST simple permettant de gérer des produits médicaux (création, lecture, mise à jour, suppression).

L’application est développée avec :

Node.js

Express

MongoDB

Mongoose

Elle respecte une architecture MVC et utilise des variables d’environnement pour la configuration.

 Installation
1 Récupération du projet

Télécharger le dossier du projet fourni pendant l’épreuve.

2️ Installation des dépendances

Depuis la racine du projet :

npm install

3️ Configuration des variables d’environnement

Créer un fichier .env à la racine  :

PORT=3000
MONGO_URI=mongodb://localhost:27017/meditrack

4️ Lancer le serveur

Mode développement :

npm run dev


Le serveur démarre sur :

http://localhost:3000/

 Structure du projet
meditrack-core/
│── src/
│   ├── config/
│   │     └── db.js              -> Connexion MongoDB
│   ├── controllers/             -> Logique métier
│   ├── models/                  -> Schémas Mongoose
│   └── routes/                  -> Définition des routes API
│
├── server.js                    -> Point d’entrée du serveur
├── package.json
├── .env.example
└── README.md

 Dépendances principales
Package	Rôle
express	Framework backend
mongoose	Gestion de MongoDB
dotenv	Variables d’environnement
cors	Gestion des accès externes
nodemon	Redémarrage automatique
 Routes de l’API
 Créer un produit

POST /produits

Body JSON :

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

 Objectifs pédagogiques validés

Mise en place d’une architecture MVC

Création d’un backend REST fonctionnel

Manipulation d’une base MongoDB

Utilisation de Git avec commits réguliers

Tests via Thunder Client ou Postman

Gestion des variables d’environnement

Organisation du code selon les bonnes pratiques

 Tests API

L’ensemble des routes a été testé avec Thunder Client (VS Code).
Chaque action (POST, GET, PUT, DELETE) a été vérifiée, avec des réponses JSON cohérentes.

 Notes

Le projet a été développé dans un environnement local, sans hébergement externe.
Il est conçu pour être simple, lisible, et facilement extensible.