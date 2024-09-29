import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-row items-center min-h-screen justify-center bg-bgHome bg-center bg-cover bg-no-repeat ">
      <div className="flex flex-col justify-center items-center relative right-40 bg-white bg-opacity-30 backdrop-blur-sm p-6 rounded-lg">
        <h1 className="text-bold text-2xl text-sky-900">
          Quieres armar tu equipo pokemon!?
        </h1>
        <Link
          to={"/TeamPage"}
          className=" bg-sky-600 text-white rounded mx-4 border py-1 px-4 "
        >
          Armar Equipo
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center relative bottom-64 bg-white bg-opacity-30 backdrop-blur-sm p-6 rounded-lg">
        <h1 className="text-bold text-3xl bg-gradient-to-r from-red-700 to-white bg-clip-text text-transparent">
          PokeApi!
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center relative left-40 bg-white bg-opacity-30 backdrop-blur-sm p-6 rounded-lg">
        <h1 className="text-bold text-2xl text-red-900">
          Adivina el tipo del pokemon!
        </h1>
        <Link
          to={"/TriviaPage"}
          className="bg-red-700 text-white rounded mx-4 border py-1 px-4 "
        >
          Trivia
        </Link>
      </div>
    </div>
  );
};

export default Home;
