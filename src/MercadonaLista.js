import React, { Component } from 'react';
import './App.css';
import HeaderP from './HeaderP'
import './style_inicio.css'
import './style_mercadona.css'
import { render } from '@testing-library/react';

class MercadonaLista extends Component{
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
        <div className="containerAct_titulo">Mercadona Lista</div>
        <div className="containerAct_descripcion">Esta aplicación está hecha con la intención de que varias personas puedan colaborar
        en una única "lista de la compra" con productos del Mercadona. También en la misma aplicación se puede tanto 
        añadir productos como eliminarlos. Toda la página es interactiva a excepciones que serán comentadas en las distintas pantallas con "<strong>Nota</strong>".
        Cuando se pulsa un botón la actividad a la que te lleve se iluminará y su titulo será rodeado de recuadro rojo.
        </div>
        <div className="containerAct_seccion">1. Splash screen e inicio</div>
        <div className="containerAct_actividad">
          <div className="seccion_titulo">Splashscreen</div>
          <img src="/imagenes/MonaLista.jpg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Esta es la imagen que aparece en lo que se carga la app, los colores que se han usado para todo el diseño de la aplicación han sido los colores principales de Mercadona.</div>
        </div>
        <div className="separador_h"></div>
       {/* Pagina de inicio */}
        <div id="actividad_principal" className="containerAct_actividad">
          <div className="seccion_titulo">Página de inicio</div>
          <img src="/imagenes/principalmerca.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Aquí podemos ver la pantalla principal y tenemos tres opciones: Gestionar productos (editar, añadir o borrar),
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
          <img src="/imagenes/principaledit.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Aquí podemos elegir entre editar o borrar los productos pulsando en "Editar productos" o añadir un nuevo producto pulsando "Añadir productos". </div>
          <button id="boton_gestionar_editar" className="boton_gestionar_editar"></button>
          <button id="boton_gestionar_add" className="boton_gestionar_add"></button>
        </div>
        <div className="separador_h"></div>
        <div id="gestion_editar" className="containerAct_actividad">
          {/*Listao edicion de productos*/}
          <div className="seccion_titulo">Listado edición de productos</div>
          <img src="/imagenes/listadoedit.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Aquí se muestra un listado con todos los productos y podemos darle a editar o a borrar, además podemos buscar un producto en concreto
          para hacer estas operaciones sobre ellos. <br></br>
          <strong>Nota:</strong> Aquí se puede interactuar con los botones de la primera fila y con el "volver".</div>
          <button id="boton_edit_volver" className="boton_edit_volver"></button>
          <button id="boton_edit_edit" className="boton_edit_edit"></button>
          <button id="boton_edit_borrar" className="boton_edit_borrar"></button>
        </div>
        <div className="separador_t"></div>
        <div id="editar_formulario" className="containerAct_actividad">
          {/*Formulario de edicion*/}
          <div className="seccion_titulo">Formulario de edición</div>
          <img src="/imagenes/editform.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Podemos ver un formulario de edición del producto seleccionado y cambiar todas sus opciones.<br></br>
          <strong>Nota:</strong> En esta actividad solo se puede interactuar con editar. </div>
          <button id="boton_edit_form" className="boton_edit_form"></button>
        </div>
        <div className="separador_h"></div>
        <div id="editar_borrar" className="containerAct_actividad">
          {/*Borrar productos*/}
          <div className="seccion_titulo">Borrar producto</div>
          <img src="/imagenes/alertborrar.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Al dar al boton de borrar te sale una alerta para confirmar su borrado o cancelarlo, para evitar así borrar productos por tocar sin querer.  </div>
          <button id="boton_cancel" className="boton_cancel"></button>
        </div>
        <div className="separador_t"></div>
        <div id="editar_add" className="containerAct_actividad">
          {/*añadir producto*/}
          <div className="seccion_titulo">Añadir producto</div>
          <img src="/imagenes/addproduct.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Vemos que es el mismo formulario que la edición pero sin datos. <br></br>
          <strong>Nota:</strong> Aquí sólo se puede pulsar registrar producto.</div>
          
          <button id="boton_registrar" className="boton_registrar"></button>
        </div>
        <div className="separador_t"></div>
        <div className="containerAct_seccion">3. Hacer lista</div>
        <div id="dolist" className="containerAct_actividad">
          {/*Listado de productos*/}
          <div className="seccion_titulo">Listado de productos</div>
          <img src="/imagenes/dolist.jpeg" className="seccion_imagen"></img>
          <button id="boton_list_search" className="boton_list_search" ></button>
          <button id="boton_list_filter" className="boton_list_filter"></button>
          <button id="boton_list_vermas" className="boton_list_vermas"></button>
          <button id="boton_list_volver" className="boton_list_volver"></button>
          <div className="seccion_descripcion">En este sitio se puede añadir los productos a la lista final eligiendo la cantidad de cada uno. Adicionalmente con el fin de facilitar la selección de productos podemos buscarlo según el nombre o el tipo.
          <br></br><strong>Nota:</strong> Aquí funciona el ver más de la primera fila se puede dar a buscar, a filtrar y a volver. El botón de añadir mostraría una notificación de que se ha agregado correctamente pero se quedaría en esta pantalla.</div>
         
        </div>
         
