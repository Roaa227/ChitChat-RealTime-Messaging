import MainLayout from './components/MainPage/MainPage'
import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/chat" element={<MainLayout />} />
    </>

  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
