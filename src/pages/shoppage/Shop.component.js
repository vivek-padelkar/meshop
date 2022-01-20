import { Component } from 'react'
import { SHOP_DATA } from '../../utils/shop.data'
import CollectionPreview from '../../components/previewCollection/PreviewCollection.component'

class ShopPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map((collection) => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    )
  }
}

export default ShopPage
