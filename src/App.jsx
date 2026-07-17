import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Body from './components/Body'
import ShopNowPage from './components/ShopNowPage'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import HomePage from './components/Homepage'
import AboutPage from './components/Aboutus'
import Header from './components/Header'
import Cart from './components/EmptyCartPage'


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "Zenvy Apparel",
        element: <ShopNowPage />,
      },
      {
        path: "Aboutus",
        element: <AboutPage />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {

  return( 
  
  <>
    
  <RouterProvider router={AppRouter}/></>)
}
export default App
