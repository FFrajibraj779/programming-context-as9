import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Quiz from "../components/Quiz/Quiz";
import StaticPage from "../components/StaticPage/StaticPage";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Home></Home>,
      },
      {
        path: '/home',
        loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Home></Home>,
      },
      {
        path: 'quiz',
        loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Quiz></Quiz>,
      },


      {
        path: 'quiz/:id',
        loader: async ({ params }) => {
          console.log(params);
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element: <Quiz></Quiz>
      },
      {
        path: 'static',
        loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <StaticPage></StaticPage>
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },

    ]
  }



])