import './PreviewCollection.style.scss'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collewction-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}

export default CollectionPreview
