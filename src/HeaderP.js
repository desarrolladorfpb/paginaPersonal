import React, { Component } from 'react';
import './style_header.css';

class HeaderP extends Component {
  constructor(props){
    super(props);
    this.state={
     /* valor1:this.generarValor(),
      valor2:this.generarValor(),
      valor3:this.generarValor()*/
    }
    //this.tirar = this.tirar.bind(this);
  }
  render() {
    return (
        <header>
        <div className="container" >  
        <img id="logo" src="./imagenes/logo.png"/>
            <button id="botonHome" className="boton"><img src="./imagenes/home1.svg" className="icono"/>Inicio</button>
            <button id="botonProyectos" className="boton"><img src="./imagenes/archive.svg" className="icono"/>Proyectos</button>
            
            
        </div>
        
        </header>
        
    );
  }
 /* tirar() {
    this.setState({
      valor1: this.generarValor(),
      valor2: this.generarValor(),
      valor3: this.generarValor()      
    });
  }*/
        
}

export default HeaderP;