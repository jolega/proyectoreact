import React, {Fragment } from "react";
 
// function component

function guardarCookie(nombre,valor,fecha) {
    document.cookie = nombre+"="+valor+";expires="+fecha;
    console.log(document.cookie)
    }



function guardar() {
    let caduca = "31 Dec 2021 23:59:59 GMT"
    let tuCookie = "pruebaCookie"
    let tuValor = document.dato.miCookie.value
    console.log("entre ")
    guardarCookie(tuCookie,tuValor,caduca)	 
    }

function leerCookie(nombre) {
    let i=0;
    let micookie;
        let lista = document.cookie.split(";");
        for (i in lista) {
            let busca = lista[i].search(nombre);
            if (busca > -1) {micookie=lista[i]}
            }
        let igual = micookie.indexOf("=");
        let valor = micookie.substring(igual+1);
        return valor;
        }


const Cookiesbutton = () => {
  return (
     <Fragment>
    <form action="#" name="dato">

          <p><input type="text" name="miCookie" /> crear tu cookie </p>
           <p><input type="button" value="guardad cookies"  onClick={e => {e.preventDefault(); guardar();}}/> ...
           <input type="button" value="leer cookies" onClick={e => {e.preventDefault(); console.log(leerCookie("pruebaCookie")); alert(document.cookie);}}/></p>
    </form>
     </Fragment>
  );
};
 
export default Cookiesbutton;