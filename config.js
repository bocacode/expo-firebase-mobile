import * as firebase from 'firebase'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyABrJvx5WSi3HQlUCnrbZnlDzneB5U7jos',
  authDomain: 'expo-firebase-rn-js.firebaseapp.com',
  projectId: 'expo-firebase-rn-js',
  storageBucket: 'expo-firebase-rn-js.appspot.com',
  messagingSenderId: '617873694565',
  appId: '1:617873694565:web:10a462e6f276285f004b8c',
}

firebase.initializeApp(firebaseConfig)

export { firebase }
