import React, { useState } from 'react';
import Option from '../Option/Option';



const QuizeDetails = ({ question }) => {
    const [correct, setCorrect] = useState()

    const { options, correctAnswer } = question;
    const correctAns = () => {

        setCorrect(`
        correct Answer :
        
        ${correctAnswer}`);
      
    }
    return (
        <div>
            <div className=' w-5/6 m-auto shadow-xl my-10 p-10 relative'>



                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        
                        onClick={() => correctAns()}

                    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>


                 <p className='fw-bold'>{correct}</p>
                <h1 className='lg:text-2xl text-blue-700 mt-4'> {question.question} </h1>
                <div className=' m-auto my-3 p-4 grid grid-cols-2 gap-4'>
                    {
                        options.map(option => <Option option={option} correctAnswer={correctAnswer}></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default QuizeDetails;