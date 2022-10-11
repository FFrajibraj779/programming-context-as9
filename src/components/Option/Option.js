import React from 'react';

const Option = ({ option }) => {
 
    return (
        <div className='border-rose-300'>
            <div className='flex  gap-2'>

                <input type="checkbox" name="checkbox" id="" />
                <p className='text-xl'>{option}</p>
            </div>
        </div>

    );
};

export default Option;