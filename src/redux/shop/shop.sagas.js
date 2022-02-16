import { takeLatest, call, put, all } from 'redux-saga/effects' //listen for every action of every type which we passed
import {
  convertColectionSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils'
import { fetchCollectionSuccess, fetchCollectonFailure } from './shop.actions'
import { ShopActionType } from './shop.types'

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionMap = yield call(convertColectionSnapshotToMap, snapshot)
    yield put(fetchCollectionSuccess(collectionMap)) //dispatching
  } catch (error) {
    yield put(fetchCollectonFailure(error.message)) //dispatching
  }
}

export function* fetchCollectionStart() {
  //this function will pause when any specific action comes in
  yield takeLatest(ShopActionType.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}

export function* shopSagas(){
  yield all([call(fetchCollectionStart)])
}