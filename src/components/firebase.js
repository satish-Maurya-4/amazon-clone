import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCL5I56GGm6FBhxfHCkY3JJ4wGXxlMmhP0',
  authDomain: 'clone-b516d.firebaseapp.com',
  projectId: 'clone-b516d',
  storageBucket: 'clone-b516d.appspot.com',
  messagingSenderId: '692007584641',
  appId: '1:692007584641:web:1e6309641d6d86f96c1e80',
})

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }
