import React, {useContext} from "react";
import { UserContext } from '../context/questionContext';
import data from "../variables/questions.json"

function Question() {
    const { question } = useContext(UserContext);
    return (
        <div className="font-Arvo text-center border-2 rounded-md p-8 border-cyan-300">
            {data[question].question}
        </div>
    );
}

export default Question;