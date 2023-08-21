import React, { useState } from "react";
//import logo from "../assets/img/icapicon.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const initialstate = {
  nombre: "",
  ap: "",
  am: "",
  email: "",
  celular: "",
  referencia: "",
};

const JoinUs = () => {
  const [state, setState] = useState(initialstate);
  const { nombre, ap, am, email, celular, referencia } = state;

  const [cv, setCv] = useState(null);
  const refresh = () => window.location.reload(true);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(name, value);
  };

  const CVHandler = (e) => {
    setCv(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const sendFiles = () => {
    if (!cv) {
      console.log("No files");
      return;
    } else {
      const formdata = new FormData();
      formdata.append("filecv", cv);
      fetch("https://inmobicapital.com:9589/ws/?upcvs", {
        method: "POST",
        body: formdata,
      })
        .then((res) => res.text())
        .then((res) => console.log(res))
        .catch((err) => {
          console.error(err);
        });
      document.getElementById("cvfile").value = null;
      setCv(null);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !ap || !am || !email || !celular || !referencia) {
      alert("Por favor llene todos los campos");
    } else {
      axios
        .post("https://inmobicapital.com:9589/ws/?joinusreg", {
          nombre,
          ap,
          am,
          email,
          celular,
          referencia,
        })
        .then(() => {
          //sendFiles();
          setState({
            nombre: "",
            ap: "",
            am: "",
            email: "",
            celular: "",
            referencia: "",
          });
        })
        .catch((err) => alert("Se guardo con exito el contenido"));
        alert("Se guardo con exito el contenido")

      refresh();
    }
  };

  return (
    <div className="container-fluid">
      <div className="parallax">
        <NavBar />

        <div className="container-fluid">
          <h2 className=" h22 ">ÚNETE A NUESTRO EQUIPO</h2>
          <div className="row">


          <div className="col-md-6">
              <div className="">
                <p className="p22">
                  Dejanos tus datos y nosotros te contactaremos
                </p>

                <form className="formjoin" onSubmit={handleSubmit}>
                  <div className="row rowform">
                    <div className=" col-12 col-sm-5">
                      <label className="p2" for="exampleFormControlInput1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="form-control inputform"
                        id="nombre"
                        name="nombre"
                        onChange={handleInput}
                      />
                    </div>

                    <div className="col-12 col-sm-5">
                      <label className="p2" for="exampleFormControlInput1">
                        Apellido paterno
                      </label>
                      <input
                        type="text"
                        className="form-control inputform"
                        name="ap"
                        onChange={handleInput}
                      />
                    </div>

                    <div className="col-12 col-sm-5">
                      <label className="p2" for="exampleFormControlInput1">
                        Apelido materno
                      </label>
                      <input
                        type="text"
                        className="form-control inputform"
                        name="am"
                        onChange={handleInput}
                      />
                    </div>

                    <div className="col-12 col-sm-5">
                      <label className="p2" for="exampleFormControlInput1">
                        Correo Electr&oacute;nico
                      </label>
                      <input
                        type="text"
                        className="form-control inputform"
                        name="email"
                        onChange={handleInput}
                      />
                    </div>

                    <div className="col-sm-5">
                      <label className="p2" for="exampleFormControlInput1">
                        {" "}
                        Celular
                      </label>
                      <input
                        type="text"
                        className="form-control inputform"
                        name="celular"
                        onChange={handleInput}
                      />
                    </div>
                    <div className="col-sm-12">
                      <div className="mb-1">
                        <label for="" className="form-label p2">
                          ¿Como supiste de nostros?
                        </label>
                        <textarea
                          className="form-control inputform"
                          name="referencia"
                          onChange={handleInput}
                          rows="3"
                        ></textarea>
                      </div>
                    </div>

             
                  </div>
                  <button className="btn bt1">ENVIAR MIS DATOS</button>
                </form>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="texto">
                <h2 className="h22">Envíanos un correo:  </h2>
                <h2 className="p23w">talento@inmobicapital.com</h2>
              </div>
            </div>
          


          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JoinUs;
