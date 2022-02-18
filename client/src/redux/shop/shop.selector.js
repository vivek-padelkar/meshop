import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectCollectionsForPreviw = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((keys) => collections[keys]) : []
)

export const selectCollection = (CollectionURLParam) =>
  createSelector([selectCollections], (collection) =>
    collection ? collection[CollectionURLParam] : null
  )

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => (!!shop.collection ? true : false)
)
