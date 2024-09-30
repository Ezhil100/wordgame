import React from "react";
import TopBar from "./components/TopBar";
import Progress from "./components/Progress";
import QuestionCount from "./components/QuestionCount";
import Question from "./components/Question";
import { UserProvider } from "./context/questionContext";
import CircleWord from "./components/CircleWord";
import NextQuestion from "./components/NextQuestion";

function App() {
  return(
    <UserProvider>
    <div className="flex justify-center flex-col m-4 gap-8">
      <TopBar />
      <Progress />
      <QuestionCount />
      <Question />
      <CircleWord/>
      <NextQuestion />
    </div>
    </UserProvider>
  );
}

export default App;