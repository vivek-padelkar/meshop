import SHOP_DATA from './shop.data'

const INITIAL_STATE = {
  collections: SHOP_DATA,
}

const shopRducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default shopRducer
