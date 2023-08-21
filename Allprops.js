import React, { useState, useEffect } from "react";
//import "./Home.css";
import { Link } from "react-router-dom";
//import { toast } from "react-toastify";
import axios from "axios";
import NavBarP from "../components/NavBarProp";
import Footer from "../components/Footer";

import rooms from "../assets/icons/rooms.png";
import cars from "../assets/icons/cochera.png";
import banos from "../assets/icons/banos.png";
import mts2 from "../assets/icons/mt2.png";
import { useNavigate } from "react-router-dom";

const Allprops = () => {
  const [data, setData] = useState([]);


  const URIP = "https://inmobicapital.com:9589/ws?"

  const navigate = useNavigate();


  //Trae informacion de la imagenes

  const loadData = async () => {
    const response = await axios.get("https://inmobicapital.com:9589/ws/?getprops");
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div classNameName="container-fluid ">
      <NavBarP />

      <div className="row ">
        {data.map((item) => {
          //const itempic = imagen.find((imagen));
          for (let i = 0; item; i++) {
            const id = item.id_Propiedad;
            const stfolio = item.st_Folio;
            let cantidad = item.i_Precio;
            const nombrer = item.st_NombrePropiedad;
            const ubic=item.st_Ubicacion
            let numeroprecio = cantidad.toString();
            const descripcion=item.st_Descripcion
            //const rutaurl="http://45.80.153.150:5002/uploads/"+stfolio+"/"+nombrer+"_1.JPG"
            //setUrlimg(rutaurl)
            const URI = "http://45.80.153.150:5002/uploads/";
            const imagen1 = URI + "/" + stfolio + "/" + nombrer + "_1.JPG";
            const imagen2 = URI + "/" + stfolio + "/" + nombrer + "_2.JPG";

            const imagen3 = URI + "/" + stfolio + "/" + nombrer + "_3.JPG";
            const imagen4 = URI + "/" + stfolio + "/" + nombrer + "_4.JPG";

            console.log(numeroprecio.length);
            const gotodetails = () => {
              navigate(`/detail?folio=${stfolio}&id=${id}&nombre=${nombrer}&descip=${descripcion}&ubic=${ubic}`);
            };

            if (numeroprecio.length > 6) {
              numeroprecio =
                numeroprecio.slice(0, 1) + "," + numeroprecio.slice(1);
              console.log(numeroprecio);
            } else {
              console.log(cantidad);
            }

            return (
              <div className="col-sm-4">
                <div className="cardprops">
                  <div class="image-container">
                    <div
                      id="carouselExampleInterval"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-interval="1000"
                        >
                          <img
                            src={imagen1}
                            onClick={gotodetails}
                            className="img-fluid imcarousel"
                          />
                        </div>
                        <div className="carousel-item" data-interval="1000">
                          <img
                            src={imagen2}
                            className="img-fluid imcarousel "
                          />
                        </div>
                        <div className="carousel-item" data-interval="1000">
                          <img src={imagen3} className="img-fluid imcarousel" />
                        </div>
                        <div className="carousel-item" data-interval="1000">
                          <img src={imagen4} className="img-fluid imcarousel" />
                        </div>
                      </div>
                    </div>

               
                  </div>

                  <div className="photoprop">
                    <h2 className=" h2propsnombre">
                      {item.st_NombrePropiedad}
                    </h2>
                    <h6 className=" h5propsnombre">{item.st_Ubicacion}</h6>

                    <p className=" h5propsnombre">
                      <img src={rooms} className="iconrooms" />{" "}
                      {item.i_Habitaciones}
                      <img src={banos} className="iconrooms" />{" "}
                      {item.i_Sanitarios}
                      <img src={cars} className="iconrooms" />{" "}
                      {item.i_Estacionamientos}
                      <img src={mts2} className="iconrooms" />{" "}
                      {item.st_Superficie} m<sup>2</sup>
                    </p>
                  </div>

                  <p className="card-content h5propsnombre">MN {numeroprecio}</p>
                 

                </div>
              </div>
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Allprops;
