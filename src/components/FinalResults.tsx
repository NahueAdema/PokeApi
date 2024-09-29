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
    gifUrl = "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif";
  } else if (score >= 70) {
    finalMessage = "¡Muy bien, casi lo logras!";
    gifUrl = "https://media.giphy.com/media/3o7aD6ZXQ7z4hSPC7S/giphy.gif";
  } else if (score >= 50) {
    finalMessage = "¡Buen trabajo, pero puedes mejorar!";
    gifUrl = "https://media.giphy.com/media/26gseAkFiW42OfaLu/giphy.gif";
  } else {
    finalMessage = "Sigue practicando, ¡tú puedes hacerlo mejor!";
    gifUrl =
      "https://img.clipart-library.com/2/clip-pokemon-gifs/clip-pokemon-gifs-23.gif";
  }

  return (
    <div className="p-4 text-center">
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
