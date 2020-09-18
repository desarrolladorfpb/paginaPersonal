import React, { Component } from 'react';
import './style_paint.css'

class Paint extends Component {
  constructor(props){
    super(props);
    
  }
render(){
  return (
    <div id="body">
    <span id="dibuja"></span>
    
    <span id="dibujap"></span>
    <table border="1px">
        <tr>
            <td id="naranja" ></td>
            <td id="mas" >+</td>
        </tr>
        <tr>
          <td id="black"></td>
           <td id="menos" >-</td>
      </tr>
      <tr>
      </tr>
    </table>
    
    <div id="tutorial">Este fue unos de los primero proyectos que hice en lo que aprendía a usar JavaScript.
    <br></br><br></br> Su funcionamiento es simple haces click y empieza a dibujar (por defecto en naranja), con otro click se para.
     "+" agranda el "Pincel" y "-" lo contrario.
     <br></br><br></br><button id="volver">Volver a la página</button></div>
    {
      window.onload=function(){
        document.getElementById("volver").addEventListener("click", ()=>{
          document.location="/proyectos";
        }, false);
            var sepuede = false;
            var color = "#f5841b";
            var cambiandoColor=false;
            
            var tam = 25;
        function trazar(event){
            
            let dibuja = document.getElementById("dibuja");
            let y = event.clientY;
            dibuja.innerHTML += `<div id="circulopaint" style="width: ${tam}px;height: ${tam}px;left: ${event.clientX- tam/2}px;top: ${y-tam/2}px;background: ${color};">`;
            }
        
        function dibuja(){
        window.addEventListener("click",()=>{
            if(!sepuede&&!cambiandoColor){
            window.addEventListener("mousemove",trazar, false)
            sepuede=true;
            } else{
            window.removeEventListener("mousemove", trazar, false);
            cambiandoColor=false;
            
            sepuede=false;
            }
        
        }, false)
      }
        window.addEventListener("keypress",(event)=>{
                if(event.key.toString()=="b"){
                document.getElementById("dibuja").innerHTML="";
                document.getElementById("dibujap").innerHTML="";
                }
                
        },false);
        document.getElementById("black").addEventListener("click",
            ()=> {color="black"; cambiandoColor=true;},false);
        document.getElementById("naranja").addEventListener("click",
            ()=> {color="#f5841b"; cambiandoColor=true;},false);
        document.getElementById("mas").addEventListener("click",
            ()=> {tam+=10; cambiandoColor=true;},false);
        document.getElementById("menos").addEventListener("click",
            ()=> {if(tam>6){tam-=10;} cambiandoColor=true;},false);
        

    dibuja();
    }
    }
    </div>
    
    );
    
    
}

}

export default Paint;
