


import { Link, NavLink } from 'react-router-dom';


import './Navbar.css'

const Header = () => {

   
  return (
    <div className="navbar shadow-xl justify-end">
    <div className=" block lg:hidden">
      <div className="dropdown ">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/static'>Statistics</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        </ul>
      </div>
    </div>
    <div className="navbar ">
      <Link to="/home" className="text-2xl text-center fw-bold italic">Programming Context</Link>
    </div>
    <div className="navbar-menu hidden lg:block ">
     <ul>
        <li><NavLink className={({isActive})=>isActive ? "text-blue-500" : undefined} to='/home'>Home</NavLink></li>
        <li><NavLink  className={({isActive})=>isActive ? "text-blue-500" : undefined} to='/static'>Statistics</NavLink></li>
        <li><NavLink  className={({isActive})=>isActive ? "text-blue-500" : undefined} to='/blog'>Blog</NavLink></li>
        
     </ul>
    </div>
  </div>

  )



};

export default Header;