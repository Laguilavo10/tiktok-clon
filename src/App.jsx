import { useState, useEffect } from "react";
import "./index.css";
// import { Video } from "./components/Video";
import { AsideBar } from "./components/AsideBar";
import { Video } from "./components/Video";
import { Descripcion } from "./components/Descripcion";

function App() {
  const [loading, setLoading] = useState(true);
  const [infoVideo, setInfoVideo] = useState(null)
  const [indexVideo, setIndexVideo] = useState(0)


  useEffect(() => {
    const API_URL = "https://apitk.crisvega.dev/api/videos";
    fetch(API_URL)
      .then((res) => res.json())
      .then((info) => {
        setInfoVideo(info.data);

        setLoading(false);
      });
  }, []);
  return (
    <>

      {!loading && (<>
      
        <Video infoVideo={infoVideo[indexVideo]} indexVideo={indexVideo} setIndexVideo={setIndexVideo}>
          <AsideBar infoVideo={infoVideo[indexVideo]}/>
          <Descripcion infoVideo={infoVideo[indexVideo]}/>
        </Video>
      
      </>
      )}
    </>
  );
}

export default App;
