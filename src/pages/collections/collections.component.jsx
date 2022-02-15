import {
  CollectionsContainer,
  Items,
  Title,
  Tempdiv,
} from './collections.style'
import CollectionItem from '../../components/collectionItem/CollectionItem.component'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import { useEffect } from 'react'

import { fetchColletionStartAsync } from '../../redux/shop/shop.actions'
import { fetchCollectionStart } from '../../redux/shop/shop.actions'

const Collections = ({ fetchCollectionStart, collections }) => {
  useEffect(() => {
    fetchCollectionStart()
  }, [fetchCollectionStart])

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
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
})

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Collections)
