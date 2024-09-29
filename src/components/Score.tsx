import React from "react";

interface ScoreProps {
  score: number;
}

const Score: React.FC<ScoreProps> = ({ score }) => {
  return <p className="mt-2 text-right font-bold">Puntaje: {score}</p>;
};

export default Score;
