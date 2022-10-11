
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css'
import SignleData from '../SingleData/SignleData';
// import { useContext } from 'react';
// import { quizContext } from '../../Layout/Root';




const Home = () => {
const quizData = useLoaderData()

const{data}=quizData;



   
    return (
        <main>
            {/* home container */}
            <section>

                <div className=' bg-img '>
                    <h1 className=' text-5xl text-center uppercase pt-6 text-white  fw-bold'>participate in Programming <br className='hidden lg:block' /> Context</h1>
                    <p className='mt-3 text-lg sm:w-80 sm:text-center lg:w-full text-white'>in ths plateform you build your programming logic with fun . its easy and simple . if you learn a lot <br /> of programming .join with us  <Link className='underline hover:text-blue-500' to='/blog'> learn more...</Link></p>
                </div>
            </section> 
           
             {/* card-container  */}
            <section className='my-24 mx-10'> 
            <div>
                <h2 className='text-center text-4xl fw-bold capitalize'>get Challenge</h2>
            </div>
            
                <div className="quize-container grid lg:grid-cols-3 grid-cols-1 gap-5">
                    {
                        data.map(singleData => <SignleData singleData={singleData} key={singleData.id}></SignleData>)
                    }
                </div>

          </section> 

        </main>


    );
};

export default Home;