import React from "react";
import '../../styles/marco.css'
import marco from "../../assets/marcocelular.png";


export function Marco({children}) {
  return (
    <main className="video-container">
      <img src={marco} alt="" />
      <div className="video-content">
        {/* <img
          src="https://imagen.research.google/main_gallery_images/a-brain-riding-a-rocketship.jpg"
          alt=""
        /> */}
        {children}
      </div>
    </main>
  );
}
