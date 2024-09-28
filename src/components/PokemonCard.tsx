import React from "react";
import { IPokemon } from "../interfaces/IPokemon";

interface PokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-white">
      <div className="px-6 py-4">
        <img
          src={pokemon.imageUrl}
          alt={pokemon.name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <div className="font-bold text-xl mb-2 capitalize">{pokemon.name}</div>
        <ul className="mb-4">
          <li>
            <strong>ID:</strong> {pokemon.id}
          </li>
          <li>
            <strong>HP:</strong> {pokemon.stats.hp}
          </li>
          <li>
            <strong>Attack:</strong> {pokemon.stats.attack}
          </li>
          <li>
            <strong>Defense:</strong> {pokemon.stats.defense}
          </li>
        </ul>
        <div className="font-bold text-md">Types:</div>
        <ul className="flex flex-wrap">
          {pokemon.types.map((type) => (
            <li
              key={type}
              className="mr-2 bg-blue-500 text-white px-2 py-1 rounded"
            >
              {type}
            </li>
          ))}
        </ul>
        <div className="font-bold text-md mt-4">Abilities:</div>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability} className="mr-2">
              {ability}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
