import { Route, Routes } from 'react-router-dom';
import { Register, Login, Home } from './components';
import { Section } from './shared';

function App() {
  return (
    <Section>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/register"  element={<Register/>}/>
      </Routes>
    </Section>
  )
}

export default App;
