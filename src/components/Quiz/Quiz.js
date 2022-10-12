
import { useLoaderData } from 'react-router-dom';
import QuizeDetails from '../QuizDetails/QuizeDetails';


const Quiz = () => {
const QuizeData =useLoaderData()

    const { data } = QuizeData;
  

    const { questions } = data;


    return (
        <div>
            <h1 className='text-center fw-bold text-5xl my-8 text-info'>{data.name} Quiz</h1>
            <div className='text-center '>
                {
                    questions.map(question => <QuizeDetails key={question.id} question={question}></QuizeDetails>)
                }
            </div>
        </div>
    );
};

export default Quiz;