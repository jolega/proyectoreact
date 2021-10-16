// en este componente se crear un contact  
//Importacion de Modulos,
import React, {useState, Fragment} from 'react';
import DropdownImageHelp from "./dropdownImageHelp.js";

//Declaracion de Variable,
// function component
const Contact_us  = () => {
    // almacenamiento de los datos en la variable 
   const[datos, setDatos]= useState(
   {
     nombre:'',
     apellido:'',
     correo:''

   }
   )
  // lectura de los campos en tiempo real
   const handleInputChange =(event) =>  {
     setDatos({
       ...datos,
       [event.target.name] : event.target.value
     })
   }
 // evento del boton
   const enviardatos =(event) =>  {
     event.preventDefault();
     console.log(datos.nombre +" "+  datos.apellido)
   }
//Declaracion de Funciones,
  return (
    <Fragment>

       <div className="container mt-4">
       <h1>
       Contact Us
       </h1>
       </div> 

      <form className="container mt-5" onSubmit={enviardatos}>  

                <div className="col-md-8">   
                Nombre:  
                   <input 
                   type="text"
                   placeholder="Ingrese el nombre "
                   name="nombre"
                   onChange={handleInputChange}
                   ></input>
                  <DropdownImageHelp/>


                </div> 
                <br></br>
                <div className="col-md-8">   
                Apellido: 
                   <input 
                   type="text"
                   placeholder="Ingrese el Apellido "
                   className="form-control"
                   name="apellido"
                   onChange={handleInputChange}
                   ></input>
                </div> 
                <br></br>
                <div className="col-md-8">   
                Correo: 
                   <input 
                   placeholder="Ingrese el correo "
                   className="form-control"
                   type="email"
                   name="correo"
                   onChange={handleInputChange}
                   ></input>
                </div> 
                <br></br>
                <div className="col-md-8">   
                <button
                className="btn btn-primary"
                type="submit"
                > Enviar </button> 
                </div> 

      </form>
       
    </Fragment>
  );
};
//Ejecucion del Codigo
export default Contact_us;