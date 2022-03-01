import styled from 'styled-components'

export const CollectionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`
export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`
export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Tempdiv = styled.div`
  margin-bottom: 25px;
`
