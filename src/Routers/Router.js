import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
          },
        {
            path:'/home',
            element:<Home></Home>
          },
          {
            path:'header',
            element:<Header></Header>
          },
         
      ]
  
    },
   
  
  
  ])