        <div className="separador_h"></div>
        <div id="dolist_search" className="containerAct_actividad">
          {/*Resultado de la busqueda*/}
          <div className="seccion_titulo">Resultado de la búsqueda</div>
          <img src="/imagenes/searchresult.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">En esta pantalla podemos ver el resultado de la búsqueda en la anterior.
          <br></br><strong>Nota:</strong> Solo funciona volver.</div>
          <button id="boton_list_volver1" className="boton_list_volver"></button>
        </div>
        <div className="separador_t"></div>
        <div id="dolist_filter" className="containerAct_actividad">
          {/*Lista tras filtro*/}
          <div className="seccion_titulo">Lista después de filtro</div>
          <img src="/imagenes/searchresult.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">En esta pantalla podemos ver el resultado de aplicar el filtro según el tipo.<br></br><strong>Nota:</strong> Solo funciona volver.</div>
          <button id="boton_list_volver2" className="boton_list_volver"></button>
        </div>
        <div className="separador_h"></div>
        <div id="dolist_show" className="containerAct_actividad">
          {/*Ver detalles del producto*/}
          <div className="seccion_titulo">Ver detalles del producto</div>
          <img src="/imagenes/showproduct.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Aquí podemos ver más detalles relacionados con el producto como dónde se encuentra o la foto que se le pasa como URL.</div>
        </div>
        <div className="separador_t"></div>
        <div className="containerAct_seccion">4. Ver la lista de la compra</div>
        <div id="verlista" className="containerAct_actividad">
          {/*Ver lista*/}
          <div className="seccion_titulo">Ver lista</div>
          <img src="/imagenes/listacompra.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Podemos ver la lista con todos los productos que hayamos ido agregando.<br></br><strong>Nota:</strong> Funciona volver y los botones de la primera fila.</div>
          <button id="boton_verlist_volver" className="boton_verlist_volver"></button>
          <button id="boton_verlist_vermas" className="boton_verlist_vermas"></button>
          <button id="boton_verlist_coger" className="boton_verlist_coger"></button>
        </div>
        <div className="separador_h"></div>
        <div id="verlista_cogido" className="containerAct_actividad">
          {/*Producto cogido*/}
          <div className="seccion_titulo">Producto cogido</div>
          <img src="/imagenes/productocogido.jpeg" className="seccion_imagen"></img>
          <div className="seccion_descripcion">Aquí vemos como se van tachando los productos conforme vamos cogiendo productos, y cuando volvamos a entrar esos productos ya no estarán en la lista. <br></br><strong>Nota:</strong> Solo funciona volver.</div>
          <button id="boton_verlist_volver1" className="boton_verlist_volver"></button>
        </div>
        <div className="separador_t"></div>
    </div>

      {
    window.onload = ()=>{ 
        document.getElementById("botonHome").onclick=()=>document.location.href="home";
        document.getElementById("logo").onclick=()=>document.location.href="home";
        document.getElementById("botonProyectos").onclick=()=>document.location.href="proyectos";
        /* botones pagina de inicio*/
        document.getElementById("boton_actividad_gestion").addEventListener("click", ()=>{this.hazfocus("actividad_gestion")}, false)
        document.getElementById("boton_actividad_lista").addEventListener("click", ()=>{this.hazfocus("dolist")}, false)
        document.getElementById("boton_actividad_verlista").addEventListener("click", ()=>{this.hazfocus("verlista")}, false)
       
        /*botones gestionar productos */
        document.getElementById("boton_gestionar_editar").addEventListener("click", ()=>{this.hazfocus("gestion_editar")}, false)
        document.getElementById("boton_gestionar_add").addEventListener("click", ()=>{this.hazfocus("editar_add")}, false)
       /*botones Listado edición de productos*/
        document.getElementById("boton_edit_volver").addEventListener("click", ()=>{this.hazfocus("actividad_principal")}, false)
        document.getElementById("boton_edit_edit").addEventListener("click", ()=>{this.hazfocus("editar_formulario")}, false)
        document.getElementById("boton_edit_borrar").addEventListener("click", ()=>{this.hazfocus("editar_borrar")}, false)
        /*botones Formulario de edición*/
        document.getElementById("boton_edit_form").addEventListener("click", ()=>{this.hazfocus("gestion_editar")}, false)
        /* botones Borrar producto*/
        document.getElementById("boton_cancel").addEventListener("click", ()=>{this.hazfocus("gestion_editar")}, false)
        /* botones añadir producto */
        document.getElementById("boton_registrar").addEventListener("click", ()=>{this.hazfocus("actividad_principal")}, false)
        /* botones Listado de productos */
        document.getElementById("boton_list_search").addEventListener("click", ()=>{this.hazfocus("dolist_search")}, false)
        document.getElementById("boton_list_volver").addEventListener("click", ()=>{this.hazfocus("actividad_principal")}, false)
        document.getElementById("boton_list_filter").addEventListener("click", ()=>{this.hazfocus("dolist_filter")}, false)
        document.getElementById("boton_list_vermas").addEventListener("click", ()=>{this.hazfocus("dolist_show")}, false)
        document.getElementById("boton_list_volver1").addEventListener("click", ()=>{this.hazfocus("actividad_principal")}, false)
        document.getElementById("boton_list_volver2").addEventListener("click", ()=>{this.hazfocus("actividad_principal")}, false)
       /* botones ver lista */
       document.getElementById("boton_verlist_volver").addEventListener("click", ()=>{this.hazfocus("actividad_principal")}, false)
       document.getElementById("boton_verlist_volver1").addEventListener("click", ()=>{this.hazfocus("actividad_principal")}, false)
       document.getElementById("boton_verlist_coger").addEventListener("click", ()=>{this.hazfocus("verlista_cogido")}, false)
       document.getElementById("boton_verlist_vermas").addEventListener("click", ()=>{this.hazfocus("dolist_show")}, false)
       
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
export default MercadonaLista;
