export interface PokemonAPIResponse {
  id: number;
  name: string;
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  stats: Array<{ base_stat: number }>;
  sprites: {
    front_default: string;
  };
}
