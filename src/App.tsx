import { Route, Routes } from 'react-router-dom';
import { Register, Login, Home, Notification, Door } from './components';
import Settings from './components/settings/Settings';
import { Section } from './shared';

function App() {
  return (
    <Section>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/register"  element={<Register/>}/>
        <Route path="/notification"  element={<Notification/>}/>
        <Route path="/settings"  element={<Settings/>}/>
        <Route path="/door/:door"  element={<Door/>}/>
      </Routes>
    </Section>
  )
}

export default App;
