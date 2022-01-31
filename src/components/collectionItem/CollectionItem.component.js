import {
  CollectionItemImage,
  CollectionItemContainer,
  CollectionFooter,
  Name,
  Price,
  StyledButton,
} from './collectionItem.style'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <CollectionItemContainer>
      <CollectionItemImage imageUrl={imageUrl} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>

      <StyledButton
        onClick={() => {
          addItem(item)
        }}
      >
        ADD TO CART
      </StyledButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
