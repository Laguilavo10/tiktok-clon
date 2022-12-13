import React from "react";
import '../../styles/marco.css'
import marco from "../../assets/marcocelular.png";


export function Marco({children}) {
  return (
    <main className="video-container">
      <img src={marco} alt="" />
      <div className="video-content">
        {children}
      </div>
    </main>
  );
}
