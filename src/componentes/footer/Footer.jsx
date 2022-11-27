import React from "react";
import "./footer.css"
import icon from "./react-1.svg"
const Footer = () => {
    return (
     <footer className="footer">
        <p className="tituloFooter">Ejemplo de app en React Native</p>
<img className="icon" src={icon} alt="icon-react" />
        <p>Todos los derechos de autor reservados</p>
        <p>Abril Capizzano</p>
     </footer>
    )
}


export default Footer;