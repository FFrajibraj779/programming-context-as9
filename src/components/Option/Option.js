import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Option = ({ option,correctAnswer }) => {
    const [ans , setAns] =useState('')
    const handleAns = () =>{
        if(correctAnswer){
            const rightAns = correctAnswer;
            setAns(rightAns)
        }
        else{
           alert('wrong ans')
        }
    }

    return (
        <div className='border-rose-300'>
            <div className='flex  gap-2'>

                <input onClick={()=>handleAns(ans)} type="checkbox" name="checkbox" id="" />
                <p className='text-xl'>{option}</p>
            </div>
        </div>

    );
};

export default Option;