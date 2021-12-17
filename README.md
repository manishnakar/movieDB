# MovieDB

Lets Create a Movies and TV Series App in React JS and Material UI with full responsive fuctionality. We will use https://www.themoviedb.org API for backend.

Try the demo at https://moviedb.firebaseapp.com.

## Stack

- Create React App
- React Router
- redux-toolkit
- Firebase SDK with OAuth authentication
- Lazy loading
- Google analytics
- Social Login

#TODO
react-query for caching
react toast
react content loader
react filepond for file upload
react select - react-select.com/home
React Hook Form
splitbee.io

## Deploying to Firebase

#### Prerequisites:

- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

#### Configure this app with your project-specific details:

```json
// .firebaserc
{
  "projects": {
    "default": "your-project-id"
  }
}
```

```javascript
// src/firebase/config.js
export const firebaseConfig = {
  apiKey: "your api key",
  authDomain: "your-project-id.firebaseapp.com",
  databaseURL: "https://your-project-id.firebaseio.com",
  storageBucket: "your-project-id.appspot.com",
};
```

#### Install firebase-tools:

```shell
$ npm install -g firebase-tools
```

#### Build and deploy the app:

```shell
$ npm run build
$ firebase login
$ firebase use default
$ firebase deploy
```
