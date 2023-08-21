import React, { useState } from "react";
import "../App.css"
import axios from "axios";


const initialState = {
    nombresol: "",
    email:"",
    telefono:"",
    nombreprop:""

  };

const GetinfoProp=(props)=>{
    const refresh = () => window.location.reload(true);
    const [state, setState] = useState(initialState);

    const URI = "http://45.80.153.150:5002";
    const nombre=props.nombre

    const {
      nombresol,
      email,
      telefono
  
    } = state;
  

    const handleInput = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
        console.log(name, value);
      };

      const sendData = (e) => {
        console.log(nombresol,email,telefono,nombre);
        e.preventDefault();
        if(!nombresol || !email || !telefono){
            alert("Por favor llene todos los campos");
        }
        else{
            axios
            .post("http://localhost:8888/index.php?infoprops", {
              nombresol,
              email,
              telefono,
              nombre
            })
            .then(() => {
                setState({
                  nombresol: "",
                  email: "",
                  telefono: ""
                });
              })
              .catch((err) => alert("Llenar todos los campos"));
      
            alert("Se han enviado tus datos, en breve te contactaremos");
            refresh();
            
            
        }

      }
    
    return(

  <div className="container-fluid ccc2">
    <div className="row">
    <div className="col-md-12">
    <form onSubmit={sendData}>

        <div className="row">

        <div className="col-12 col-md-8">
            <label className="label1">Nombre:</label>
            <br />
            <input
              type="text"
              className="inputformvendemos"
              name="nombresol"
              onChange={handleInput}
            />
          </div>

          <div className="col-12 col-md-8">
            <label className="label1">Correo electrónico:</label>
            <br />
            <input
              type="text"
              className="inputformvendemos"
              name="email"
              onChange={handleInput}
            />
          </div>

          <div className="col-12 col-md-8b">
            <label className="label1">Teléfono de contacto:</label>
            <br />
            <input
              type="text"
              className="inputformvendemos"
              name="telefono"
              onChange={handleInput}
            />
          </div>

          <input type="hidden" value={nombre} />
     

          </div>

          <button className="btn  btn111">ENVIAR</button>
          </form>
          </div>
    </div>

  </div>

    )
}

export default GetinfoProp