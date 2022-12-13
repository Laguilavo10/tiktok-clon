import { useState } from "react";
import "./index.css";
// import { Video } from "./components/Video";
import { AsideBar } from "./components/AsideBar";
import { Marco } from "./components/Marco";

function App() {
  return (
    <>
      <Marco>
        <AsideBar />
      </Marco>

      {/* <Video></Video> */}
    </>
  );
}

export default App;
