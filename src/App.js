import React, { Component } from 'react';
import './App.css';
import './style_inicio.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Inicio from './inicio';
import Proyectos from './Proyectos';
import Paint from './paint'
import MercadonaLista from './MercadonaLista';
import Anuncio from './anuncio';
import Bar from './bar';

class App extends Component {
  
render(){
  return (
    <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact
              path="/home"
              component={Inicio} />
            <Route exact
              path="/proyectos"
              component={Proyectos} />
            <Route exact
              path="/proyectos/mercadona"
              component={MercadonaLista} />
            <Route exact
              path="/proyectos/paint"
              component={Paint} />
            <Route exact
              path="/proyectos/anuncio"
              component={Anuncio} />
            <Route exact
              path="/proyectos/bar"
              component={Bar} />
          </Switch>
      </BrowserRouter>
    
  );
}

}

export default App;
