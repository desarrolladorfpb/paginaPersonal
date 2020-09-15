import React, { Component } from 'react';
import './App.css';
import HeaderP from './HeaderP'
import './style_inicio.css'
import { render } from '@testing-library/react';

class Inicio extends Component{
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
    <menu>
      <li id="li1"><p>Sobre la página</p></li>
      <li id="li2"><p>Sobre mí</p></li>
    </menu> 
    <div id="micontainer2">
      <div><img id="imagenmia" src="./imagenes/fotomia.jpg"/></div>
      <div id="detalles"><p id="escribeEdad">Edad: 20 años</p></div>
    </div>
    <div id="micontainer1">
      <div id="detallesp"><p>Esta página está hecha con JavaScript, CSS3, React y HTML</p></div>
    </div>
      {
    window.onload = ()=>{ 
         let micontainer2 = document.getElementById("micontainer2");
         let micontainer1 = document.getElementById("micontainer1");
         let imagenmia = document.getElementById("imagenmia");
         document.getElementById("botonHome").onclick=()=>document.location.href="home";
         document.getElementById("logo").onclick=()=>document.location.href="home";
         document.getElementById("botonProyectos").onclick=()=>document.location.href="proyectos";
         let detalles  =document.getElementById("detalles");
         let detallesp  =document.getElementById("detallesp");
         document.getElementById("li2").addEventListener("click", ()=>{
             
             imagenmia.style.top = "0px";
             micontainer2.style.opacity = 1;
             micontainer2.style.transitionDelay= "1s";
             micontainer1.style.opacity = 0;
             micontainer1.style.transitionDelay= "0s";
             imagenmia.style.transitionDelay="1s";
             detalles.style.left ="0px";
             detalles.style.transitionDelay="1s";
             detallesp.style.marginLeft ="50%";
             detallesp.style.transitionDelay="0s"       
         }, false)
         document.getElementById("li1").addEventListener("click", ()=>{
             
             imagenmia.style.top = "200px";
             micontainer2.style.opacity = 0;
             micontainer2.style.transitionDelay= "0s";
             micontainer1.style.opacity = 1;
             micontainer1.style.transitionDelay= "1s";
             imagenmia.style.transitionDelay="0s";
             detalles.style.left ="50%";
             detalles.style.transitionDelay="0s"
             detallesp.style.marginLeft ="0%";
             detallesp.style.transitionDelay="1s"
         }, false)
         document.getElementById("li2").click();
         
     }
    }
    </div>
    
  );
}
}
export default Inicio;
