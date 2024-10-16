import { useState } from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './components/Products/product';
import Layout from './components/Layout/Layout';
import Slider from './components/Slider/Slider';
import Notfound from './components/Notfound/Notfound';
import Home from './Pages/Home/Home';

function App() {


  
  const Router = createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {
        index:true,
        element:<Home/>
        
      },
      {
        path:"/Product",
        element:<Product/>
      }
      ,
      {
        path:"/slider",
        element:<Slider/>
      }
      ,
      {
        path:"*",
        element:<Notfound/>
      }
    ]
    }
  ])


  return (
   <RouterProvider router={Router}>

   </RouterProvider>
  );
}

export default App;
