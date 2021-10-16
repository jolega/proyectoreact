//en este componente se crear la estructura del header del proyecto
//Importacion de Modulos,
import React, {Fragment } from "react";
//Declaracion de Variable,


//Declaracion de Funciones,
const Header = () => {
  return (
     <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="logo" href="/"><img src="data:image/png;base64,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" width="60" height="60" alt="" ></img></a>
            <a className="nav-item nav-link" href="/">
            QUIENES SOMOS
            </a>
            <a className="nav-item nav-link" href="#/">
            DESARROLLOS
            </a>
            <a className="nav-item nav-link" href="#/">
            TIPS
            </a>
            <a className="nav-item nav-link" href="#/">
            PRACTICAS
            </a>
            <a className="nav-item nav-link" href="/contact-us">
            CONTACTO
            </a>
      </nav>
      <b />
      <hr />
    </Fragment>
  );
  
};
//Ejecucion del Codigo
export default Header;