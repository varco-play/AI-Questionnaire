import * as apiClient from "../apiClient";
import { useEffect, useState } from "react";
import QuestionCard from "../components/Question";
import ProgressBar from "../components/ProgressBar";
import Loader from "../components/Loader";

type T = {
  quiz: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

const Questionnaire = () => {
  const [data, setData] = useState<T | null>(null);
  const [step, setStep] = useState<number>(0);
  const question = data?.quiz[step];
  const datt = localStorage.getItem("personalInfo");
  const f = JSON.parse(datt);
  const sss = f.major + "," + f.subMajor;

  useEffect(() => {
    async function getTest() {
      const response = await apiClient.createQuestionnaire(
         sss as string
      );

      const res = response.message.content;
      const parsedData = JSON.parse(res) as T;

      localStorage.setItem("data", JSON.stringify(parsedData));
      setData(parsedData);
    }

    getTest();
  }, []);

  const handleNextQuestion = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="bg-white h-full">
      {question ? (
        <>
          <ProgressBar  /> 
          <QuestionCard
            question={question.question}
            options={question.options}
            answer={question.answer}
          />
        </>
      ): <Loader/> }
      {step < data?.quiz.length - 1 && (
        <button onClick={handleNextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default Questionnaire;
