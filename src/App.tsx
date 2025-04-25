import { Route, Routes } from 'react-router-dom';

import LoginLayout from 'layouts/LoginLayout';
import MainLayout from 'layouts/MainLayout';
import RegistLayout from 'layouts/RegistLayout';
import Loader from 'pages/Loader';
import Location from 'pages/Location';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Loader />} />
      <Route path='/auth' element={<LoginLayout />}>
        <Route index element={<SignIn />} />
      </Route>
      <Route path='/regist' element={<RegistLayout />}>
        <Route index element={<SignUp />} />
      </Route>
      <Route path='/main' element={<MainLayout />}>
        <Route index element={<Location />} />
      </Route>
    </Routes>
  );
}

export default App;
