import React from "react";
import "./productos.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "../Cards/Cards";
import Buttonpagar from "../formpagar/Buttonpagar";
import Buttonvolver from "./Buttonvolver";
import Carrito from "../carrito/Carrito";


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>Productos)
function Productos () {
    return(  
<div className="mainProductos">
<Carrito/>
<Cards/>

<Buttonpagar />

<Buttonvolver />
</div>
    )
}

export default Productos;