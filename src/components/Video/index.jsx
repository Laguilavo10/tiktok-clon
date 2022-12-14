import { useRef, useState, useEffect } from "react";
import "../../styles/video.css";
import marco from "../../assets/marcocelular.png";
import { FaPlay, FaAngleDoubleDown } from "react-icons/fa";

export function Video({ children, infoVideo, indexVideo, setIndexVideo }) {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  const toggleVideo = () => {
    debugger;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const cambiarVideo = () => {
    if (indexVideo === 4) {
      setIndexVideo(0);
    } else {
      setIndexVideo((prev) => prev + 1);
    }
    setIsPaused(false);
  };

  return (
    <main className="video-container">
      <img src={marco} alt="" />
      <div className="video-content">
        <video ref={videoRef} loop autoPlay={true} src={infoVideo.url}></video>
        <button className="btn-deslizar" onClick={cambiarVideo}>
          <FaAngleDoubleDown></FaAngleDoubleDown>
        </button>
        <button className={`btn-play`} onClick={toggleVideo}>
          <FaPlay className={!isPaused && "invisible"}></FaPlay>
        </button>
        {children}
      </div>
    </main>
  );
}
