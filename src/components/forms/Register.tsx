import Logo from '../../assets/images/iLock.svg'
import { AppContainer, Button, InputPasssword, InputText, StyledSmallText, StyledLink } from '../../shared'
import {TopContainer, FormContainer, MidContainer, LogoImage} from './index.css'

function Register() {
  return (
    <AppContainer>
      <TopContainer>
       <StyledSmallText><StyledLink to="/login">Sign in</StyledLink></StyledSmallText>
      </TopContainer>
      
      <FormContainer>
        <MidContainer>
          <LogoImage src={Logo} alt="logo" />
        </MidContainer>

        <InputText id="email" label="Email"/>
        <InputText id="username" label="Username"/>
        <InputPasssword id="password" label="Password"/>
        <Button>Register</Button>
      </FormContainer>
    </AppContainer>
  )
}

export default Register