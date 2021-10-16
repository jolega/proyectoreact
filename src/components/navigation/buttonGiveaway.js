//Importacion de Modulos,
import React, {Fragment } from "react";
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


//Declaracion de Variable,
const Mystyle = styled.button`
  all: unset;
  font-family: Helvetica, Arial, sans-serif;
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #379cfb;
  color: #000000;
  font-size: 17px;
  border-radius: 21px;
  padding: 0 28px;
  font-weight: bold;
  height: 42.5px;
  cursor: pointer;
  line-height: 42.5px;
  text-align: center;
  margin: 0;
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }
`;




// function component

//Declaracion de Funciones,
const buttonGiveaway = () => {
  return (
     <Fragment>   
         <Mystyle data-tf-popup="EmcavTKa" data-tf-auto-close="2000">  
         Giveaway3
           </Mystyle>       
     </Fragment>
  );
};
 //Ejecucion del Codigo
export default buttonGiveaway;
