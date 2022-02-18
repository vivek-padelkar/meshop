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
  //to get snapshot********
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    console.log(userAuth)
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

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  // console.log(collectionRef)

  const batch = firestore.batch()

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertColectionSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })

  return transformCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {})

  // console.log(transformCollection)
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const siginInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
