import { IPokemon } from "../interfaces/IPokemon";
import { PokemonAPIResponse } from "../interfaces/PokemonAPIResponse";

class PokemonApiService {
  private static instance: PokemonApiService | null = null;
  private readonly baseUrl: string = "https://pokeapi.co/api/v2/";
  private constructor() {}
  public static getInstance(): PokemonApiService {
    if (!this.instance) {
      this.instance = new PokemonApiService();
    }
    return this.instance;
  }

  public async getPokemonDetails(name: string): Promise<IPokemon> {
    try {
      const response = await fetch(`${this.baseUrl}pokemon/${name}`);
      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon details");
      }
      const data: PokemonAPIResponse = await response.json();
      return this.transformPokemonData(data);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error: ${error.message}`);
      }
      throw new Error("Unknown error occurred");
    }
  }

  private transformPokemonData(data: PokemonAPIResponse): IPokemon {
    return {
      id: data.id,
      name: data.name,
      types: data.types.map((typeObj) => typeObj.type.name),
      abilities: data.abilities.map((abilityObj) => abilityObj.ability.name),
      stats: {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
      },
      imageUrl: data.sprites.front_default,
    };
  }
}

export default PokemonApiService;