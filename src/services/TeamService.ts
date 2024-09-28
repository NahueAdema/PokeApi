// services/TeamService.ts
import { IPokemon } from "../interfaces/IPokemon";

export class TeamService {
  private name: string;
  private members: IPokemon[];

  constructor(name: string) {
    this.name = name;
    this.members = [];
  }

  public addPokemon(pokemon: IPokemon): void {
    if (
      this.members.length < 6 &&
      !this.members.find((p) => p.id === pokemon.id)
    ) {
      this.members.push(pokemon);
    }
  }

  public removePokemon(pokemonId: number): void {
    this.members = this.members.filter((p) => p.id !== pokemonId);
  }

  public getTeam(): { name: string; members: IPokemon[] } {
    return { name: this.name, members: this.members };
  }
}
