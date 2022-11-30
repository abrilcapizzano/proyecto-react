import React from "react";
import "./footer.css"
import utn from "./utn.jpg"
const Footer = () => {
    return (
     <footer className="footer">
        <img src={utn} alt="icon-utn" width="60px"></img>
        <p className="tituloFooter">Proyecto Final UTN</p>
        <p>Todos los derechos de autor reservados</p>
        <p>Abril Capizzano</p>
     </footer>
    )
}


export default Footer;