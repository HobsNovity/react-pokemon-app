import React, { useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    PokemonService.getPokemons()
      .then((pokemons) => {
        setPokemons(pokemons);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    pokemons,
  }
}

export default usePokemons;