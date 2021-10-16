//en este componente se crear la estructura del header del proyecto
//Importacion de Modulos,
import React, {Fragment } from "react";
import PopPop from 'react-poppop';
import styled from 'styled-components';
import Modal from "styled-modal";
//Declaracion de Variable,

const PopPopStyled = styled.div`

`;

//Declaracion de Funciones,
const popupHomepage = () => {
  return (
             
            <PopPop open={true}
             position="centerCenter">
               <h1>hola</h1>
               <p>hola</p>
            </PopPop>
  );
  
};
//Ejecucion del Codigo
export default popupHomepage;





