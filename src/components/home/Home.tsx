import React from 'react'
import { AppContainer } from '../../shared'
import {Banner, HomeContainer, BannerStyledTitle, BannerInnerLeft, BannerSmallText, StyledRiSunCloudyFill} from './home.css'
import Nav from './Nav'
import Doors from './Doors'

function Home() {
  const event = new Date();
  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  };

  const optionsTime: Intl.DateTimeFormatOptions = { 
    hour: "2-digit", 
    minute: "2-digit"
  }

  const today = event.toLocaleDateString(undefined, optionsDate);
  const time = event.toLocaleTimeString('en-GB', optionsTime);

  console.log(time)
  return (
    <HomeContainer>
      <Nav/>
      <Banner>
        <BannerInnerLeft>
          <BannerStyledTitle>{time}</BannerStyledTitle>
          <BannerSmallText>{today}</BannerSmallText>
        </BannerInnerLeft>

        <StyledRiSunCloudyFill/>
      </Banner>

      <Doors/>
    </HomeContainer>
  )
}

export default Home;