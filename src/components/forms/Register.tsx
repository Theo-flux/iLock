import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/iLock.svg'
import { AppContainer, Button, InputPasssword, InputText, InputEmail, StyledSmallText, StyledLink } from '../../shared'
import {TopContainer, FormContainer, MidContainer, LogoImage} from './index.css'

function Register() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '', username: '' });
  const [error, setError] = useState({ email: '', password: '', username: '' });
  const navigate = useNavigate();

  function handleOnchange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;

    setUserInfo({ ...userInfo, [name]: value });
  }
  return (
    <AppContainer>
      <TopContainer>
       <StyledSmallText><StyledLink to="/login">Sign in</StyledLink></StyledSmallText>
      </TopContainer>
      
      <FormContainer>
        <MidContainer>
          <LogoImage src={Logo} alt="logo" />
        </MidContainer>

        <InputEmail name="email" id="email" label="Email" onChange={handleOnchange}/>
        <InputText name="username" id="username" label="username" onChange={handleOnchange}/>
        <InputPasssword name="password" id="password" label="Password" onChange={handleOnchange}/>
        <Button>Register</Button>
      </FormContainer>
    </AppContainer>
  )
}

export default Register