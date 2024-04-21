import React, { useEffect, useState } from "react";
import QuestionCard from "../components/Question";
import * as apiClient from "../apiClient";
import Loader from "../components/Loader";

const QuizPage: React.FC = () => {
  const [quizData, setQuizData] = useState<any>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const storedPersonalInfo = localStorage.getItem("personalInfo");
        if (storedPersonalInfo) {
          const { major, subMajor } = JSON.parse(storedPersonalInfo);
          const d = major + "," + subMajor;

          const response = await apiClient.createQuestionnaire(d);

          setQuizData(response.message.content);
          console.log(quizData);
          
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
        setLoading(false);
      }
    };

    fetchQuizData();
  }, []);

  const handleAnswerSelected = (
    chosenAnswer: string,
    correctAnswer: string
  ) => {
    if (chosenAnswer === correctAnswer) {
      setCorrectCount((prevCount) => prevCount + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < (quizData?.quiz?.questions?.length || 0)) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setCurrentQuestionIndex(-1); // Quiz completed
    }
  };

  const totalQuestions = quizData?.quiz?.questions?.length || 0;
  const progressPercentage =
    totalQuestions > 0
      ? ((currentQuestionIndex + 1) / totalQuestions) * 100
      : 0;

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {loading ? (
          <Loader />
        ) : quizData && currentQuestionIndex !== -1 ? (
          <QuestionCard
            key={currentQuestionIndex}
            question={quizData.quiz.questions[currentQuestionIndex]?.question}
            options={quizData.quiz.questions[currentQuestionIndex]?.options}
            answer={quizData.quiz.questions[currentQuestionIndex]?.answer}
            onOptionSelected={handleAnswerSelected}
          />
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Quiz Completed!</h2>
            <p>Total Correct Answers: {correctCount}</p>
            <p>Total Incorrect Answers: {totalQuestions - correctCount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
