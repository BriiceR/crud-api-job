![badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![badge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

# CRUD API JOB en Node.js et MongoDB

Ceci est une API CRUD (Create, Read, Update, Delete) en Node.js et MongoDB. Elle permet de créer, lire, mettre à jour et supprimer des éléments dans une base de données MongoDB.

## Installation:

Cloner ce repository : git clone https://github.com/BriiceR/crud-api-job.git  
Installer les dépendances : npm install

## Configuration:

Créer une base de donnée MongoDB  
Créer un fichier .env à la racine du projet  
Ajouter les variables d'environnement suivantes :

```makefile
MONGO_URI=mongodb+srv://<nom-d'utilisateur>:<mot-de-passe>@<nom-du-cluster>.mongodb.net/<nom-de-la-base>?retryWrites=true&w=majority
PORT=8080
```
Assurez-vous que le nom d'utilisateur, le mot de passe, le nom du cluster et le nom de la base de données correspondent à ceux que vous avez définis lors de la création de votre base de données MongoDB.

## Utilisation:

Démarrer le serveur : npm start  
Envoyer des requêtes à l'API en utilisant un outil comme Postman   

## Endpoints:
GET /localhost:8080/jobs : Récupérer toutes les offres
GET /localhost:8080/jobs/:id : Récupérer une offre par ID  
GET /localhost:8080/jobs/serch : Rechercher une offre par ID  
POST /localhost:8080/jobs : Créer un nouvel élément  
PUT /localhost:8080/jobs/updatejob/:id : Mettre à jour un élément par ID  
DELETE /localhost:8080/jobs/:id : Supprimer un élément par ID  

## Contribution:

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, merci de créer une issue ou une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
