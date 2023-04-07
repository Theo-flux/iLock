import { Link } from 'react-router-dom'
import Logo from '../../assets/images/iLock.svg'
import { AppContainer, Button, InputPasssword, InputText, StyledSmallText, StyledLink } from '../../shared'
import {TopContainer, FormContainer, MidContainer, LogoImage} from './index.css'

function Login() {
  return (
    <AppContainer>
      <TopContainer>
       <StyledSmallText><StyledLink to="/register">Register</StyledLink></StyledSmallText>
      </TopContainer>

      <FormContainer>
        <MidContainer>
          <LogoImage src={Logo} alt="logo" />
        </MidContainer>

        <InputText id="username" label="Username"/>
        <InputPasssword id="password" label="Password"/>
        <Button>Sign in</Button>
      </FormContainer>
    </AppContainer>
  )
}

export default Login