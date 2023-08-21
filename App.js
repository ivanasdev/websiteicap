import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './screens/Home';
import Inversion from './screens/Inversion';
import JoinUs from './screens/JoinUs';
import Nosotros from './screens/Nosotros';
import SimuladorInversion from './screens/Simulador';
import Contact from './screens/Contacto';
import Allprops from './screens/Allprops';
import Vendemos from './screens/Vendemos';

import PropDetails from './screens/PropDetails';
import LoginAdmin from './screens/LoginAdmin';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <div className="container-fluid">
        

  <Routes>
    <Route exact path="/" Component={Home}/>
    <Route path='/inversion' Component={Inversion} />
    <Route path='/unete' Component={JoinUs} />
    <Route path='/nosotros' Component={Nosotros} />
    <Route path='/simulador' Component={SimuladorInversion} />
    <Route path='/contacto' Component={Contact} />
    <Route path='/nuestraspropiedades' Component={Allprops} />    
    <Route path='/vendemostuinmueble' Component={Vendemos} />
    <Route path='/detail' Component={PropDetails} />





  </Routes>


      </div>
    </div>

    </BrowserRouter>
  );
}

export default App;
