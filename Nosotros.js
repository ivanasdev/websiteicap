import React, { useState,useEffect } from "react";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Img1 from '../assets/img/edif.jpeg'
import Img2 from '../assets/img/e3.jpeg'

import "../App.css";

const Nosotros = () => {

  const texts = ['Honestidad', 'Eficiencia', 'Honestidad', 'Transparencia', 'Conocimiento'];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);




  const [currentImage, setCurrentImage] = useState(0);
  const [imageList, setImageList] = useState([
    <img src={Img1} className="imgus img-fluid" />,
    <img src={Img2} className="imgus img-fluid" />

  ]);
  return (
    <div className="container-fluid">

      <NavBar />

      <div className="container ">
      <div className="row">

        <div className="col-sm-12">
       
            <h2 className="h22">¿ QUIENES SOMOS ?</h2>
            <div className="row">
           
            <div className="col-sm-6">
            <div className="card-content uscard">
            <p className="card-text ">
                Somos una empresa mexicana enfocada en compartir los beneficios
                de invertir en el sector inmobiliario con todos nuestros
                inversionistas.
              </p>
              <p className="card-text ">
                Gracias a nuestra experiencia en &eacute;l sector inmobiliario, podemos
                brindar además de solidez, una tasa de interés competitiva y
                superior a la referencia de mercado.
              </p>
              <p className="card-text ">
                Todas nuestras asesorías son personalizadas, enfocadas al
                cumplimiento de necesidades y objetivos.
              </p>
              </div>
            </div>
      
            <div className="col-md-6">
      {typeof imageList[currentImage] === 'string' ? (
        <img
          src={imageList[currentImage]}
          className="imgus"
          alt={`Image ${currentImage + 1}`}
        />
      ) : (
        imageList[currentImage]
      )}
    </div>
            </div>

         
          </div>
       </div>
        </div>
       



       
        <Footer/>
    </div>
  

    
  );
};

export default Nosotros;
