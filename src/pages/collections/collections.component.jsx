import { CollectionsContainer } from './collections.style'
import CollectionItem from '../../components/collectionItem/CollectionItem.component'

const collections = ({ match }) => {
  console.log(match)
  return (
    <CollectionsContainer>
      <h2>hi</h2>
    </CollectionsContainer>
  )
}

export default collections
