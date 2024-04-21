import React, { useEffect, useState } from "react";
import QuestionCard from "../components/Question";
import * as apiClient from "../apiClient";

const QuizPage: React.FC = () => {
  const [quizData, setQuizData] = useState<any>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    // Fetch major from localStorage
    const storedPersonalInfo = localStorage.getItem("personalInfo");
    if (storedPersonalInfo) {
      const { major, subMajor } = JSON.parse(storedPersonalInfo);
      const f = major + "," + subMajor;

      // Fetch quiz data based on major and subMajor
      apiClient
        .createQuestionnaire(f as string)
        .then((res) => res.json())
        .then((data) => {
          setQuizData(data); // Set quiz data once fetched
        })
        .catch((error) => {
          console.error("Error fetching quiz data:", error);
        });
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleAnswerSelected = (
    chosenAnswer: string,
    correctAnswer: string
  ) => {
    if (chosenAnswer === correctAnswer) {
      setCorrectCount((prevCount) => prevCount + 1);
    }

    // Move to the next question or show results if all questions have been answered
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < (quizData?.quiz?.questions?.length || 0)) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // All questions answered, do nothing or perform cleanup if needed
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

        {quizData && currentQuestionIndex !== -1 ? (
          // Render next question if quiz is not completed
          <QuestionCard
            key={quizData.quiz.questions[currentQuestionIndex].id}
            question={quizData.quiz.questions[currentQuestionIndex].question}
            options={quizData.quiz.questions[currentQuestionIndex].options}
            answer={quizData.quiz.questions[currentQuestionIndex].answer}
            onOptionSelected={handleAnswerSelected}
          />
        ) : (
          // Show quiz results if quiz is completed
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
