import React, { useState } from "react";
import Formventa1 from "./Formventa";
import NavBarP from "../components/NavBarProp";
import Footer from "../components/Footer";
import img1 from "../assets/img/e3.jpeg"

import iconcomp from "../assets/icons/departamento.png" 

import iconcomp2 from "../assets/icons/casa-moderna.png" 


import iconcomp3 from "../assets/icons/condominio.png" 

import iconcomp4 from "../assets/icons/centro-comercial.png" 

import iconcomp5 from "../assets/icons/terreno.png" 






const Vendemos = () => {

  const [form1,setForm1]= useState("");
 

  return (
    <div className="container-fluid">

      <NavBarP />
      <div class="row card1">
        <div class="col-sm-12">
          <div className="compramos">
            <h2 className="h22">Vendenos tu propiedad</h2>
            <div className="container-fluid">
          <div className="card">
            <div class="row">
              
            <h2 className="ventapropstxt">Compramos:</h2>
              <div class="col-sm-1"></div>
              <div class="col-sm-2">
              <img src={iconcomp} className="iconscomp" />
                 
                <p className="lista1 ">
            
                  Departamentos
                </p>
              </div>
              <div class="col-sm-2">
              <img src={iconcomp2} className="iconscomp" />
                <p className="lista1 ">
   
                 
                 
                  Casas
                </p>
              </div>
              <div class="col-sm-2">
              <img src={iconcomp3} className="iconscomp" />
                <p className="lista1 ">
            
                 
                 
                  Condominios
                </p>
              </div>
              <div class="col-sm-2">
              <img src={iconcomp4} className="iconscomp" />
                <p className="lista1 ">
       
                 
                 
                  Centros comerciales
                </p>
              </div>
              <div class="col-sm-2">
              <img src={iconcomp5} className="iconscomp" />  
                <p className="lista1 ">

                 
                 
                  Terrenos
                </p>
              </div>
              <div class="col-sm-1"></div>
            </div>
          </div>
          
        </div>
        <h2 className="h22">Compramos propiedades irregulares: </h2>
            <p className="ventapropstxt ">
                 
            Uno de los aspectos que nos diferencia de otras empresas es que también compramos propiedades irregulares.<br/> Entendemos que existen situaciones en las que los propietarios pueden encontrarse con dificultades legales, financieras o estructurales relacionadas con sus propiedades. En lugar de preocuparte por los problemas, nos especializamos en brindarte soluciones.
               </p>
           
          </div>
        </div>

      

        <div class="row">
          <p className="Solicitaval">Solicita una valoraci&oacute;n</p>
    
          <div class="col-sm-12">
            
        

           <button className="btn btnform1 "
           onClick={ () => setForm1((<Formventa1 />))}>
                    Dejanos tus datos
            </button>
  
            {form1}

   

          </div>
    
     
        </div>
        <div class="col-sm-4"></div>

     
   
    </div>
    <Footer/>
    </div>
  );
};

export default Vendemos;
