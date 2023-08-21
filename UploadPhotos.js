import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const ImageUploader = () => {
  const navigate = useNavigate();

  const gotoadmin = () => {
    navigate(`/uploadcontent`);
  };

  const URI = "http://45.80.153.150/phpback/?";

  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const nombre = params.nombre;
  const folio = params.folio;
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);
  //console.log(folio);
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  
    const images = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(images);
  
    // Verificar si se ha cargado una foto
    setIsPhotoLoaded(files.length > 0);
  };

  const handleUpload = () => {

    if (!isPhotoLoaded) {
     alert("No hay fotos que mostrar")
    }
    else{
  
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("images", file);
      formData.append("nombre", nombre);
      formData.append("folio", folio);
    });
    

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    fetch(`${URI}subirfotos`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Aquí puedes manejar la respuesta del servidor
        console.log(response);
        gotoadmin();
  
      })
      .catch((error) => {
        // Aquí puedes manejar los errores
        console.error(error);
      });

    }
    
  };

  return (
    <div className="container-fluid">
      <div className="card1">
        <div className="col-sm-12">
          <h5 className="card-title text-black admintext">Administrador de contenidos</h5>

          <div className="container">
            <div className="col-12 col-md-12">
              <div>
                <input type="file" className="upbtnfiles" multiple onChange={handleFileChange} />
                <div className="col-12 col-md-12">
                  <button className="btn btn122" onClick={handleUpload}>
                    Subir imágenes
                  </button>
                </div>
              </div>
              <div className="card1 row">
           
                {previewImages.map((image, index) => (
   
               <div className="">
                           
                  <img
                    key={index}
                    src={image}
                    alt={`Preview ${index}`}
                    className="imgsend"
                  />
               </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
