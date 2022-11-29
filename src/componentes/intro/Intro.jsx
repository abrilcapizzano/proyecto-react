import React from "react";
import ButtonIniciar from "../button/ButtonIniciar";
import ButtonCrear from "../button/ButtonCrear";
import "./intro.css";
import icon from "./logo-skate.png";
const Intro = ({ titulo }) => {
  return (
    <div>
      <h1>Skate Store</h1>
      <img src={icon} className="App-logo" alt="Foto intro" />
      <h1>{titulo} </h1>
      <ButtonIniciar className ='btnIniciar' texto="Iniciar Sesión"></ButtonIniciar>
      <ButtonCrear color="rgb(18, 68, 221)" texto="Crear Una Cuenta"></ButtonCrear>
    </div>
  );
};


export default Intro;
