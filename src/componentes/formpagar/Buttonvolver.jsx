import React from "react";
import "./form.css"
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom";

const Buttonvolver = () =>{
        return(
            <div>

                <Link to="/productos"><Button variant = "secondary">Volver Atrás</Button></Link>
                

            </div>
        )
    }
    
    export default Buttonvolver;