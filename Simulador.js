import React, { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const SimuladorInversion = () => {
  const [simdatos, setSimDatos] = useState({
    monto: "",
    plazo: "",
  });


  const url = 'https://inmobicapital.com:9589/test/rendimiento';
  const params = {
    monto: 30000,
    plazo: 12
  };
  
  // Encabezado
  const headers = {
    key: '497eb7602213ecc9f64bd9630cd9e829'
  };

  axios.get(url, {
    params,
    headers
  })
  .then((response) => {
    console.log(response.data);
    // Aquí puedes procesar la respuesta recibida del endpoint
  })
  .catch((error) => {
    console.error(error);
    // Aquí puedes manejar los errores en caso de que ocurra alguno
  });



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(simdatos.monto + simdatos.plazo);
  };
  const HandleInput = (event) => {
    /*console.log(event.target.value);*/
    setSimDatos({
      ...simdatos,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container-fluid">
      <NavBar />

      <div className="container">
        <div className="row card">
          <div className="row">
            <div className="col">
              <div className="invest">
                <div className="card-body ">
                  <h5 className="card-title garant ">
                    Calcula tu inversi&oacute;n inmobiliaria
                  </h5>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col">
                        <label className="garant">Monto a invertir</label>
                        <input
                          onChange={HandleInput}
                          type="number"
                          className="form-control inputsim1"
                          placeholder="Ingrese un valor"
                          name="monto"
                        />
                      </div>
                      <div className="col">
                        <label className="garant">
                          Plazo de Inversi&oacute;n
                        </label>

                        <select
                          onChange={HandleInput}
                          className="form-select inputsim1 "
                          name="plazo"
                        >
                          <option>12 meses </option>
                          <option>24 meses</option>
                          <option>36 meses </option>
                          <option>48 meses </option>
                        </select>
                      </div>
                    </div>
          
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="investimg">
              <div className="card-body">
                <h5 className="card-title garant ">Tu inversi&oacute;n</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SimuladorInversion;
