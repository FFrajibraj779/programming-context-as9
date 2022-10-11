

import { useContext } from 'react';
import { quizContext } from '../../Layout/Root';
import QuizeDetails from '../QuizDetails/QuizeDetails';


const Quiz = () => {
const QuizeData =useContext(quizContext)
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