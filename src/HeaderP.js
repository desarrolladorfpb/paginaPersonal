import React, { Component } from 'react';
import './style_header.css';

class HeaderP extends Component {
  state={valor1:""}
  constructor(props){
    super(props);
    this.state={
     count:0,
     valor1:"",
     valor2:true,
     valor3:"Página personal"
    }
  this.maquina= this.maquina.bind(this);
  this.para= this.para.bind(this);
  this.play=this.play.bind(this);
  this.cargaMaquina=this.cargaMaquina.bind(this);
  }
  play = ()=>{
    
    document.getElementById("typer4").style.opacity=0;
    document.getElementById("typer4").style.cursor="default";
    document.getElementById("typer3").style.opacity=1;
    document.getElementById("typer3").style.cursor="pointer";
    
    this.setState(() => {
      return {valor2: true};
    });
    if(this.state.valor1==""){
      this.cargaMaquina();
    }
    if(this.state.valor2 == false){

      let typer = document.getElementById("containertyper");
      let typerpaused=document.getElementById("typerpaused");
      typerpaused.style.position = "absolute";
      typerpaused.style.opacity="0";
      typerpaused.style.fontWeight="0px"
      typer.style.position="relative";
      typer.style.opacity="1";
      typer.style.fontWeight="2.2vmax";
  }
}

  para = ()=>{
    document.getElementById("typer4").style.opacity=1;
    document.getElementById("typer4").style.cursor="pointer";
    document.getElementById("typer3").style.opacity=0;
    document.getElementById("typer3").style.cursor="default";
    this.setState(() => {
      return {valor2: false};
    });
    if(this.state.valor2 == true){

      let typer = document.getElementById("containertyper");
      let typerpaused=document.getElementById("typerpaused");
      typer.style.position = "absolute";
      typer.style.opacity="0";
      typer.style.fontWeight="0vmax";
      typerpaused.style.position="relative";
      typerpaused.style.opacity="1";
      typerpaused.style.fontWeight="2.5vmax"
    }
  }
  cargaMaquina = ()=>{
    let texto1=" Página desarrollada por:";
    let texto2=" Francisco José Perejón Barrios";
    let texto3=" Con HTML, JavaScript y CSS";
    let mstotales1 = texto1.length*200 + 2000;
    let mstotales2 = texto2.length*200 + 2000;
    let mstotales3 = texto3.length*200 + 2000;

     this.maquina(texto1);
    setTimeout(()=>{
      this.maquina(texto2);
    },6600);
    setTimeout(()=>{
      this.maquina(texto3);
    },7400+6500);
    
    if(this.state.valor2){
    setTimeout(()=>{this.cargaMaquina()}, 7400+6500+7000);
  }
    
    
  }
  maquina= (texto) => {
    var i=0;
    let intervalo=100;
    document.getElementById("typer").style.opacity=1;
    let parpadea=true;
    let mstotales=0;
    let checkpoint1=false;
    
    this.setState(currentState => {
      return { count: currentState.count + 1 };
    });
    var timer = setInterval(()=> {
      if ( i<texto.length&&!checkpoint1 ) {
        // Si NO hemos llegado al final del texto..
     // Vamos añadiendo letra por letra y la _ al final.
     mstotales+=100;
     this.setState(currentState => {
      return {valor1: texto.substr(0,i++) + "_"};
    });
  }else {
    
      if(parpadea){
        var t2;
        var t1= setInterval(() => {
          this.setState(currentState => {
            return {valor1: texto.substr(0,i) };
          });
        }, 400);
        setTimeout(() => {
           t2 = setInterval(() => {
            this.setState(currentState => {
              return {valor1: texto.substr(0,i)+ "_" };
            });
          }, 600);
        }, 400);
        parpadea=false;
      }
      
      
      setTimeout(()=>{checkpoint1=true;
        clearInterval(t1);
      clearInterval(t2);
        // En caso contrario..
        // Salimos del Timer y quitamos la barra baja (_)
        this.setState(currentState => {
         return {valor1: texto.substr(0,i--)+"_"};
       });}, 2000);
       mstotales+=100;
       
   if(i==-2){
    console.log(mstotales+2000);
    document.getElementById("typer").style.opacity=0;
     clearInterval(timer);
     return 0;
   }
   
   // Auto invocamos la rutina n veces (0 para infinito)
   
  }
 },intervalo);
 
  }
 
  render() {
    return (
        <header>
        <div className="container" >  
        <img id="logo" src="/imagenes/logo.png"/>
            <button id="botonHome" className="boton"><img src="/imagenes/home1.svg" className="icono"/>Inicio</button>
            <button id="botonProyectos" className="boton"><img src="/imagenes/archive.svg" className="icono"/>Proyectos</button>
            <button id="typer2" onClick={()=>this.cargaMaquina()}></button>
            
            <img src="/imagenes/pause.svg" id="typer3" className="typer3" onClick={()=>this.para()}></img>
            <img src="/imagenes/play.svg" id="typer4" className="typer4" onClick={()=>this.play()}></img>
            <div id="typer"  ><div id="containertyper">{this.state.valor1}</div></div>
            <div id="typerpaused">{this.state.valor3}</div>
            
        </div>
        </header>
        
    );
  }

 

        
}

export default HeaderP;