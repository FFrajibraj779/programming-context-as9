// import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import StaticDetails from '../StaticDetails/StaticDetails';


// const StaticPage = () => {
//     const QuizeData =useLoaderData();
// const {data} = QuizeData;

//  return (
//         <div>
//            <div>
//             {
//                 data.map(StaticData =><StaticDetails key={StaticData.id} StaticData={StaticData}></StaticDetails>)
//             }
//            </div>
//         </div>
//     );
// };

// export default StaticPage;


import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';


const StaticDetails = () => {
    const QuizeData = useLoaderData();
    const { data } = QuizeData;
    console.log(data);

    return (
        <div >
            <h3 className='text-center text-4xl text-info my-10'>Programming Skill</h3>
            <div style={{ width: "80%" }}>
                <ResponsiveContainer width=" 100%" aspect={3}>
                    <LineChart className='m-auto ' width={500} height={400} data={data}>
                        <Line type='monotone' dataKey='total' stroke="#8884d8" />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip></Tooltip>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StaticDetails;