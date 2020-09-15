import React, { Component } from 'react';
import './App.css';
import HeaderP from './HeaderP'
import './style_proyectos.css'
import { render } from '@testing-library/react';

class Proyectos extends Component{
    constructor(props){
        super(props);
        this.state={
         /* valor1:this.generarValor(),
          valor2:this.generarValor(),
          valor3:this.generarValor()*/
        }
        //this.tirar = this.tirar.bind(this);
      }
render(){
  return (
    <div>
    <header>
      <HeaderP></HeaderP>
    </header>
    <div class="containerp">
    
    <div class="containerheaderp">Proyectos a Realizados.</div>
    <div class="containercontenidop">Con el fin de probar los conocimientos que se han obtenido más allá de la carrera se exponen
        varios proyectos que se hicieron con el fin de practicar y asentar lo aprendido. Entre estos proyectos
        podemos ver dos en android y proyectos de JavaScript entre los que entra esta misma página:
    </div>
    <div className="containerlinksp">
        <div className="containerlinksp_titulo">A. Proyectos en Android</div>
        <div className="containerlink">
            
            <div class="containerlink_titulo">1. Mercadona Lista</div>
            <div class="containerlink_descripcion">Proyecto hecho con Android Studio y Java, también se ha integrado
                con FireBase y FireStore.<br/><br/>
                Se basa en poder hacer una lista con unos pocos clicks, además de poder añadir, editar y borrar productos.
            </div>
            <img class="containerlink_imagen" src="./imagenes/MonaLista.jpg"/>
            <button id="botonMercadona" class="containerlink_boton">Ver</button>
            
        </div>
        <div class="containerlink">
            <div class="containerlink_titulo">2. Gestión de un bar</div>
            <div class="containerlink_descripcion">Proyecto hecho con Android Studio y Java, Se ha usado una base de datos 
                MySql online gratuita (db4free).<br/><br/>
                Se basa en la gestion de un bar tanto en sus pedidos, como en el inventario, ademas de poder añadir y editar productos.
            </div>
            <img class="containerlink_imagen" src="./imagenes/MonaLista.jpg"/>
            <button class="containerlink_boton">Ver</button>
        </div>
        <div class="containerlink"></div>
        <div class="containerlinksp_titulo">B. Proyectos en JavaScript</div>
        <div class="containerlink">
            
            <div class="containerlink_titulo">1. Paint con JavaScript</div>
            <div class="containerlink_descripcion">Proyecto hecho con html, css y JavaScript<br/><br/>
               Se intentó emular ciertas opciones de Paint con JavaScript
            </div>
            <img class="containerlink_imagen" src="./imagenes/paint.png"/>
            <button class="containerlink_boton">Ver</button>
            
        </div>
        <div class="containerlink"></div>
        <div class="containerlink"></div>
    </div>
    </div>
    {window.onload=()=>{
            document.getElementById("botonHome").onclick=()=>document.location.href="home";
            document.getElementById("logo").onclick=()=>document.location.href="home";
            document.getElementById("botonMercadona").onclick=()=>document.location.href="mercadona";
            document.getElementById("botonProyectos").onclick=()=>document.location.href="proyectos";
            
    }}
    </div>
    
  );
}
}

export default Proyectos;
