import React from "react";

interface FinalResultsProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

const FinalResults: React.FC<FinalResultsProps> = ({
  score,
  totalQuestions,
  onRetry,
}) => {
  const POINTS_PER_QUESTION = 10;
  let finalMessage = "";
  let gifUrl = "";

  if (score === totalQuestions * POINTS_PER_QUESTION) {
    finalMessage = "¡Eres un maestro Pokémon!";
    gifUrl =
      "https://media0.giphy.com/media/piKrrLOo9KuSM94HtY/giphy.gif?cid=6c09b9525yu9ktb8tfiz5hq94e15o8bd20dbbzlk12l5qvs9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
  } else if (score >= 70) {
    finalMessage = "¡Muy bien, casi lo logras!";
    gifUrl = "https://media3.giphy.com/media/11NlXRhFSZl4w8/giphy.gif";
  } else if (score >= 50) {
    finalMessage = "¡Buena, pero va tu puedes hacerlo mejor!";
    gifUrl = "https://media.tenor.com/tEGO5Q-EQIcAAAAM/pokemon.gif";
  } else {
    finalMessage = "Jajaja ve a Practicar y no pierdas tu tiempo!";
    gifUrl =
      "https://img.clipart-library.com/2/clip-pokemon-gifs/clip-pokemon-gifs-23.gif";
  }

  return (
    <div className="p-4 text-center text-white">
      <h2 className="text-2xl font-bold mb-4">
        Puntaje final: {score} / {totalQuestions * POINTS_PER_QUESTION}
      </h2>
      <p className="text-xl">{finalMessage}</p>
      {gifUrl && (
        <img src={gifUrl} alt="Resultado final" className="mx-auto mt-4" />
      )}
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded"
        onClick={onRetry}
      >
        Volver a Intentarlo
      </button>
    </div>
  );
};

export default FinalResults;
