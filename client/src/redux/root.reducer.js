import { combineReducers } from 'redux'
import userReducer from './user/user.reducers'
import cartReducer from './cart/cart.reducers'
import directoryReducer from './directory/directory.reducers'
import shopRducer from './shop/shop.reducers'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persitConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopRducer,
})

export default persistReducer(persitConfig, rootReducer)
