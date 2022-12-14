import React from "react";
import "../../styles/descripcion.css";
import {FaMusic} from 'react-icons/fa'

export function Descripcion({infoVideo}) {
  let video = infoVideo

  return (
    <>
      <div className="descripcion-container">
        <h4>@{video.author.username}</h4>
        <p>{video.description}</p>
        <div className="sonido-container">
          <div><FaMusic></FaMusic></div>
          <p>{video.song.name}</p>
        </div>
      </div>
    </>
  );
}
