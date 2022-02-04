import MenuItem from '../menu-items/menu-items.component'
import './directory.style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySection } from '../../redux/directory/directory.selector'

const Directory = ({ setctions }) => {
  //console.log(setctions)
  return (
    <div className="menu-container">
      {setctions.map(({ id, title, imageUrl, size, url }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          urlLink={url}
        />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  setctions: selectDirectorySection,
})

export default connect(mapStateToProps)(Directory)
