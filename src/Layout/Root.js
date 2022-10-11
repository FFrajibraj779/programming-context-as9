
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'


// export const quizContext = createContext([])

const Root = () => {
  // const quizData = useLoaderData();
return (

    // <quizContext.Provider value={quizData}>
  
         <div>
         <Navbar></Navbar>
      <Outlet></Outlet>
    

         </div>
    //  {/* </quizContext.Provider> */}




  );
};

export default Root;