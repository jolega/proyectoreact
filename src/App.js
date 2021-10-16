// en esta page se dibuja el home page//
import "./App.css";
// importaciones creadas por mi
import { BrowserRouter as Router, Switch } from "react-router-dom";
import styled from 'styled-components';
import PopPop from 'react-poppop';
import Header from "./components/navigation/header.js";
import Footer from "./components/navigation/footer.js";
import Contactus from "./components/navigation/contact-us.js";
import DropdownImageHelp from "./components/navigation/dropdownImageHelp.js";
import ButtonGiveaway from "./components/navigation/buttonGiveaway.js";
import ButtonColors from "./components/navigation/buttonColors.js";
import popupModal from "./components/navigation/popupModal.js";
import popupHomepage from "./components/navigation/popupHomepage.js";
import { createPopup } from '@typeform/embed';


//Delcaracion de Variable,
const Button = styled.button`
display: inline-block;
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
display: block;
`;

const InstantBook = styled.div`
z-index: 10;
display: flex;
flex-direction: column;
-webkit-box-align: center;
align-items: center;
width: 100%;
padding: 8px 16px;
background-color: rgba(0, 0, 0, 0.05);
box-shadow: rgb(0 0 0 / 10%) 0px -1px;
`;

//Declaracion de Funciones,

function click(){
  alert('¡Has hecho clic!')
}

function OpenGiveaway() {
  createPopup('EmcavTKa', {
    open: 'load',
    openValue: undefined,    
  });
}

const { toggle } = createPopup('EmcavTKa')


function App() {

  <script src="components/modules.js" type="module"></script>;
  return (
    <Router>

<div>
        <Header />
                     

        <PopPop open={false}
       position="centerCenter"
       closeBtn={true}
       closeOnEsc={true}
       closeOnOverlay={true}>
        
        <button data-tf-popup="EmcavTKa" data-tf-auto-close="2000" >Enter the Giveaway</button><script src="//embed.typeform.com/next/embed.js"></script>
            </PopPop>
        <popupHomepage/>
        <popupHomepage2/>

        <a data-tf-popup="EmcavTKa" data-tf-auto-close="2000" >open</a>
        <button data-tf-popup="EmcavTKa" data-tf-auto-close="2000" >Giveaway 1</button>
        <button data-tf-popup="EmcavTKa" data-tf-auto-close="2000" >Giveaway 2</button>
        <ButtonColors/>
        <Button as="a" href="/contact-us">contact</Button>
        <DropdownImageHelp />
        <div>
        <img  src="https://oasis-new-cms.s3.amazonaws.com/dev/logo/ayuda.png" width="15" height="15" alt="" ></img> 
        <button onClick={click}>  Activate Laser </button>
        </div>
        <ButtonGiveaway />
        <div className="content">


          <Switch>
            <Router path="/contact-us">
              <Contactus />
            </Router>
          </Switch>


        </div>
        <Footer />
      </div>
    </Router>
  );
}
//Ejecucion del Codigo
export default App;
