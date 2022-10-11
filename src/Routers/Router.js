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
        element:<Home></Home>,
      },
      {
         path:'quiz',
         loader: async()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz/1')
         },
         element:<Quiz></Quiz>,

      },
      // {
      //   path:'quiz/:id',
      //   loader: async(params)=>{
      //     fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      //   },
        // element:<Quiz></Quiz>
      // },
      {
        path:'/blog',
        element:<Blog></Blog>,
      },
    
    ]
  }
   
  
  
  ])