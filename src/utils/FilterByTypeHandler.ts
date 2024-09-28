import { IPokemon } from "../interfaces/IPokemon";

interface IHandler {
  setNext(handler: IHandler): IHandler;
  handle(request: string, pokemon: IPokemon[]): IPokemon[];
}

export class FilterByTypeHandler implements IHandler {
  private nextHandler: IHandler | null = null;

  public setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string, pokemonList: IPokemon[]): IPokemon[] {
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.types.includes(request)
    );

    if (filtered.length === 0 && this.nextHandler) {
      return this.nextHandler.handle(request, pokemonList);
    }

    return filtered;
  }
}

export class FilterByAbilitiesHandler implements IHandler {
  private nextHandler: IHandler | null = null;

  public setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string, pokemonList: IPokemon[]): IPokemon[] {
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.abilities.includes(request)
    );

    if (filtered.length === 0 && this.nextHandler) {
      return this.nextHandler.handle(request, pokemonList);
    }

    return filtered;
  }
}
