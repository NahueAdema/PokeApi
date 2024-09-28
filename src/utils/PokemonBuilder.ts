import { IPokemon } from "../interfaces/IPokemon";

export class PokemonBuilder {
  private pokemon: IPokemon;

  constructor() {
    this.pokemon = {
      id: 0,
      name: "",
      types: [],
      abilities: [],
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
      },
      imageUrl: "",
    };
  }

  setName(name: string): PokemonBuilder {
    this.pokemon.name = name;
    return this;
  }

  setType(type: string[]): PokemonBuilder {
    this.pokemon.types = type;
    return this;
  }

  setAbilities(abilities: string[]): PokemonBuilder {
    this.pokemon.abilities = abilities;
    return this;
  }

  setStats(stats: {
    hp: number;
    attack: number;
    defense: number;
  }): PokemonBuilder {
    this.pokemon.stats = stats;
    return this;
  }

  build(): IPokemon {
    return this.pokemon;
  }
}
