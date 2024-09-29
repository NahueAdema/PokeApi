import React, { useEffect, useState } from "react";
import TriviaQuestion from "./TriviaQuestion";
import TriviaController from "../controller/TriviaController";
import FinalResults from "./FinalResults";
import Score from "./Score";
import { IPokemon } from "../interfaces/IPokemon";
import typeMapping from "../utils/typeMapping";
import allTypes from "../utils/allTypes";

const TOTAL_QUESTIONS = 10;
const POINTS_PER_QUESTION = 10;

const Trivia: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const controller = new TriviaController();

  useEffect(() => {
    const loadPokemons = async () => {
      const fetchedPokemons = await controller.fetchTriviaPokemons(
        TOTAL_QUESTIONS
      );
      setPokemons(fetchedPokemons || []);
    };
    loadPokemons();
  }, []);

  const shuffleArray = (array: string[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleAnswer = (answer: string) => {
    if (isAnswered || gameOver) return;

    const currentPokemon = pokemons[currentQuestionIndex];
    const correctAnswer = currentPokemon.types.map((type) => typeMapping[type]);

    if (correctAnswer.includes(answer)) {
      setFeedback("¡Correcto!");
      setScore(score + POINTS_PER_QUESTION);
    } else {
      setFeedback(
        `Incorrecto, el tipo de ${currentPokemon.name} es ${correctAnswer.join(
          ", "
        )}.`
      );
    }

    setIsAnswered(true);

    setTimeout(() => {
      if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setGameOver(true);
      }
      setFeedback(null);
      setIsAnswered(false);
    }, 2000);
  };

  const handleRetry = async () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setFeedback(null);
    setIsAnswered(false);
    setGameOver(false);

    const fetchedPokemons = await controller.fetchTriviaPokemons(
      TOTAL_QUESTIONS
    );
    setPokemons(fetchedPokemons || []);
  };

  if (!pokemons.length) return <div>Cargando...</div>;

  // Mostrar resultado final cuando el juego termina
  if (gameOver) {
    return (
      <FinalResults
        score={score}
        totalQuestions={TOTAL_QUESTIONS}
        onRetry={handleRetry}
      />
    );
  }

  const currentPokemon = pokemons[currentQuestionIndex];
  const question = `¿Cuál es el tipo de ${currentPokemon.name}?`;

  const randomTypes = shuffleArray(
    allTypes.filter((type) => !currentPokemon.types.includes(type))
  ).slice(0, 3);
  const options = shuffleArray([
    ...currentPokemon.types.map((type) => typeMapping[type]),
    ...randomTypes,
  ]);

  return (
    <div className="p-4">
      <TriviaQuestion
        question={question}
        options={options}
        onAnswer={handleAnswer}
        isAnswered={isAnswered}
      />
      {feedback && (
        <div className="mt-4 text-center text-xl font-bold">{feedback}</div>
      )}
      <Score score={score} />
    </div>
  );
};

export default Trivia;
