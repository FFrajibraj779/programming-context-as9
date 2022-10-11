import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      // loader:async(params)=>{

      //   return fetch(`https://openapi.programming-hero.com/api/quiz/1`)

      // },
     
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            loader:() =>{
              return fetch('https://openapi.programming-hero.com/api/quiz')
            },
            element:<Home></Home>
          },
        {
            path:'/home',
            element:<Home></Home>
          },
        
         
      ]
  
    },
   
  
  
  ])