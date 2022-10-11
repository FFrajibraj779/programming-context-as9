
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    return (
        <div className="navbar flex justify-around ">

            <div className="navbar-start lg:hidden sm:block">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "text-blue-500" : undefined} to="/home">Home</NavLink></li>
                        <li><NavLink to=''>Portfolio</NavLink></li>
                        <li><NavLink to='/blog'>Blogs</NavLink></li>
                    </ul>
                </div>
            </div>


            <div>

                <NavLink className=' navTitle text-3xl mt-2l italic' to='/home'>Programming Context</NavLink>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex flex-column gap-6 fw-bold '>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-blue-500" : undefined} to="/home">Home</NavLink></li>
                    <li><NavLink to=''>Portfolio</NavLink></li>
                    <li><NavLink to='/blog'>Blogs</NavLink></li>
                </ul>
            </div>




        </div>

    );
};

export default Navbar;