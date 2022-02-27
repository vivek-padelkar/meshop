import CollectionItem from '../collectionItem/CollectionItem.component'
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './PreviewCollection.style.js'

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title}</TitleContainer>
      <PreviewContainer>
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
