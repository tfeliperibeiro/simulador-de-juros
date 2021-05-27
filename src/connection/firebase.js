import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB-eGXgtRYcwujOlaT3ewtHPd5-4IjcPJE',
  authDomain: 'simulacao-financiamento.firebaseapp.com',
  projectId: 'simulacao-financiamento',
  storageBucket: 'simulacao-financiamento.appspot.com',
  messagingSenderId: '213325316543',
  appId: '1:213325316543:web:a2a4408c942e1d9a45210a',
};
// Initialize Firebase
if (!firebase) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
