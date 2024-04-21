import React, { useState } from 'react';
import QuestionCard from '../components/Question';

const QuizPage: React.FC = () => {
  const quizData = {
    quiz: {
      questions: [
        {
          id: 1,
          question: "What is software engineering?",
          options: [
            "A. Developing hardware components",
            "B. Designing user interfaces",
            "C. Applying engineering principles to software development",
            "D. None of the above"
          ],
          answer: "C. Applying engineering principles to software development"
        },
        {
          id: 1,
          question: "What is software engineering?",
          options: [
            "A. Developing hardware components",
            "B. Designing user interfaces",
            "C. Applying engineering principles to software development",
            "D. None of the above"
          ],
          answer: "C. Applying engineering principles to software development"
        },
        {
          id: 1,
          question: "What is software engineering?",
          options: [
            "A. Developing hardware components",
            "B. Designing user interfaces",
            "C. Applying engineering principles to software development",
            "D. None of the above"
          ],
          answer: "C. Applying engineering principles to software development"
        },
        {
          id: 1,
          question: "What is software engineering?",
          options: [
            "A. Developing hardware components",
            "B. Designing user interfaces",
            "C. Applying engineering principles to software development",
            "D. None of the above"
          ],
          answer: "C. Applying engineering principles to software development"
        },
        {
          id: 1,
          question: "What is software engineering?",
          options: [
            "A. Developing hardware components",
            "B. Designing user interfaces",
            "C. Applying engineering principles to software development",
            "D. None of the above"
          ],
          answer: "C. Applying engineering principles to software development"
        },
        {
          id: 1,
          question: "What is software engineering?",
          options: [
            "A. Developing hardware components",
            "B. Designing user interfaces",
            "C. Applying engineering principles to software development",
            "D. None of the above"
          ],
          answer: "C. Applying engineering principles to software development"
        },{
          id: 1,
          question: "What is software engineering?",
          options: [
            "A. Developing hardware components",
            "B. Designing user interfaces",
            "C. Applying engineering principles to software development",
            "D. None of the above"
          ],
          answer: "C. Applying engineering principles to software development"
        },
        // Add more questions...
      ]
    }
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const handleAnswerSelected = (chosenAnswer: string, correctAnswer: string) => {
    if (chosenAnswer === correctAnswer) {
      setCorrectCount((prevCount) => prevCount + 1);
    }

    // Move to the next question or show results if all questions have been answered
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.quiz.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // All questions answered, show quiz results
      setCurrentQuestionIndex(-1); // Set to -1 to indicate quiz completion
    }
  };

  const totalQuestions = quizData.quiz.questions.length;
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${progressPercentage}%` }} />
        </div>

        {currentQuestionIndex !== -1 ? (
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
