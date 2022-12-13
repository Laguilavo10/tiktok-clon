import React from "react";
import "../../styles/descripcion.css";
import {FaMusic} from 'react-icons/fa'

export function Descripcion() {
  return (
    <>
      <div className="descripcion-container">
        <h4>@random</h4>
        <p>texto random</p>
        <div className="sonido-container">
          <div><FaMusic></FaMusic></div>
          <p>Musica que nose por quesssssssssssssssssssssssssssssssssssssss</p>
        </div>
      </div>
    </>
  );
}
