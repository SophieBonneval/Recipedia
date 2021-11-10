# Recipedia

Recipedia is an app to help food lovers search for recipes, add recipes to their favourite list and with the inspiration of browing recipes they can create their own recipes.

## User stories

```
As a user
So I can join Recepedia
I want to be able to register
```

```
As a user
So I can see further content of Recepedia
I want to be able to login
```

```
As a user
So I can see a list of recipes
I want to search for recipes by an ingredient
```

```
As a user
So I can see my favourite recipes
I want to add a recipe to my favourites list
```

```
As a user
So I can see my own recipes
I want to create my own recipes
```

## The Team

[![Amanda](https://img.icons8.com/nolan/25/github.png)](https://github.com/mandyvuong) Amanda |
[![Boris](https://img.icons8.com/nolan/25/github.png)](https://github.com/borisl16) Boris |
[![Jake](https://img.icons8.com/nolan/25/github.png)](https://github.com/Jjake540) Jake |
[![Keldra](https://img.icons8.com/nolan/25/github.png)](https://github.com/KeldraSJ) Keldra |
[![Sophie](https://img.icons8.com/nolan/25/github.png)](https://github.com/Maldorana) Sophie |

## Technologies

- React
- Firebase
  - Authentication
  - Firestorage
  - Firestore database
  - Hosting

## Installation

On the command line type in the following

```
git clone https://github.com/Maldorana/Recipedia.git
npm install
```

Log into https://firebase.google.com/, create a Firebase project and on the command line type in the following

```
npm install firebase
```

Log into https://spoonacular.com/food-api to retrieve an API key

Create a .env file in the root directory. Insert your Spoonacular API key and your Firebase project credentials as follows

```
REACT_APP_FIREBASE_API_KEY=''
REACT_APP_FIREBASE_AUTH_DOMAIN=''
REACT_APP_FIREBASE_DATABASE_URL=''
REACT_APP_FIREBASE_PROJECT_ID=''
REACT_APP_FIREBASE_STORAGE_BUCKET=''
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=''
REACT_APP_FIREBASE_APP_ID=''
REACT_APP_API_KEY=''
```

## How to run program on local host

On the command line type in the following and open [http://localhost:3000](http://localhost:3000) to view it in the browser

```
npm start
```

## Launch test runner

On the command line type in the following to launch the test runner in the interactive watch mode

```
npm test
```

### Deployment

Firebase Hosting was used to deploy our project. On the command line type in the following:

```
npm run build
firebase init hosting
build
y
n
n
firebase deploy
```
