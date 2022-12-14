import React from 'react';
import { Link } from 'react-router-dom';

const SignleData = ({ singleData }) => {

  const { id, logo, name, total } = singleData;

  return (
    <div className="card  shadow-xl mt-6">
      <figure><img src={logo} alt="Shoes" className='bg-black' /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }} >
          <p>Total Quiz:{total}</p>
          <Link to={`/quiz/${id}`}>
            <button className='btn btn-outline btn-info'>Start Quiz</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default SignleData;