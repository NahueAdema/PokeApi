import React from "react";
import { useTeam } from "../components/TeamContext";

const TeamBuilder: React.FC = () => {
  const { team, removePokemon } = useTeam();

  return (
    <div className="flex-1 p-4 border-l border-gray-300">
      <h2 className="text-2xl font-bold mb-4">Your Team</h2>
      <div className="grid grid-cols-1 gap-4 w-full">
        {team.map((pokemon) => (
          <div
            key={pokemon.id}
            className="flex items-center border p-2 rounded mb-2"
          >
            <img
              src={pokemon.imageUrl}
              alt={pokemon.name}
              className="w-16 h-16 object-cover mr-4"
            />
            <div className="flex-1">
              <div className="font-bold text-lg">{pokemon.name}</div>
              <div className="text-sm">Types: {pokemon.types.join(", ")}</div>
              <button
                onClick={() => removePokemon(pokemon.id)}
                className="bg-red-500 text-white rounded-md px-4 py-1 mt-2 hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamBuilder;
