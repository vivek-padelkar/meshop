import './PreviewCollection.style.scss'
import CollectionItem from '../collectionItem/CollectionItem.component'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collewction-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.slice(0, 4).map((item) => (
          <CollectionItem
            key={item.id}
            item={item}
            // imageUrl={item.imageUrl}
            // name={item.name}
            // price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default CollectionPreview
