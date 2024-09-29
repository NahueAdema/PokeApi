import React, { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import TeamBuilder from "../components/TeamBuilder";
import usePokemon from "../hooks/usePokemon";
import useManageTeam from "../hooks/useTeam";

const TeamPage: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>("pikachu");
  const { pokemon, error, loading } = usePokemon(pokemonName);
  const { handleAddPokemon } = useManageTeam();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg bg-no-repeat bg-cover bg-center">
      <div className="flex justify-center p-4">
        <form
          onSubmit={handleFormSubmit}
          className="flex items-center space-x-4"
        >
          <input
            type="text"
            value={pokemonName}
            onChange={handleInputChange}
            placeholder="Enter Pokémon name"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-1 p-4 space-x-4">
        {}
        <div className="flex flex-col w-2/3 p-2 space-y-4">
          <h2 className="text-2xl font-bold mb-4">Pokémon List</h2>
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-500">Error: {error}</p>}
          {pokemon && (
            <div className="flex flex-col items-start">
              <PokemonCard pokemon={pokemon} />
              <button
                onClick={() => handleAddPokemon(pokemon)}
                className="bg-green-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-green-600"
              >
                Add to Team
              </button>
            </div>
          )}
        </div>

        {}
        <div className="flex flex-col w-1/3 p-2 space-y-4">
          <h2 className="text-2xl font-bold mb-4">Your Team</h2>
          <TeamBuilder />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
