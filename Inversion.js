import React, { useState } from "react";
import Img1 from "../assets/img/e2.jpeg";
import { Link } from "react-router-dom";
import "../App.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import stats from "../assets/icons/stats.png";
import adqui from "../assets/icons/adqui.png";
import regu from "../assets/icons/contrato.png";
import build from "../assets/icons/build.png";
import retur from "../assets/icons/monyreturn.png";

import video from "../assets/video/video.mp4";
const Inversion = () => {
  const [message, setMessage] = useState(" ");

  const m1 = () => {
    return setMessage(
      <div className="mensaje">
        ¡Haz crecer tu patrimonio! Invierte con respaldo inmobiliario
        <div className="mensaje">
          <Link to="/simulador">
            <button href="#" className="btn btsimula">
              SIMULADOR
            </button>
          </Link>
        </div>
      </div>
    );
  };

  const m2 = () => {
    return setMessage(
      <div className="mensaje">
        Brindamos a nuestros inversionistas&nbsp;
        <strong>grandes beneficios </strong>con las mejores tasas del mercado
      </div>
    );
  };

  const m3 = () => {
    return setMessage(
      <div className="mensaje">
        Adquirimos el mejor portafolio inmobiliario
        <Link to="/">
          <a>
            <p className="h22">Ver portafolio</p>
          </a>
        </Link>
      </div>
    );
  };

  const m4 = () => {
    return setMessage(
      <div className="mensaje">
        <p>
          {" "}
          Nos encargamos de
          <strong> regularizar, remodelar y vender</strong>
          &nbsp;las propiedades adquiridas.
        </p>
      </div>
    );
  };

  const m5 = () => {
    return setMessage(
      <div className="mensaje">
        <p className="card-text">
          Una vez que se capta el recurso nuestro grupo de expertos financieros
          inmobiliarios se encargan de{" "}
        </p>
        <p className="p23w">
          seleccionar las mejores oportunidades de inversión inmobiliaria
        </p>
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      <div className="container-fluid cf">
        <div className="row card ">
          <div className="col-12 col-md-12">
            <h2 className="h22"> INVERSI&Oacute;N INMOBILIARIA </h2>
            <p className="cursiva">invirtiendo con respaldo inmobiliario</p>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6">
                <div classNameName="nuestrag1">
                  <div className="nuestragarantia">
                    <h3 className="titleinvest">Nuestra Garantia</h3>
                    <p className="card-text">
                      Cuidar el patrimonio de nuestros clientes y de su familia,
                      es decir, bienes inmuebles, ofreciendo garantías reales y
                      tangibles.
                      <br />
                      Estamos comprometidos en acompañar a nuestros clientes en
                      el cumplimiento de sus proyectos y objetivos, por eso
                      ofrecemos contribuir con la mejor oferta del sector
                      inmobiliario.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <h2 className=" h22 ">CARACTERISTICAS DE INVERISI&Oacute;N</h2>
              <div className="col-12 col-md-4">
                <div className="iver">
                  <p className="garant">LIQUIDEZ</p>
                  <p className="card-text">
                    Nuestro portafolio de propiedades a nivel nacional combinado
                    con la naturaleza de nuestro ciclo productivo permite a
                    nuestra empresa tener liquidez en caso de presentarse una
                    oportunidad o emergencia.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="iver">
                  <p className="garant">CRECIMIENTO CONSTANTE</p>
                  <p className="card-text">
                    Nuestro modelo de negocio ofrece un equilibrio productivo
                    gracias a nuestra experiencia en el proceso de
                    capitalización, integración de bienes inmuebles a nuestro
                    portafolio y colocación en el mercado de los mismos.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="iver">
                  <p className="garant">SEGURIDAD</p>
                  <p className="card-text">
                    La inversión de nuestros clientes está respaldada por una
                    cartera de más de 3,000 inmuebles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <h2 className="h22">MODELO DE NEGOCIO</h2>
            <div className="row">
              <div className="col-12 col-sm-12 modelo">
                <div className="card-body">
                  <p className="card-text">
                    Nuestro modelo de negocio tiene la finalidad de brindar
                    acceso a nuestros clientes a los beneficios que ofrece el
                    sector inmobiliario.
                    <br />
                    En INMOBICAPITAL, el cliente es nuestra prioridad, por eso
                    estamos comprometidos en todo momento para brindar
                    transparencia, confianza y la mejor oferta del mercado
                    inmobiliario.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid botonesluz">
          <h3 className="titleinvest">CICLO PRODUCTIVO</h3>
            <div className="button-line row">
              <button className="btnciclo col-6" onClick={m1}>
                <p>Inversión</p>
                <img src={stats} className="iconinvest" />
              </button>

              <button className="btnciclo col-6" onClick={m5}>
                <p>Adquisición de propiedades</p>
                <img src={adqui} className="iconinvest" />
              </button>

              <button className="btnciclo col-6" onClick={m4}>
                <p>Regularización</p>
                <img src={regu} className="iconinvest" />
              </button>

              <button className="btnciclo col-6" onClick={m3}>
                <p>Colocación de la propiedad</p>
                <img src={build} className="iconinvest" />
              </button>

              <button className="btnciclo col-6" onClick={m2}>
                <p>Retorno del capital</p>
                <img src={retur} className="iconinvest" />
              </button>
            </div>

            <div className="mensaje">
              <div className="col-12 col-md-12">{message}</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Inversion;
