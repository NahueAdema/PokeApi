// TeamContext.tsx
import React, { createContext, useContext, useState } from "react";
import { IPokemon } from "../interfaces/IPokemon";

interface TeamContextType {
  team: IPokemon[];
  addPokemon: (pokemon: IPokemon) => void;
  removePokemon: (pokemonId: number) => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const TeamProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [team, setTeam] = useState<IPokemon[]>([]);

  const addPokemon = (pokemon: IPokemon) => {
    if (team.length < 6 && !team.find((p) => p.id === pokemon.id)) {
      setTeam([...team, pokemon]);
    }
  };

  const removePokemon = (pokemonId: number) => {
    setTeam(team.filter((p) => p.id !== pokemonId));
  };

  return (
    <TeamContext.Provider value={{ team, addPokemon, removePokemon }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = (): TeamContextType => {
  const context = useContext(TeamContext);
  if (context === undefined) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
};
