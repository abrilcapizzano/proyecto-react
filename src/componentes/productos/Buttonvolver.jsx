import React from "react";
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom";

const Buttonvolver = () =>{
        return(
            <div>

                <Link to="/"><Button variant = "third">Volver Atrás</Button></Link>
                

            </div>
        )
    }
    
    export default Buttonvolver;