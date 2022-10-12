import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, correctAnswer }) => {

  const [ans, setAns] = useState('');

  const handleAns = () => {

    if (option === correctAnswer) {
      setAns(correctAnswer)
      toast.success('Correct Answer', {
        position: toast.POSITION.TOP_CENTER

      });
    }
    else {
      toast.warning('Wrong answer', {
        position: toast.POSITION.TOP_CENTER

      });
    }
  }

  return (
    <div>

      <div className='lg:flex justify-center gap-2'>
        <ToastContainer></ToastContainer>
        <input onClick={() => handleAns(ans)} type="radio" name="radio" id="" />

        <p className='text-xl '>{option}</p>

      </div>
    </div>

  );
};

export default Option;