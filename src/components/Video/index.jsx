import { useRef, useState  } from "react";
import "../../styles/video.css";
import marco from "../../assets/marcocelular.png";
import { FaPlay } from "react-icons/fa";

export function Video({ children, infoVideo }) {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true)

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false)
    } else {
      videoRef.current.pause();
      setIsPaused(true)
    }
  };

  return (
    <main className="video-container">
      <img src={marco} alt="" />
      <div className="video-content">
        <video
          ref={videoRef}
          loop
          autoPlay={true}
          src={infoVideo.data[0].url}
        ></video>
        <button className={`btn-play`} onClick={toggleVideo}>
          <FaPlay className={!isPaused && 'invisible'}></FaPlay>
        </button>
        {children}
      </div>
    </main>
  );
}
