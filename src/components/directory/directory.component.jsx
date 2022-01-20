import { Component } from 'react'
import MenuItem from '../menu-items/menu-items.component'
import './directory.style.scss'

class Directory extends Component {
  constructor() {
    super()
    this.state = {
      setctions: [
        {
          id: 1,
          title: 'hats',
          imageUrl: 'images/hat.jpg',
          url: 'hats',
        },
        {
          id: 2,
          title: 'jackets',
          imageUrl: 'images/jacket.jpg',
        },
        {
          id: 3,
          title: 'sneakers',
          imageUrl: 'images/sneakers.jpg',
        },
        {
          id: 4,
          title: 'mens',
          imageUrl: 'images/men.jpg',
          size: 'large',
        },
        {
          id: 5,
          title: 'womens',
          imageUrl: 'images/women.jpg',
          size: 'large',
        },
      ],
    }
  }

  render() {
    return (
      <div className="menu-container">
        {this.state.setctions.map(({ id, title, imageUrl, size, url }) => (
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
}

export default Directory
