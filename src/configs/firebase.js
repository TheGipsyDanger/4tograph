import firebase from 'firebase'

let firebaseConfig = {
  apiKey: 'AIzaSyBkL-JIaS0bF8Av--S5W9Pd5G-Dr_E9rRY',
  authDomain: 'vindicce-fourtograph.firebaseapp.com',
  databaseURL: 'https://vindicce-fourtograph.firebaseio.com',
  projectId: 'vindicce-fourtograph',
  storageBucket: '',
  messagingSenderId: '974006582330',
  appId: '1:974006582330:web:97723fd5555660d88fc903',
  measurementId: 'G-MN8DMYEGM5'
}

firebase.initializeApp(firebaseConfig)

export default firebase
