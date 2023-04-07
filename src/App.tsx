import { Route, Routes } from 'react-router-dom';
import { Register, Login, Home, Notification, Door, ProtectedRoute } from './components';
import Settings from './components/settings/Settings';
import { Section } from './shared';


function App() {
  return (
    <Section>
      <Routes>

        <Route path="/login"  element={<Login/>}/>
        {/* <Route path="/register"  element={<Register/>}/> */}

        <Route path="/"  
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
        />

        <Route path="/notification"   
          element={
            <ProtectedRoute>
              <Notification/>
            </ProtectedRoute>
          }
        />

        <Route path="/settings" 
          element={
            <ProtectedRoute>
              <Settings/>
            </ProtectedRoute>
          }
        />

        <Route path="/door/:door"
          element={
            <ProtectedRoute>
              <Door/>
            </ProtectedRoute>
          }
        />

      <Route path="/*"  element={<div>Error Page!</div>}/>

      </Routes>
    </Section>
  )
}

export default App;
