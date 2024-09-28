// interfaces/ITeam.ts
import { IPokemon } from "./IPokemon";

export interface ITeam {
  name: string;
  members: IPokemon[];
}
