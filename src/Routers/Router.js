import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Quiz from "../components/Quiz/Quiz";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    loader: ()=>{
      return fetch('https://openapi.programming-hero.com/api/quiz')
    },
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
      
        element:<Home></Home>,
      },
      {
        path:'/home',
        loader: ()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element:<Home></Home>,
      },
      {
         path:'quiz',
      
         element:<Quiz></Quiz>,

      },
      {
        path:'/home/:id',
        loader: async({params})=>{
          console.log(params);
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element:<Quiz></Quiz>
      },
      {
        path:'/blog',
        element:<Blog></Blog>,
      },
    
    ]
  }
   
  
  
  ])