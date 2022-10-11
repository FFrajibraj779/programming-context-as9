import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers/Router';
import Image from '../src/image/home-2.png'




function App() {
    return (
    <div className="app" 
   >

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
