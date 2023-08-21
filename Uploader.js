import React, { useState } from 'react';
import axios from 'axios';

const Uploader = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
      console.log(formData)
    });

    axios.post('http://localhost:5000/upload', formData)
      .then(response => {
        console.log(response.data); // Respuesta del backend
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
<input type="file" name="images" multiple onChange={handleImageChange} />

      <button type="submit">Subir imágenes</button>
    </form>
  );
};

export default Uploader;
