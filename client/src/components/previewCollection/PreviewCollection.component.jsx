import CollectionItem from '../collectionItem/CollectionItem.component'
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './PreviewCollection.style.js'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const CollectionPreview = ({ title, items }) => {
  const history = useHistory()

  return (
    <CollectionPreviewContainer>
      <TitleContainer to={`/shop/${title.toLowerCase()}`}>
        {title}
      </TitleContainer>
      <PreviewContainer>
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
