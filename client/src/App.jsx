import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import ProtectRoute from './components/auth/ProtectRoute';

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={
            <ProtectRoute user={user}>   
              <Home />
            </ProtectRoute>
          } 
        />

        <Route element={<ProtectRoute user={user} />}>
          <Route path='/chat' element={<Chat />} />
          <Route path='/groups' element={<Groups />} />
        </Route>

        <Route 
          path='/login' 
          element={
            <ProtectRoute user={!user} redirect='/'>
              <Login />
            </ProtectRoute>
          } 
        />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;