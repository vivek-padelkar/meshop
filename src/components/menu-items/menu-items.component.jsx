import './menu-items.styles.scss'
import { useHistory } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, urlLink }) => {
  const history = useHistory()

  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div
        className="content"
        onClick={() => {
          console.log(urlLink)
          history.push(`/${urlLink}`)
        }}
      >
        <h1 className="title">{title}</h1>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  )
}

export default MenuItem
