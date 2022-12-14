import { useState, useEffect } from "react";
import "./index.css";
// import { Video } from "./components/Video";
import { AsideBar } from "./components/AsideBar";
import { Video } from "./components/Video";
import { Descripcion } from "./components/Descripcion";

function App() {
  const [loading, setLoading] = useState(true);
  const [infoVideo, setInfoVideo] = useState(null)
  useEffect(() => {
    const API_URL = "https://apitk.crisvega.dev/api/videos";
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setInfoVideo(data);
        setLoading(false);
      });
  }, []);



  return (
    <>

      {!loading && (<>
      
        <Video infoVideo={infoVideo}>
          <AsideBar infoVideo={infoVideo}/>
          <Descripcion infoVideo={infoVideo}/>
        </Video>
      
      </>
      )}
    </>
  );
}

export default App;
