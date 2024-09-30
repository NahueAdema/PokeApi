import Trivia from "../components/Trivia";
const TriviaPage = () => {
  return (
    <div className="container mx-auto flex flex-col min-h-screen  bg-bgTrivia bg-center bg-cover bg-no-repeat  ">
      <h1 className="text-2xl font-bold text-center my-4  bg-white bg-opacity-30 backdrop-blur-sm p-6 rounded-lg w-full">
        Trivia Pokémon
      </h1>
      <Trivia />
    </div>
  );
};

export default TriviaPage;
