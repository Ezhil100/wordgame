import React, { useContext } from "react";
import { UserContext } from '../context/questionContext';

const NextQuestion = () => {
    const { question, setQuestion } = useContext(UserContext);

    function handleClick() {
        setQuestion(question + 1);
    }

    return (
        <div className="flex items-center justify-center">
            <button className="p-4 font-Arvo bg-[rgb(255,71,93)] bg-gradient-to-b from-[rgba(255,71,93,1)] to-[rgba(255,106,160,1)]" onClick={() => {handleClick()}}>
                Next Question
            </button>
        </div>
    );
}

export default NextQuestion;