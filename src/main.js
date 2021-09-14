import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// import firebase from 'firebase/compat/app'
// import { firebaseConfig } from './firebase/firebase-config.js'
// import 'firebase/compat/firestore'

// firebase.initializeApp(firebaseConfig)
// export const db = firebase.firestore()
// console.log(db)

createApp(App).use(router).mount('#app')
