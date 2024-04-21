import React from 'react';

interface QuestionCardProps {
  question: string;
  options: string[];
  answer: string;
  onOptionSelected: (chosenAnswer: string, correctAnswer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  answer,
  onOptionSelected
}) => {
  const handleOptionClick = (chosenOption: string) => {
    // Call the onOptionSelected callback with the chosen option and correct answer
    onOptionSelected(chosenOption, answer);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li
            key={index}
            className="cursor-pointer px-4 py-2 rounded-md bg-gray-100 hover:bg-blue-100"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
