import {
  CollectionItemImage,
  CollectionItemContainer,
  CollectionFooter,
  Name,
  Price,
} from './collectionItem.style'

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <CollectionItemContainer>
      <CollectionItemImage imageUrl={imageUrl} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
    </CollectionItemContainer>
  )
}

export default CollectionItem
