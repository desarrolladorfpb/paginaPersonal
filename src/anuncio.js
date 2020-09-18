import React, { Component } from 'react';
import './style_zanuncio.css'

class Anuncio extends Component {
  constructor(props){
    super(props);
    
  }
render(){
  return (
    <body id="body">
        <div className="explicacion">   
        <div className="detalles">El anuncio que se intenta emular es:
        <br></br><br></br><button id="volver">Volver a la página</button>
        </div>

            <video className="video" src="/videos/superhi.mp4" width="30%" autoPlay loop></video>

        </div>
        <div id="circuloAnuncio"></div>
        <h2><div id="container">SuperHi</div> </h2>
        {
            window.onload=function(){
                document.getElementsByTagName("body")[0].style.backgroundColor="black";
                document.getElementsByTagName("body")[0].style.textAlign="center";
                document.getElementById("body").style.backgroundColor="black";
                document.getElementById("volver").onclick=()=>document.location.href="/proyectos";
                var circulo = document.getElementById("circuloAnuncio");
                window.addEventListener("mousemove",(event)=>{
                    
                    circulo.style.left=event.clientX-75+"px";
                    circulo.style.bottom = -event.clientY-window.scrollY+75+"px";
                },false
                )
                
                
            }
        }
    </body>
    
    );
    
    
}

}

export default Anuncio;
