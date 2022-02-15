import {
  convertColectionSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils'
import { ShopActionType } from './shop.types'

export const fetchCollectionStart = () => ({
  type: ShopActionType.FETCH_COLLECTIONS_START,
})

export const fetchCollectionSuccess = (collectionMap) => ({
  type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
})

export const fetchCollectonFailure = (errMsg) => ({
  type: ShopActionType.FETCH_COLLECTIONS_FAIL,
  payload: errMsg,
})

export const fetchColletionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionStart())
    collectionRef
      .get()
      .then(async (snapshot) => {
        const collectionMap = convertColectionSnapshotToMap(snapshot)
        dispatch(fetchCollectionSuccess(collectionMap))
      })
      .catch((err) => {
        dispatch(fetchCollectonFailure(err.message))
      })
  }
}
