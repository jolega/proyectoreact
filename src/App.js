// en esta page se dibuja el home page//
import { createPopup } from '@typeform/embed';
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
import Cookiesbutton from "./components/navigation/cookiesbutton.js";


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


//Declaracion de Funciones,

function click(){
  alert('¡Has hecho clic!')
}

function saveCookie(labelCookie,value,date) {
  document.cookie = labelCookie+"="+value+";expires="+date;
  console.log(document.cookie)
  }
function readCookie(labelCookie) {
  let micookie=0;
      let lista = document.cookie.split(";");
      for(let i=0; i< lista.length ; i++) {
          let busca = lista[i].search(labelCookie);
          if (busca > -1) {micookie=lista[i]}
          }
      if(micookie ===  0) { return false}
      else{return true;}
      }
function OpenGiveawayHome() {   
  if(!readCookie("stateCookieGiveawayHome")){
      saveCookie("stateCookieGiveawayHome","true","31 Dec 2021 23:59:59 GMT")	 
      createPopup('EmcavTKa', {open: 'time',openValue: 3000,})
    }
}



function App() {

  <script  src="components/modules.js" type="module"></script>;
  OpenGiveawayHome(); 
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
        <Cookiesbutton />

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
