import Logo from '../../assets/images/iLock.svg'
import {NavContainer, InnerNav, StyledRiSettings5Fill, StyledRiNotificationFill, MidContainer, LogoImage} from './nav.css'

function Nav() {
  return (
    <NavContainer>
        <MidContainer>
          <LogoImage src={Logo} alt="logo" />
        </MidContainer>

        <InnerNav>
            <StyledRiSettings5Fill/>
            <StyledRiNotificationFill/>
        </InnerNav>
    </NavContainer>
  )
}

export default Nav