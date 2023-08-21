import React from "react";
import video from "../assets/video/video.mp4";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  const message = () => {
    alert("Estamos trabajando en este modulo");
  };
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />

      <div className="content">
        <Link to="inversion">
          <button className="btn botonhome">
            <p className="titlehometxt">INVERSI&Oacute;N </p>
            <br />
          </button>
        </Link>
        <Link to="nuestraspropiedades">
          <button className="btn botonhome">
            <p className="titlehometxt">
              PROPIEDADES
              <br />
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
