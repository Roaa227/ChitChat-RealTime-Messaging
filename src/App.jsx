import MainLayout from './components/MainPage/MainPage'
import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} />
    </>

  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
