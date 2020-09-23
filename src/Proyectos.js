import React, { Component } from 'react';
import HeaderP from './HeaderP'
import './style_proyectos.css'

class Proyectos extends Component{
    constructor(props){
        super(props);
        this.state={
         /* valor1:this.generarValor(),
          valor2:this.generarValor(),
          valor3:this.generarValor()*/
        }
        this.tamVentana = this.tamVentana.bind(this);
        this.movimientoCirculo =this.movimientoCirculo.bind(this);
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
render(){
  return (
    <div>
    <header>
      <HeaderP></HeaderP>
    </header>
    
    <div class="containerp">
    
    <div class="containerheaderp">Proyectos Realizados.</div>
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
            <img class="containerlink_imagen" src="./imagenes/splashbar.jpeg"/>
            <button id="verbar" class="containerlink_boton">Ver</button>
        </div>
        <div class="containerlinksp_titulo">B. Proyectos en JavaScript</div>
        <div class="containerlink">
            
            <div class="containerlink_titulo">1. Paint con JavaScript</div>
            <div class="containerlink_descripcion">Proyecto hecho con html, css y JavaScript<br/><br/>
               Se intentó emular ciertas opciones de Paint con JavaScript
            </div>
            <img class="containerlink_imagen" src="./imagenes/paint.png"/>
            <button id="verpaint" class="containerlink_boton">Ver</button>
            
        </div>
        <div id="proyectoAnuncio" class="containerlink">
            
            <div class="containerlink_titulo">2. Replicar anuncio</div>
            <div class="containerlink_descripcion">Proyecto hecho con html, css y JavaScript<br/><br/>
               A raíz de un anuncio en instagram se quiso replicar el efecto.
            </div>
            
            <div id="circulo"></div>
            
            <button id="veranuncio" class="containerlink_boton">Ver</button>
            
        </div>
    </div>
    </div>
    {window.onload=()=>{
            var bol= false;
            if(bol){
              document.location.reload();
            }
            bol=true;
            document.getElementById("verbar").onclick=()=>document.location.href="/proyectos/bar";
            document.getElementById("botonHome").onclick=()=>document.location.href="/home";
            document.getElementById("logo").onclick=()=>document.location.href="/home";
            document.getElementById("botonMercadona").onclick=()=>document.location.href="/proyectos/mercadona";
            document.getElementById("botonProyectos").onclick=()=>document.location.href="/proyectos";
            document.getElementById("verpaint").onclick=()=>document.location.href="/proyectos/paint";
            document.getElementById("veranuncio").onclick=()=>document.location.href="/proyectos/anuncio";
            document.getElementById("typer2").click();
            this.movimientoCirculo();
    }}
    </div>
    
  );
}
movimientoCirculo(){
    var circulo = document.getElementById("circulo");
    var proyectoAnuncio = document.getElementById("proyectoAnuncio");
    let oldstyle = getComputedStyle(circulo);
    window.scroll({top:10000,
        left:0,
        behavior:"auto"});
        var scrolltotal= window.scrollY;
        window.scroll({top:0,
            left:0,
            behavior:"auto"});
        window.addEventListener("resize", ()=>{
            window.scroll({top:10000,
                left:0,
                behavior:"auto"});
                scrolltotal= window.scrollY;
                window.scroll({top:0,
                    left:0,
                    behavior:"auto"});
        },false);
        var unavez=true;
        proyectoAnuncio.addEventListener("mousemove",(event)=>{
            var widthpx = this.tamVentana()[0]*0.43;
            var heightpx = this.tamVentana()[1]*0.5;
            var posicion= scrolltotal-window.scrollY;
            if(unavez){
                circulo.style.left=0;
                circulo.style.top=0;
                unavez=false;
            }
            circulo.style.marginLeft=event.clientX+50-widthpx+"px";
            
          /*circulo.style.top = (((event.clientY-posicion)/(heightpx))*100)+"%";*/
            circulo.style.top = (event.clientY-posicion)-50+"px";
            circulo.style.opacity = 1;
            circulo.style.zIndex=105;
            
        },false
        );
        
        proyectoAnuncio.addEventListener("mouseleave", ()=>{
        circulo.style= oldstyle
        unavez=true}, false);

}
}

export default Proyectos;
