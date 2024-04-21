import React, { useState, useEffect } from 'react';

const totalTimeInSeconds = 1200; // 20 minutes = 1200 seconds
const totalQuestions = 20; // Total number of questions

const ProgressBar: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCurrentTimeInSeconds((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="app">
      <div className="progress-container">
        <div className="progress-bar w-[100px] h-8 bg-green-500" style={{ width: `${progressPercentage}%` }} />
      </div>

      <div className="question-container">
        <h2>Question {currentQuestion}</h2>
        {/* Your question content goes here */}

        {/* Render Next button only if progress is not 100% */}
        {progressPercentage < 100 ? (
          <button onClick={nextQuestion}>Next</button>
        ) : (
          <p>Quiz completed!</p>
        )}
      </div>

      <div className="timer">
        Time Remaining: {Math.max(totalTimeInSeconds - currentTimeInSeconds, 0)} seconds
      </div>
    </div>
  );
};

export default ProgressBar;
