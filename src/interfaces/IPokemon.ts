export interface IPokemon {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
  };
  imageUrl: string;
}
