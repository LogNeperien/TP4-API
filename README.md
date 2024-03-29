# TP4-API

An introduction of an API used with NodeJS

A lire imp�rativement avant de commencer quoi que ce soit, ce sont les r�gles que vous devrez appliquer tout au long du semestre:

<p align="center">
 <a href="https://github.com/clementAC/Instructions-Technologies-Web-OCRES-Ing4/blob/master/README.md">R�gles pour le semestre</a>
</p>

## Faire une API REST sur une base de donn�e de film
?
Construire une API qui peut cr�er, modifier, afficher, effacer un film.
?
Il sera possible de requ�ter sur les routes suivantes:
?
- GET localhost:3000/movies -- Affiche tout les films
- GET localhost:3000/movies/:id -- Affiche un film via son id
- PUT localhost:3000/movies/ -- Ajoute un film via son nom
- POST localhost:3000/movies/:id -- Update un film via son id
- DELETE localhost:3000/movies/:id -- Efface un film via son id
?

La donn�e sera sous forme d'un tableau d'objets JSON.
?
Chaque film aura � la fin la structure suivante:
?
```js
 {
  id: String,
  movie: String,
  yearOfRelease: Number,
  duration: Number // en minutes,
  actors: [String, String],
  poster: String // lien vers une image d'affiche,
  boxOffice: Number // en USD$,
  rottenTomatoesScore: Number
 }
```
?
Afin de r�cup�rer ces informations vous utiliserez l'api suivante http://www.omdbapi.com/
?

**Vous devrez tester vos requ�tes � l'aide de POSTMAN**

?
### STEP 1: Get started
?
Utilisez express-generator pour initier votre tp
?
### STEP 2: Requ�tes CRUD


1. Cr�er un nouveau fichier dans le repertoire routes
2. D�clarez votre nouvelle route dans le fichier app.js
3. Dans votre nouveau fichier de route, cr�er les routes CRUD.
4. Pour l'instant nous gerons la base de donn�e en utilisant uniquement un ID et le nom du film.
?
### Step 3: Requ�tes API Externe
?
**Pr�-requis:**
?
1. Creer une cl� API: http://bit.ly/2GOS5Tc
?
2. Tester votre cl�: http://www.omdbapi.com/?t=inception&apikey=VOTRECLEAPI

**Remplir la base de donn�e avec des donn�es suppl�mentaires**

Dans cette �tape vous aurez � appeler l'API omdb pour retrouver les informations d'un film gr�ce � son nom. 

Faites le avec la librairie axios :
?
```shell
$ npm i -s axios
```
?
Documentation axios : https://github.com/axios/axios

R�cuperer les champs voulus et les inserer dans votre "DB" � chaque requ�te PUT/POST.


### Step 3 - Creer une documentation de votre API
?
Plusieurs solutions:
?
- Utiliser POSTMAN: https://medium.com/@olotintemitope/how-to-generate-your-api-documentation-in-20-minutes-4e0072f08b94
?
- Utiliser API Doc: http://apidocjs.com/
?
- Utiliser Swagger: https://github.com/swagger-api/swagger-node
?
### Step 4 - BONUS
?
Cr�er un site � l'aide de React qui n'aura qu'une seule fonctionnalit�, afficher tous les films:
?
- Cr�er un composant Film
- Cr�er un container ListeFilms
- R�cuperer la liste des films lorsque le container ListeFilms est mont�
- Parcourir cette liste pour 'render' des composants films
?
Vous devrez faire fonctionner en m�me votre projet react et votre projet api dans deux consoles pour pouvoir interagir entre les deux.
