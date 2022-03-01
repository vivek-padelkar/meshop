import * as styled from './about-us.style.js'

const About = () => {
  return (
    <styled.AboutUsContainer>
      <styled.AboutImageMainContainer>
        <styled.AboutImage src="images/about.jpg" />
      </styled.AboutImageMainContainer>

      <styled.AboutCountainer>
        <styled.AbouttitleMain>We Care</styled.AbouttitleMain>
        <styled.Abouttitle>
          ONLINE SHOPPING MADE EASY AT MeShop
        </styled.Abouttitle>
        <styled.About>
          If you would like to experience the best of online shopping for men,
          women and kids in India, you are at the right place. MeShop is the
          ultimate destination for fashion and lifestyle, being host to a wide
          array of merchandise including clothing, footwear, accessories,
          jewellery, personal care products and more. It is time to redefine
          your style statement with our treasure-trove of trendy items. Our
          online store brings you the latest in designer products straight out
          of fashion houses. You can shop online at MeShop from the comfort of
          your home and get your favourites delivered right to your doorstep.
        </styled.About>

        <styled.DevelopedByTitle>
          *Developed and maintained by Vivek
        </styled.DevelopedByTitle>
      </styled.AboutCountainer>
    </styled.AboutUsContainer>
  )
}

export default About
