import { useState } from "react";
import "./index.css";
// import { Video } from "./components/Video";
import { AsideBar } from "./components/AsideBar";
import { Video } from "./components/Video";
import { Descripcion } from "./components/Descripcion";

function App() {

  return (
    <>
      <Video>
        <AsideBar />
        <Descripcion></Descripcion>
      </Video>

      {/* <Video></Video> */}
    </>
  );
}

export default App;
