// componente que muestra un pequeño mensaje de ayuda
// Importacion de Modulos,
import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';


// Declaracion de Variable,

const DropdownContent = styled.div`
 
   display: none;
   width: 300px;
   height: 150px;
   background: white;
   color: black;
   cursor: pointer;
   margin: 1em;
   padding: 0.25em 1em;
   border-style: outset;}
   border-radius: 3px;
   position: absolute;
   font-family: apercu,sans-serif;
   font-size: 12px;
   `;

// el hover crea un bloque con el contenido
const Dropdown = styled.div`
  position: relative;
  display: inline-block;


  &:hover ${DropdownContent} {
    display: block;
  }
`;

const Desc = styled.div`
  padding: 15px;
  text-align: justify;
  text-transform: none;
  font-family: apercu,sans-serif;
  font-size: 12px;
  text-decoration-line: none;
`;

function click(){
  alert('¡Has hecho clic!')
  console.log(DropdownContent);

}


// Declaracion de Funciones,


const dropdownImageHelp = ({ title, message, enlace, url }) => {
  return (
    <Fragment>
      <Dropdown>

           <Popup trigger={<img src="https://oasis-new-cms.s3.amazonaws.com/dev/logo/ayuda.png" width="15" height="15" alt="" />} position="right center">
                 <div>
                   <DropdownContent id="popupWindows">
                    {title}
                      <Desc>
                       {message} <a href={url}> {enlace} </a>
                      </Desc>
                   </DropdownContent>
                   </div>
              </Popup>

      </Dropdown>

      <Dropdown>
        <a className="logo" href="#">
          <img onClick={click} src="https://oasis-new-cms.s3.amazonaws.com/dev/logo/ayuda.png" width="15" height="15" alt="" />
        </a>
        <DropdownContent id="popupWindows">
          {title}
          <Desc>
            {message} <a href={url}> {enlace} </a>
          </Desc>
        </DropdownContent>
      </Dropdown>


      <a className="logo">
          <img onClick={click} src="https://oasis-new-cms.s3.amazonaws.com/dev/logo/ayuda.png" width="15" height="15" alt="" />
        </a>


        <Popup trigger={<button> Trigger 1</button>} position="right center">
              <div>Popup content here !!</div>
              </Popup>

        <Popup trigger={<button>Trigger 2</button>} position="top left">{close => (
              <div>
                 Content here
               <a className="close" onClick={close}>
                &times;
              </a>
            </div>
               )}
           </Popup>

               <Popup
                          trigger={open => (
                           <button className="button">Trigger 3 - {open ? 'Opened' : 'Closed'}</button>
                            )}
                           position="right center"
                            closeOnDocumentClick>
                           <span> Popup content </span>
                 </Popup>
    </Fragment>

    
  );
};
// Ejecucion del Codigo

dropdownImageHelp.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  enlace: PropTypes.string,
  url: PropTypes.string,
};
export default dropdownImageHelp;
