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
const popupModal = () => {
  return (
     <Fragment>
        <PopPop open={true}
       position="centerCenter"
       closeBtn={true}
       closeOnEsc={true}
       closeOnOverlay={true}>
        
        <button data-tf-popup="EmcavTKa" data-tf-auto-close="2000" >Enter the Giveaway</button><script src="//embed.typeform.com/next/embed.js"></script>
            </PopPop>
    </Fragment>
  );
  
};
//Ejecucion del Codigo
export default popupModal;





