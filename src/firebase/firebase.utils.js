import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyCWuaEWkp3wa4eF1_jxzh7ddorx-HstuL4',
  authDomain: 'meshop-db.firebaseapp.com',
  projectId: 'meshop-db',
  storageBucket: 'meshop-db.appspot.com',
  messagingSenderId: '346661077139',
  appId: '1:346661077139:web:8824fa5106150a35920d66',
  measurementId: 'G-2WHJLFCKS9',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  //to get snapshot********
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.log('error while adding user=' + error.message)
    }
  }
  return userRef
  //********************* */
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const siginInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
