import React from "react";
import CustomButton from "../button/CustomButton";
import "./intro.css";
import icon from "./logo1.png";
const Intro = ({ titulo }) => {
  return (
    <div className="contenedorImagen">
      <img src={icon} className="App-logo" alt="Foto intro" />
      <h1>{titulo} </h1>

      <CustomButton texto="Iniciar Sesión"></CustomButton>
      <CustomButton color="rgb(18, 68, 221)" texto="Crear Una Cuenta"></CustomButton>
    </div>
  );
};

export default Intro;
