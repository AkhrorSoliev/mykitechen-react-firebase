import firebase from 'firebase'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCZpdemKBDW4Jen5mrygQ7It_Mdzu-eWIY',
  authDomain: 'my-kitchen-464c5.firebaseapp.com',
  projectId: 'my-kitchen-464c5',
  storageBucket: 'my-kitchen-464c5.appspot.com',
  messagingSenderId: '154849546877',
  appId: '1:154849546877:web:3d1d28f50447bdfdee5714',
  measurementId: 'G-7S4BT3SGW1',
}

// init configs

firebase.initializeApp(firebaseConfig)

const projectFirstore = firebase.firestore()

export { projectFirstore }
