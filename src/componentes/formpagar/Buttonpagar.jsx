import React from "react";
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom";

const Buttonpagar = () =>{
        return(
            <div>

                <Link to="/pagar"><Button variant = "secondary">Pagar</Button></Link>
                

            </div>
        )
    }
    
    export default Buttonpagar;