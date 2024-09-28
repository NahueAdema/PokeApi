import { PokemonService } from "../services/PokemonService";
import { TeamService } from "../services/TeamService";
import { IPokemon } from "../interfaces/IPokemon";
import { ITeam } from "../interfaces/ITeam";

class PokemonController {
  private static instance: PokemonController | null = null;
  private pokemonService: PokemonService;
  private teamService: TeamService;

  private constructor() {
    this.pokemonService = new PokemonService();
    this.teamService = new TeamService("My Pokemon Team");
  }

  public static getInstance(): PokemonController {
    if (!this.instance) {
      this.instance = new PokemonController();
    }
    return this.instance;
  }

  public async getPokemon(name: string): Promise<IPokemon | null> {
    try {
      const pokemon: IPokemon = await this.pokemonService.getPokemonDetails(
        name
      );
      return pokemon;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error fetching Pokemon details: ${error.message}`);
      }
      return null;
    }
  }

  public addPokemonToTeam(pokemon: IPokemon): boolean {
    try {
      this.teamService.addPokemon(pokemon);
      return true;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error adding Pokemon to team: ${error.message}`);
      }
      return false;
    }
  }

  public removePokemonFromTeam(pokemonId: number): boolean {
    try {
      this.teamService.removePokemon(pokemonId);
      return true;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error removing Pokemon from team: ${error.message}`);
      }
      return false;
    }
  }

  public getTeam(): ITeam {
    const team = this.teamService.getTeam();
    return {
      name: team.name,
      members: team.members,
    };
  }
}

export default PokemonController;
