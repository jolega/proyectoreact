// Importacion de Modulos,
import { createPopup } from '@typeform/embed';
import '@typeform/embed/build/css/popup.css';
import React, { Fragment } from 'react';
import styled from 'styled-components';
// Declaracion de Variable,

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
  font-size: 18px;
  border-radius: 22px;
  padding: 0 30px;
  font-weight: bold;
  height: 45px;
  cursor: pointer;
  line-height: 45px;
  text-align: center;
  margin: 0;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

// declaracion del evento

function OpenGiveaway() {
  createPopup('EmcavTKa', {
    open: 'time',
    openValue: 1,
  });
}

// Declaracion de retunr,
const ButtonGiveaway = () => {
  return (
    <Fragment>
      <Mystyle
        onClick={e => {
          e.preventDefault();
          OpenGiveaway();
        }}
      >
        Enter the Giveaway
      </Mystyle>
    </Fragment>
  );
};
// Ejecucion del Codigo
export default ButtonGiveaway;
