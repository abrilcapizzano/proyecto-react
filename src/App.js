import './App.js';
import Footer from './componentes/footer/Footer.jsx';
import Intro from './componentes/intro/Intro.jsx';
import Productos from "./componentes/productos/Productos.jsx"
import {Route, Routes} from "react-router-dom"
import Formpagar from './componentes/formpagar/Formpagar.jsx';





function App() {
  return (
    <div className="App">
 <Routes>
<Route path='/' element={<Intro/>}/>
<Route path='/productos' element={<Productos/>}/>
<Route path='/pagar' element={ <Formpagar/>} />
 </Routes>

      <Footer />

    </div>
  );
}


export default App;
