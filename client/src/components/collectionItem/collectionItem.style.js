import styled from 'styled-components'
import CustomeButton from '../custome-button/CustomeButton.component'

export const CollectionItemImage = styled.div`
  height: 95%;
  width: 100%;
  background-image: ${(props) => `url('${props.imageUrl}')`};
  background-position: center;
  background-size: cover;
`

export const CollectionFooter = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  justify-content: space-between;
  font-size: 18px;
`
export const Name = styled.span`
  width: 90%;
  margin-bottom: 20px;
  font-size: 24px;
`
export const Price = styled.span``

export const StyledButton = styled(CustomeButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 350px;
  background-color: white;
  color: black;
  display: none;
  &:hover {
    background-color: black;
    color: white;
  }
`
export const CollectionItemContainer = styled.div`
  width: 22vw;
  height: 450px;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover {
    ${CollectionItemImage} {
      opacity: 0.8;
    }
    ${StyledButton} {
      opacity: 0.7;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
