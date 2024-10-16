import React from "react";

interface TriviaQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  isAnswered: boolean;
}

const TriviaQuestion: React.FC<TriviaQuestionProps> = ({
  question,
  options,
  onAnswer,
  isAnswered,
}) => {
  return (
    <div className="p-4 ">
      <h2 className="text-lg font-bold">{question}</h2>
      <div className="mt-2">
        {options.map((option, index) => (
          <button
            key={index}
            className={`block bg-blue-500 text-white rounded p-2 mt-2 ${
              isAnswered ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => onAnswer(option)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TriviaQuestion;
