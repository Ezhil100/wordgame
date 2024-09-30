import React, {useContext} from "react";
import { UserContext } from '../context/questionContext';
import data from "../variables/questions.json"

function QuestionCount() {
    const { question } = useContext(UserContext);
    return (
        <div className=" font-Arvo text-2xl text-center">Question {data[question].id} of {data.length}</div>
    );
}

export default QuestionCount;