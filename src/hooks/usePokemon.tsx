import { useState, useEffect } from "react";
import PokemonApiService from "../services/PokemonApiService";
import { IPokemon } from "../interfaces/IPokemon";

const usePokemon = (pokemonName: string) => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);
      try {
        const pokemonAPI = PokemonApiService.getInstance();
        const fetchedPokemon = await pokemonAPI.getPokemonDetails(pokemonName);
        setPokemon(fetchedPokemon);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (pokemonName) {
      fetchPokemon();
    }
  }, [pokemonName]);

  return { pokemon, error, loading };
};

export default usePokemon;
