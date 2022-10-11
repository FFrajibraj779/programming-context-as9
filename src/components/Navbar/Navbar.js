import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const[open, setOpen]=useState(false);
    return (
        <div>
             <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                  {
                      open ? <XMarkIcon/>: <Bars3Icon/>
                  }
  
              </div>
            <div>
            <div>
              <ul>
                  <li className={`md:flex justify-center absolute md:static w-full  duration-500 ${open ? 'top-10`' :'top-[-120px]' }`}>
                  <NavLink to='/home'>Home</NavLink>
                  <NavLink to='/home'>Topices</NavLink>
                  <NavLink to='/home'>Blog</NavLink>
                  <NavLink to='/home'>Contact</NavLink>
                  </li>
              </ul>
            </div>
            <div>
              <NavLink to='/home'>Programming Context</NavLink>
            </div>
           
              
          </div>
        </div>
    );
};

export default Navbar;