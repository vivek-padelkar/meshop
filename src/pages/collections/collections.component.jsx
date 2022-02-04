import {
  CollectionsContainer,
  Items,
  Title,
  Tempdiv,
} from './collections.style'
import CollectionItem from '../../components/collectionItem/CollectionItem.component'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'

const collections = ({ collections }) => {
  const { title, items } = collections
  console.log(collections)
  return (
    <CollectionsContainer>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <Tempdiv key={item.id}>
            <CollectionItem item={item} />
          </Tempdiv>
        ))}
      </Items>
    </CollectionsContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(collections)
