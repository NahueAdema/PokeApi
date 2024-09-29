import PokemonApiService from "../services/PokemonApiService";
import { handleError } from "../utils/ErrorHandler";

class TriviaController {
  private pokemonApiService = PokemonApiService.getInstance();

  public async fetchTriviaPokemons(count: number) {
    try {
      return await this.pokemonApiService.getRandomPokemons(count);
    } catch (error) {
      if (error instanceof Error) {
        handleError(error);
      }
    }
  }
}

export default TriviaController;
