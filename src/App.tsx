import React, { FC } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonList from './pages/pokemon-list';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

const App: FC = () => {

  return (
    <Router>
      <div>
        <nav>
          <div className='nav-wrapper teal'>
            <Link to="/" className='brand-logo center'>Pokédex</Link>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={PokemonList} />
        <PrivateRoute exact path="/pokemons" component={PokemonList} />
        <PrivateRoute exact path="/pokemon/add" component={PokemonAdd} />
        <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
        <PrivateRoute exact path="/pokemons/:id" component={PokemonsDetail} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App; 