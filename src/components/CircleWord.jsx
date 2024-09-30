import React, {useContext} from "react";
import { UserContext } from '../context/questionContext';
import data from "../variables/questions.json"

const CircleWord = ({circleSize = 200, letterSize = 42 }) => {
  const { question } = useContext(UserContext);
  const word = data[question].answer;
  const radius = circleSize / 2;
  const totalLetters = word.length;
  const angleStep = (2 * Math.PI) / totalLetters;

  return (
    <div 
      className="relative rounded-full border border-black mx-auto"
      style={{ width: circleSize, height: circleSize }}
    >
      {word.split('').map((letter, index) => {
        const angle = index * angleStep;
        const x = Math.cos(angle);
        const y = Math.sin(angle);

        return (
          <div
            key={index}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `translate(-50%, -50%) translate(${x * radius}px, ${y * radius}px)`,
            }}
          >
            <div 
              className="bg-blue-200 rounded-full flex items-center justify-center"
              style={{ width: letterSize, height: letterSize }}
            >
              <span className="text-lg font-semibold">{letter}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CircleWord;