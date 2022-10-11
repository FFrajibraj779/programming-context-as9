import React from 'react';

const Link = ({route}) => {
    return (
        <div className=' bg-orange-400  '>
            {
                <ul className='mr-5 font-bold lg:text-2xl '>
                    <li><a href={route.path}>{route.name}</a></li>
                </ul>
            }
           
        </div>
    );
};

export default Link;