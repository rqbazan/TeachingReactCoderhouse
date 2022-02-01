import { initializeApp, firestore } from 'firebase/app'
import 'firebase/firestore'

const app = initializeApp({
  apiKey: 'AIzaSyAQHxwCGHSXA6IshXEG61jxdSt3MbCjCsc',
  authDomain: 'teachingreactcoderhouse.firebaseapp.com',
  projectId: 'teachingreactcoderhouse',
  storageBucket: 'teachingreactcoderhouse.appspot.com',
  messagingSenderId: '758153926623',
  appId: '1:758153926623:web:19b0897db7f1a142fa966a',
})

export function getFirebaseApp() {
  return app
}

export function getFirestore() {
  return firestore(app)
}

export { firestore }
