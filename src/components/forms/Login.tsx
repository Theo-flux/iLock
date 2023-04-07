import { useState } from 'react';
import { auth, emailAndPassAuth } from '../../services';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/iLock.svg'
import { AppContainer, Button, InputPasssword, InputText, StyledSmallText, StyledLink } from '../../shared'
import {TopContainer, FormContainer, MidContainer, LogoImage} from './index.css'

function Login() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  function handleOnchange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setUserInfo({ ...userInfo, [name]: value });
  }

  function handleSubmit() {
    const { password, email } = userInfo;
    setError({ email: '', password: '' });

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return emailAndPassAuth(auth, email, password)
          .then((userCredential) => {
            navigate('/');
          })
          .catch((error) => {
            console.log(error.message);
            if (error.message === 'Firebase: Error (auth/wrong-password).') {
              setError({ email: '', password: 'wrong-password!' });
            } else if (
              error.message === 'Firebase: Error (auth/invalid-email).'
            ) {
              setError({ email: 'invalid-email!', password: '' });
            } else if (
              error.message === 'Firebase: Error (auth/network-request-failed).'
            ) {
              setError({ email: 'Check your internet connection!', password: '' });
            } else {
              setError({ email: 'user-not-found!', password: '' });
            }
          });
      })
      .catch((error) => {
        // Handle Errors here.
        // console.log(error.message);
      });
  }
  
  return (
    <AppContainer>
      <TopContainer>
       <StyledSmallText><StyledLink to="/register">Register</StyledLink></StyledSmallText>
      </TopContainer>

      <FormContainer>
        <MidContainer>
          <LogoImage src={Logo} alt="logo" />
        </MidContainer>

        <InputText id="email" label="Email"/>
        <InputPasssword id="password" label="Password"/>
        <Button>Sign in</Button>
      </FormContainer>
    </AppContainer>
  )
}

export default Login