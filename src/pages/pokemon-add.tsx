import React, { FC, useState} from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';

const PokemonAdd: FC = () => {
  const [id] = useState<number>(new Date().getTime());
  const [pokemon] = useState<Pokemon>(new Pokemon(id));
  return (
    <div className="row">
      <div className="header">
        <PokemonForm pokemon={pokemon} isEditForm={false}/>
      </div>
    </div>
  )
}

export default PokemonAdd;