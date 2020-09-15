import React, { Component } from 'react';
import './App.css';
import './style_inicio.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Inicio from './inicio';
import Proyectos from './Proyectos';
import MercadonaLista from './MercadonaLista';

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
              path="/mercadona"
              component={MercadonaLista} />
            
          </Switch>
      </BrowserRouter>
    
  );
}

}

export default App;
