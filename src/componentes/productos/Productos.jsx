import React from "react";
import "./productos.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "../Cards/Cards";
import Buttonpagar from "../formpagar/Buttonpagar";
import Buttonvolver from "./Buttonvolver";
import Carrito from "../carrito/Carrito";


function Productos () {
    return(  
<>
<Carrito/>
<div className="mainProductos">
<Cards />
</div>

<Buttonpagar />
<Buttonvolver />
</>
    )
}

export default Productos;