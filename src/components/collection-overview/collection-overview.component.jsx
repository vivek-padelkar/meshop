import { CollectionOverviewContainer } from './collection-overview.style'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selector'
import CollectionPreview from '../previewCollection/PreviewCollection.component'

const CollectionOverview = ({ collections, match }) => {
  console.log(match)
  return (
    <CollectionOverviewContainer>
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </CollectionOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionOverview)
