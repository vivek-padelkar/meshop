import {
  CollectionsContainer,
  Items,
  Title,
  Tempdiv,
} from './collections.style'
import CollectionItem from '../../components/collectionItem/CollectionItem.component'
import { useSelector, useDispatch, usepa } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCollectionStart } from '../../redux/shop/shop.actions'

const Collections = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const { collectionId } = params

  console.log(collectionId)

  useEffect(() => {
    dispatch(fetchCollectionStart())
  }, [dispatch])

  const collections = useSelector(selectCollection(collectionId))
  return (
    <CollectionsContainer>
      {collections ? (
        <>
          <Title>{collections.title}</Title>
          <Items>
            {collections.items.map((item) => (
              <Tempdiv key={item.id}>
                <CollectionItem item={item} />
              </Tempdiv>
            ))}
          </Items>
        </>
      ) : (
        <div>Loading....</div>
      )}
    </CollectionsContainer>
  )
}
// const mapDispatchToProps = (dispatch) => ({
//   fetchCollectionStart: () => dispatch(fetchCollectionStart()),
// })

// const mapStateToProps = (state, ownProps) => ({
//   collections: selectCollection(ownProps.match.params.collectionId)(state),
// })

export default Collections
