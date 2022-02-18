import { ShopActionType } from './shop.types'

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errMessage: '',
}

const shopRducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionType.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      }
    case ShopActionType.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      }
    case ShopActionType.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        errMessage: action.payload,
      }
    default:
      return state
  }
}

export default shopRducer
