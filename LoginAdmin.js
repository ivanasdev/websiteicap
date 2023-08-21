import React, { useState } from "react";
//import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
//import logo from '../assets/img/icapicon.png'
import { useNavigate } from "react-router-dom";
//import md5 from "md5";
const initialState={
    email:"",
    password:""
};

const LoginAdmin=()=>{
   
    const [state,setState]=useState({initialState})
    const navigate = useNavigate();
    const {email,password}=state

    
        
  

    
    const HandleInput = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
      };
    const HandleSubmit=(e)=>{
        e.preventDefault();
        if(!email || !password){
           alert("Por favor llene todos los campos");
        }
        else
        {
            axios
            .post("http://45.80.153.150/phpback/?loginadmin",{
                email,
                password 
            })
            .then(response=>{
                console.log(response)
                console.log(email,password)
                console.log(response.data.length )
                if(response.data.length == 0 ){
                    console.log("Error de user")
                alert("Usuario o clave invalida");
                }
                else{
                    setState({
                        email:"",
                        password:""

                      })
                      setTimeout(() => navigate("/uploadcontent"), 500);
                      alert("Se inicio con exito");
                      
                    console.log("Usuario logeado")
                }
              
            })
          

    
         
            
        
        
            
            

        }



    }





    return(

        
    <div className="container-fluid">
    <div className="card1">

      
<div className="row">
<div className="col-sm-12">
  <div className="invest">
    <div className="card-body ">
      <h5 className="card-title garant ">Iniciar sesi&oacute;n para subir contenido</h5>
      
      <form onSubmit={HandleSubmit}>
      <div className="mb-3">
        <label  className="form-label">Email</label>
        <input 
        type="text" 
        name="email" 
        value={email}
        onChange={HandleInput}
        className="form-control inputform"
         placeholder="" 
         aria-describedby="helpId" />
   
      </div>
      <div className="mb-3">
        <label  className="form-label">Clave de acceso</label>
        <input
         type="password"
          className="form-control inputform"
           name="password" 
           value={password}
           onChange={HandleInput}
           
           placeholder="" />
      </div>
      
      <button className="btn bt11" type="submit">Iniciar Sesi&oacute;n</button>


      </form>





      
    </div>
  </div>
</div>

</div>
  
</div>

  </div>



    )
}

export default LoginAdmin