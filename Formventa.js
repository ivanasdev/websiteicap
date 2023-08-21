import React, { useState, useEffect } from "react";

import axios from "axios";

const initailstate = {
  nombre: "",
  email: "",
  telefono: "",
  tipo: "",
  estado: "",
  calle: "",
  exterior: "",
  interior: "",
  cpostal: "",
  colonia: "",
  municipio: "",
};

const Formventa1 = () => {
  const [state, setState] = useState(initailstate);
  const {
    nombre,
    email,
    telefono,
    tipo,
    estado,
    calle,
    exterior,
    interior,
    cpostal,
    colonia,
    municipio,
  } = state;
  const [data, setData] = useState([]);
  const refresh = () => window.location.reload(true);

  const LoadCatalogo = async () => {
    const response = await axios.get(
      "http://localhost:8888/index.php?catestados"
    );
    setData(response.data);
    console.log(response.data)
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !nombre ||
      !email ||
      !telefono ||
      !tipo ||
      !estado ||
      !calle ||
      !exterior ||
      !interior ||
      !cpostal ||
      !colonia ||
      !municipio
    ) {
      alert("Por favor llene todos los campos");
    } else {
      axios
        .post("https://inmobicapital.com:9589/ws/?vendemos1", {
          nombre,
          email,
          telefono,
          tipo,
          estado,
          calle,
          exterior,
          interior,
          cpostal,
          colonia,
          municipio,
        })
        .then(() => {
          setState({
            nombre: "",
            email: "",
            telefono: "",
            tipo: "",
            estado: "",
            calle: "",
            exterior: "",
            interior: "",
            cpostal: "",
            colonia: "",
            municipio: "",
          });
        })
        .catch((err) => alert("Llenar todos los campos"));

      alert("Se han enviado tus datos, en breve te contactaremos");
      refresh();
    }
  };


  useEffect(() => {
    LoadCatalogo();
  }, []);

  return (
    <div className="container-fluid card1">
      <div className="row ">
        <form onSubmit={handleSubmit} className="row">
          <div className="col-12 col-md-4">
            <label className="label1">Nombre:</label>
            <br />
            <input
              type="text"
              className="inputformvendemos"
              name="nombre"
              onChange={handleInput}
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="label1">Correo electrónico:</label>
            <input
              type="text"
              className="inputformvendemos"
              name="email"
              onChange={handleInput}
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="label1">Teléfono de contacto:</label>
            <input
              type="text"
              className="inputformvendemos"
              name="telefono"
              onChange={handleInput}
            />
          </div>

          <div className="col-12">
            <label className="label1">¿Eres?</label>
            <select
              name="tipo"
              className="form-select"
              aria-label="Default select example"
              onChange={handleInput}
            >
              <option selected>Seleccione:</option>
              <option value="propietario">Propietario</option>
              <option value="agente">Agente inmobiliario</option>
            </select>
          </div>

          <h4 className="col-12">Datos de la propiedad</h4>

          <div className="col-12 col-md-4">
            <label className="label1">Estado:</label>
            <select
              name="estado"
              className="form-select"
              aria-label="Default select example"
              onChange={handleInput}
            >
              <option selected>Seleccione un estado</option>
              {data.map((item, index) => {
                for (let i = 0; item; i++) {
                  return (
                    <option value={item.id_Estado}>{item.st_Nombre}</option>
                  );
                }
              })}
            </select>
          </div>

          <div className="col-12 col-md-4">
            <label className="label1">Calle:</label>
            <input
              type="text"
              className="inputformvendemos"
              name="calle"
              onChange={handleInput}
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="label1">Exterior:</label>
            <input
              type="text"
              className="inputformvendemos"
              name="exterior"
              onChange={handleInput}
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="label1">Interior:</label>
            <input
              type="text"
              className="inputformvendemos"
              name="interior"
              onChange={handleInput}
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="label1">Código Postal:</label>
            <input
              type="text"
              className="inputformvendemos"
              name="cpostal"
              onChange={handleInput}
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="label1">Colonia:</label>
            <input
              type="text"
              className="inputformvendemos"
              name="colonia"
              onChange={handleInput}
            />
          </div>

          <div className="col-12 col-md-4">
            <label className="label1">Alcaldía o municipio:</label>
            <input
              type="text"
              className="inputformvendemos"
              name="municipio"
              onChange={handleInput}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn1">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formventa1;
