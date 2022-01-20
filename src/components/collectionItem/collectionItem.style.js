import styled from 'styled-components'

export const CollectionItemImage = styled.div`
  height: 95%;
  width: 100%;
  background-image: ${(props) => `url('${props.imageUrl}')`};
  background-position: center;
  background-size: cover;
`
export const CollectionItemContainer = styled.div`
  width: 22%;
  height: 450px;
  align-items: center;
  display: flex;
  flex-direction: column;
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
