import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBarP from "../components/NavBarProp";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import qs from "qs";
import logowhts from "../assets/icons/whatsapp.png";
import GetinfoProp from "./GetInfoProp";

const PropDetails = () => {
  const URI = "http://45.80.153.150:5002/uploads/";
  const [form1, setForm1] = useState("");

  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const folio = params.folio;
  const id = params.id;
  const nombre = params.nombre;
  const descripcion = params.descip;
  const ubicacion = params.ubic;

  const imagen1 = URI + "/" + folio + "/" + nombre + "_1.JPG";
  const imagen2 = URI + "/" + folio + "/" + nombre + "_2.JPG";

  const imagen3 = URI + "/" + folio + "/" + nombre + "_3.JPG";
  const getmoreinfo = () => {
    setForm1(<GetinfoProp nombre={nombre} />);
  };
  return (
    <div className="container-fluid">
      <NavBarP />

      <div className="row">
      <div className="col-12 col-md-6">
        <div className="row card111">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="2000">
              <img src={imagen1} className="img-fluid imcarouseldetail" />
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src={imagen2} className="img-fluid imcarouseldetail " />
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src={imagen3} className="img-fluid imcarouseldetail" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
  
      </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="carddetail">
            <p className="h22c">{nombre}</p>
            <p className="h22cc">{ubicacion}</p>
            <p className="h22cc">{descripcion}</p>

            <a
              title="Click para chatear"
              href={`https://api.whatsapp.com/send?phone=5630301540.&text=¡Hola!%20Me%20gustaría%20más%20información%20sobre%20la%20propiedad%20${nombre}.`}
              target="_blank"
              rel="noopener"
            >
              <img src={logowhts} className="img-fluid logowhts1" />
            </a>
            <br/>

            <button className="btn btn-success1" onClick={getmoreinfo}>
              CONTACTANOS
            </button>
            {form1}
          </div>
        </div>
      
      </div>

      <Footer />
    </div>

  );
};

export default PropDetails;
