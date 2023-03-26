import React from 'react'
import { AppContainer } from '../../shared'
import {Banner, HomeContainer, BannerStyledTitle, BannerInnerLeft, BannerSmallText, StyledRiSunCloudyFill} from './home.css'
import Nav from './Nav'

function Home() {
  return (
    <HomeContainer>
      <Nav/>
      <Banner>
        <BannerInnerLeft>
          <BannerStyledTitle>15:23</BannerStyledTitle>
          <BannerSmallText>Sunday, March 26</BannerSmallText>
        </BannerInnerLeft>

        <StyledRiSunCloudyFill/>
      </Banner>
    </HomeContainer>
  )
}

export default Home;