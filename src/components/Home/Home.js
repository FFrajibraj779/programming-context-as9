import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

    return (
        <div className=' bg-img '>
            <h1 className=' text-5xl text-center capitalize pt-6 text-white  fw-bold'>participate in Programming <br className='hidden lg:block' /> Context</h1>
            <p className='mt-3 text-lg sm:w-80 sm:text-center lg:w-full text-white'>in ths plateform you build your programming logic with fun . its easy and simple . if you learn a lot <br /> of programming .join with us  <Link className='underline hover:text-blue-500' to='/blog'>learn more...</Link></p>
        </div>
    );
};

export default Home;