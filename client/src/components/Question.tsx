


const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  answer,
}) => {
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, optionIndex) => (
          <li key={optionIndex}>{option}</li>
        ))}
      </ul>
      <p>Answer: {answer}</p>
    </div>
  );
};
export default QuestionCard;
