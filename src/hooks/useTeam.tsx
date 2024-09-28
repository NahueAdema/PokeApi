import { useTeam } from "../components/TeamContext";
import { IPokemon } from "../interfaces/IPokemon";

const useManageTeam = () => {
  const { addPokemon } = useTeam();

  const handleAddPokemon = (pokemon: IPokemon | null) => {
    if (pokemon) {
      addPokemon(pokemon);
    }
  };

  return { handleAddPokemon };
};

export default useManageTeam;
