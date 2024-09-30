import React, { useContext } from "react";
import { UserContext } from '../context/questionContext';
import data from "../variables/questions.json"

function Progress() {
    const { question } = useContext(UserContext);
    return (
        <div className="w-full bg-[#FFE2E2] rounded-full h-2.5">
            <div className="bg-[rgb(250,255,0)] rounded-full h-2.5 bg-gradient-to-r from-[rgba(250,255,0,1)] to-[rgba(255,197,84,1)]" style={{ width: `${((question + 1) / data.length) * 100}%` }}>
            </div>
        </div>
    );
}

export default Progress;