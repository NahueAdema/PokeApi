import PokemonApiService from "../services/PokemonApiService";
import { IPokemon } from "../interfaces/IPokemon";

export class PokemonService {
  private apiController: PokemonApiService;

  constructor() {
    this.apiController = PokemonApiService.getInstance();
  }

  async getPokemonDetails(name: string): Promise<IPokemon> {
    return await this.apiController.getPokemonDetails(name);
  }
}
