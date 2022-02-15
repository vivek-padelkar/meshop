import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root.reducer'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.saga'

const sageMiddleWare = createSagaMiddleware()

const middleware = [sageMiddleWare]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleware))

sageMiddleWare.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor }
