import React, { Component } from 'react';
import './App.css';
import HeaderP from './HeaderP'
import './style_inicio.css'
import { render } from '@testing-library/react';

class Inicio extends Component{
  constructor(props){
    super(props);
    this.state={
      edad:this.calculaEdad("24/09/1999")
    }
    this.calculaEdad = this.calculaEdad.bind(this);
    this.tamVentana = this.tamVentana.bind(this);
  }
  tamVentana() {
    var tam = [0, 0];
    if (typeof window.innerWidth != 'undefined')
    {
      tam = [window.innerWidth,window.innerHeight];
    }
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
      tam = [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
      ];
    }
    else   {
      tam = [
          document.getElementsByTagName('body')[0].clientWidth,
          document.getElementsByTagName('body')[0].clientHeight
      ];
    }
    return tam;
  }
  calculaEdad(birthday){
    var birthday_arr = birthday.split("/");
    var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
    var ageDifMs = Date.now() - birthday_date.getTime()- 86400000;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
render(){
  return (
    <div>
    <header>
      <HeaderP></HeaderP>
    </header>
    <menu> 
    <li id="li2"><p>Sobre mí</p></li>
    <li id="li1"><p>Sobre la página</p></li>
    </menu> 
    <div id="micontainer2">
      <div><img id="imagenmia" src="./imagenes/fotomia.jpg"/></div>
      <div id="detalles">
        <p><strong>Nombre:</strong> Francisco José Perejón Barrios</p>
        <p id="escribeEdad"><strong>Edad:</strong> {this.state.edad} años</p>
        <p><strong>Datos:</strong> Nacido en Sevilla, estudiando "Ingeniería informática. Ingeniería del Software" en la 
          Universidad de Sevilla. Además de los conocimientos adquiridos en la carrera he decidido ampliar
          de manera autodidacta en conocimientos relativos a aplicaciones móviles y webs, más concretamente
          en Android studio y Frameworks relacionados con JavaScript. Haciendo tutoriales, viendo a gente más
          experta y haciendo proyectos propios para ellos, los cuales se han integrado en esta página.</p>
      
      </div>
    </div>
    <div id="micontainer1">
      <div id="detallesp"><p>Esta página nace como uno de los proyectos por mejorar las habilidades con JavaScript.
        En concreto está hecha usando , HTML5 y JavaScript, sobre el framework Reactjs. Tiene como propósito ser
        altamente interactiva con una cantidad considerable de efectos. </p></div>
    </div>
      {
    window.onload = ()=>{
      var bol= false;
      if(bol){
        document.location.reload();
      }
      bol=true;
          document.getElementById("li2").click();
          document.getElementById("typer2").click();
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
             
             imagenmia.style.height="60%";
             micontainer2.style.opacity = 1;
             micontainer2.style.transitionDelay= "1s";
             micontainer1.style.opacity = 0;
             micontainer1.style.transitionDelay= "0s";
             imagenmia.style.transitionDelay="1s";
             detalles.style.left ="0px";
             detalles.style.transitionDelay="1s";
             detallesp.style.marginLeft ="50%";
             detallesp.style.width="0%"
             detallesp.style.transitionDelay="0s"       
         }, false)
         document.getElementById("li1").addEventListener("click", ()=>{
             
             imagenmia.style.top = "200px";
             imagenmia.style.height="0px";
             micontainer2.style.opacity = 0;
             micontainer2.style.transitionDelay= "0s";
             micontainer1.style.opacity = 1;
             micontainer1.style.transitionDelay= "1s";
             imagenmia.style.transitionDelay="0s";
             detalles.style.left ="50%";
             detalles.style.transitionDelay="0s"
             console.log(document.documentElement.clientWidth,this.tamVentana[1]);
             if(document.documentElement.clientWidth<600){

              detallesp.style.width="100%"
             }else{
               
             detallesp.style.width="50%"
             }
             
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
