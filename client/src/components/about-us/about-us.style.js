import styled from 'styled-components'

export const AboutUsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const AboutCountainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #d9dbdb;
  width: 100%;
`
export const AbouttitleMain = styled.div`
  color: black;
  font-size: 80px;
  font-weight: bolder;
  text-align: center;
  color: teal;
`
export const Abouttitle = styled.div`
  color: black;
  font-size: 28px;
  font-weight: bolder;
  text-align: center;
`
export const About = styled.p`
  font-size: 20px;
  margin: 30px;
  line-height: 30px;
`

export const DevelopedByTitle = styled.p`
  font-style: italic;
  font-size: 20px;
  margin: 30px;
`
export const AboutImageMainContainer = styled.div`
  background-color: #d9dbdb;
  width: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`
// export const AboutImageContainer = styled.div`
//   background-color: blue;
//   width: 80%;
//   margin: auto;
//   margin-top: 10%;
//   max-height: 100%;
// `
export const AboutImage = styled.img`
  max-width: 100%;
  max-height: 90%;

  @media screen and (max-width: 800px) {
    max-width: 80%;
    max-height: 90%;
  }
`
