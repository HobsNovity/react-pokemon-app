import React, { FunctionComponent, useState, useEffect } from 'react';
import PokemonCard from '../components/pokemon-card';
import usePokemons from '../hooks/pokemon.hook';
import { Link } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import Loader from '../components/loader';

const PokemonList: FunctionComponent = () => {
  const {
    isLoading,
    pokemons,
  } = usePokemons();

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        {
          pokemons.length === 0 && !isLoading && (
            <p className='center'>Aucun pokemon n'est actuellement disponible dans votre Pokédex!<br />Veuillez ajouter votre premier Pokémon!</p>
          )
        }
        {
          pokemons.length > 0 && !isLoading && (
            <div className="row">
              <PokemonSearch />
              {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
          )
        }
        {
          isLoading && (
            <div className='center'>
              <Loader />
            </div>
          )
        }
        <Link
          to="/pokemon/add"
          className='btn-floating btn-large wave-effect wave-light red z-depth-3'
          style={{ position: 'fixed', bottom: 25, right: 25 }}
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default PokemonList;