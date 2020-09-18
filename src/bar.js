import React, { Component } from 'react';
import HeaderP from './HeaderP'
import './style_mercadona.css'

class Bar extends Component{
  constructor(props){
    super(props);
    this.state={
     /* valor1:this.generarValor(),
      valor2:this.generarValor(),
      valor3:this.generarValor()*/
    }
    
    this.hazfocus = this.hazfocus.bind(this);
  }
render(){
  return (
    <div>
    <head>
      <meta name="viewport" content="width=device-width, inital-scale=1.0"></meta>
    </head>
    <header>
      <HeaderP></HeaderP>
    </header>
    <div className="containerAct">
        <div className="containerAct_titulo">Gestión de un bar (no acabado)</div>
        <div className="containerAct_descripcion">Esta aplicación está pensada para la gestión interna de un bar, aunque también se podrían hacer pedidos a través de ella.
        Además ayuda a llevar el inventario de tal forma que cuando se hace un pedido, quita los productos de dicho pedido del inventario.
        </div><div className="containerAct_descripcion">Toda la página es interactiva a excepciones que serán comentadas en las distintas pantallas con "<strong>Nota</strong>".
        Cuando se pulsa un botón la actividad a la que te lleve se iluminará y su titulo será rodeado de recuadro rojo.
        </div>
        <div className="containerAct_seccion">1. Splash screen e inicio</div>
        <div className="containerAct_actividad">
          <div className="seccion_titulo">Splashscreen</div>
          <img src="/imagenes/splashbar.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Esta es la imagen que aparece en lo que se carga la app, con una imagen genérica.</div>
        </div>
        <div className="separador_h"></div>
       {/* Pagina de inicio */}
        <div id="actividad_principal" className="containerAct_actividad">
          <div className="seccion_titulo">Página de inicio</div>
          <img src="/imagenes/principalbar.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Aquí podemos ver la pantalla principal y tenemos cuatro opciones: Gestionar productos (añadir producto de venta o de inventario),
          hacer la lista de la compra o verla.</div>
          <button id="boton_actividad_gestion" className="boton_principal_gestionar"></button>
          <button id="boton_actividad_lista" className="boton_actividad_lista"></button>
          <button id="boton_actividad_verlista" className="boton_actividad_verlista"></button>
        </div>
        <div className="separador_t"></div>
        <div className="containerAct_seccion">2. Gestionar productos</div>
        <div id="actividad_gestion" className="containerAct_actividad">
          {/*Gestionar productos*/}
          <div className="seccion_titulo">Gestionar productos</div>
          <img src="/imagenes/gestionarproductosbar.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Aquí podemos elegir entre añadir productos al inventario o a la venta. </div>
          <button id="boton_gestionar_editar" className="boton_gestionar_editar"></button>
          <button id="boton_gestionar_add" className="boton_gestionar_add"></button>
        </div>
        <div className="separador_h"></div>
        <div id="gestion_editar" className="containerAct_actividad">
          {/*Añadir producto venta*/}
          <div className="seccion_titulo">Añadir producto venta</div>
          <img src="/imagenes/formproductoventabar.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Aquí vemos un formulario para rellenar con los datos del producto a la venta y relacionarlo con los productos del almacén.  <br></br>
          <strong>Nota:</strong> Aquí se puede interactuar con los botones de la primera fila y con el "volver".</div>
          <button id="boton_edit_volver" className="boton_edit_volver"></button>
          <button id="boton_edit_edit" className="boton_edit_edit"></button>
          <button id="boton_edit_borrar" className="boton_edit_borrar"></button>
        </div>
        <div className="separador_t"></div>
        <div id="editar_formulario" className="containerAct_actividad">
          {/*Relacionar con inventario*/}
          <div className="seccion_titulo">Relacionar con inventario</div>
          <img src="/imagenes/relacionesbar.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Podemos ver un listado con los productos del inventario. puedes añadir productos o eliminarlos si han sido añadidos antes. </div>
          <button id="boton_edit_form" className="boton_edit_form"></button>
        </div>
        <div className="separador_h"></div>
        <div id="editar_borrar" className="containerAct_actividad">
          {/*Añadir producto del inventario*/}
          <div className="seccion_titulo">Añadir producto del inventario</div>
          <img src="/imagenes/formproductoinventariobar.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Vemos un formulario sencillo para añadir un nuevo producto al inventario.  </div>
          <button id="boton_cancel" className="boton_cancel"></button>
        </div>
    </div>

      {
    window.onload = ()=>{ 
        var bol= false;
        if(bol){
          document.location.reload();
        }
        bol=true;
        document.getElementById("typer2").click();
        document.getElementById("botonHome").onclick=()=>document.location.href="/home";
        document.getElementById("logo").onclick=()=>document.location.href="/home";
        document.getElementById("botonProyectos").onclick=()=>document.location.href="/proyectos";
           
      }
         
     }
    
    </div>
    
  );
}
  hazfocus(idhacia) {
    let hacia = document.getElementById(idhacia);
    let oldStyle = window.getComputedStyle(hacia);
    let titulo = hacia.firstChild;
    let oldStyleTitulo = window.getComputedStyle(titulo);
    titulo.style.border="2px solid red";
    hacia.onfocus=()=> hacia.style.opacity=1;
    hacia.scrollIntoView();       
    hacia.style.opacity=1;
    setTimeout(()=>{
      hacia.style=oldStyle;
      titulo.style =oldStyleTitulo}, 2000);
}
}
export default Bar;
