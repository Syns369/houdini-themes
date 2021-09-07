import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyA_uiX-BRMdIBBmw282HOpt7gl2V24886o',
    authDomain: 'houdini-themes.firebaseapp.com',
    projectId: 'houdini-themes',
    storageBucket: 'houdini-themes.appspot.com',
    messagingSenderId: '263102797065',
    appId: '1:263102797065:web:4800d4ea0084a72a9c6fd8',
    measurementId: 'G-D1MP6YS31N',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()
