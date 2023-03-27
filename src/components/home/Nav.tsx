import { Link } from 'react-router-dom'
import Logo from '../../assets/images/iLock.svg'
import {NavContainer, InnerNav, StyledRiSettings5Fill, StyledRiNotificationFill, MidContainer, LogoImage} from './nav.css'

function Nav() {
  return (
    <NavContainer>
        <MidContainer>
          <LogoImage src={Logo} alt="logo" />
        </MidContainer>

        <InnerNav>
            <Link to={'/settings'}>
              <StyledRiSettings5Fill/>
            </Link>

            <Link to={'/notification'}>
              <StyledRiNotificationFill/>
            </Link>
        </InnerNav>
    </NavContainer>
  )
}

export default Nav