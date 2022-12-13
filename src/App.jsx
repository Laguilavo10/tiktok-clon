import { useState } from "react";
import "./index.css";
// import { Video } from "./components/Video";
import { AsideBar } from "./components/AsideBar";
import { Marco } from "./components/Marco";
import { Descripcion } from "./components/Descripcion";

function App() {
  return (
    <>
      <Marco>
        <AsideBar />
        <Descripcion></Descripcion>
      </Marco>

      {/* <Video></Video> */}
    </>
  );
}

export default App;
