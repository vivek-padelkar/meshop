import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-items.styles.js'
import { useHistory } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, urlLink }) => {
  const history = useHistory()

  return (
    <MenuItemContainer
      size={size}
      // onClick={() => history.push(`${history.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <ContentContainer
        className="content"
        onClick={() => {
          history.push(`/${urlLink}`)
        }}
      >
        <ContentTitle className="title">{title}</ContentTitle>
        <ContentSubtitle className="subtitle">shop now</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default MenuItem
