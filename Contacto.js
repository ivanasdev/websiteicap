import React, { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import logofb from "../assets/icons/facebook.png";
import logoinsta from "../assets/icons/instagram.png";
import logolink from "../assets/icons/linkedin.png";
import logoyou from "../assets/icons/youtube.png";
import logotik from "../assets/icons/tik-tok.png";
import logowhts from "../assets/icons/whatsapp.png";
import Img1 from "../assets/img/contac.jpg"
import logophone from "../assets/icons/mall.png"
import locat from "../assets/icons/location.png"
import maill from   "../assets/icons/mail.png"
import axios from "axios";



const initialstate = {
  motmensaje: "",
  nombre: "",
  email: "",
  celular: "",
  mensaje: "",
};
const Contact = () => {

  const refresh = () => window.location.reload(true);

  const [state, setState] = useState(initialstate);
  const { motmensaje, nombre, email, celular, mensaje } = state;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(name, value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!motmensaje || !nombre || !email || !celular || !mensaje) {
      alert("Por favor llene todos los campos");
    } else {
      axios
        .post("https://inmobicapital.com:9589/ws/?messages", {
          motmensaje,
           nombre,
            email, 
            celular,
             mensaje 
        })
        .then(() => {
   
          setState({
            motmensaje: "",
            nombre: "",
            email: "",
            celular: "",
            mensaje: ""
          });
        })
        .catch((err) => alert("Se guardo con exito el contenido"));
        alert("Se guardo con exito el contenido")

      refresh();
    }
  };

  return (
    <div>
      <NavBar />

      <div className="">
   

        <div className="container-fluid">
  <div className="row cmensaje ">

  <h2 className=" h22 ">
          CONTACTANOS
        </h2>
       
   

   <div className="col-sm-6 conta1">
   <a
              title="Click para chatear"
              href="https://api.whatsapp.com/send?phone=5630301540.&text=¡Hola!%20Me%20gustaría%20más%20información."
              target="_blank"
              rel="noopener"
            >
              <img src={logowhts} className="img-fluid logowhts" />
            </a>
            <a
                  title="Visita nuestro perfil de Facebook"
                  href="https://www.facebook.com/InmobiCapital/"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={logofb} className="img-fluid logowhts" />
                </a>

                <a
                  title="Siguenos en Instagram"
                  href="https://www.instagram.com/inmobicapital/"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={logoinsta} className="img-fluid logowhts" />
                </a>
                <a
                  title="Estamos en Linkedin"
                  href="https://www.linkedin.com/company/inmobicapitalm%C3%A9xico/"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={logolink} className="img-fluid logowhts" />
                </a>

      
            <p className="card-text"> <img src={logophone}  className="iconphpne"/>55 8930 9248</p>
   
        
            <p className="card-text"><img src={maill}  className="iconphpne"/>contacto@inmobicapital.com</p>
            <img src={locat}  className="iconphpne"/>
            <a href="https://goo.gl/maps/YmAm6MU6WDrjBgSGA" className="card-text">
              Lago Alberto 442, Anáhuac I Secc, Miguel Hidalgo, 11320 Ciudad de
              México, CDMX
            </a>
           
   </div>
       
    <div className="col-md-6">
      <div className="mensaje-form">
        <p className="p22">DEJANOS UN MENSAJE</p>

    

        <form onSubmit={handleSubmit}>
                <div>
                  <label className="p2">ME INTERESA:</label>
                  <select
                    name="motmensaje"
                    className="form-select inputform"
                    value={motmensaje}
                    onChange={handleInput}
                  >
                    <option>INFORMACI&Oacute;N</option>
                    <option>INVERTIR</option>
                  </select>
                </div>
                <div className="">
                  <label className="p2">NOMBRE </label>
                  <input
                    type="text"
                    className="form-control inputform"
                    name="nombre"
                    onChange={handleInput}
                  />
                </div>
                <div className="">
                  <label className="p2">CORREO ELECTR&Oacute;NICO</label>
                  <input
                    type="text"
                    className="form-control inputform"
                    id="email"
                    name="email"
                    onChange={handleInput}
                  />
                </div>
                <div className="">
                  <label className="p2">CELULAR</label>
                  <input
                    type="number"
                    className="form-control inputform"
                    id="celular"
                    name="celular"
                    onChange={handleInput}
                  />
                </div>

                <div className="">
                  <label className="p2">MENSAJE</label>
                  <textarea
                    className="form-control inputform"
                    name="mensaje"
                    rows="3"
                    onChange={handleInput}
                  ></textarea>
                </div>

                <button className="btn bt1">ENVIAR MENSAJE</button>
              </form>
      </div>
    </div>
  </div>
</div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
