import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`

export const TitleContainer = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  color: black;
  &:hover {
    color: grey;
  }
`

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`
