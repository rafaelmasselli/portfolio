import "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core@4.2.0/dist/tf-core.min.js";
import "https://unpkg.com/@tensorflow/tfjs-backend-webgl@3.7.0/dist/tf-backend-webgl.min.js";
import "https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915/hands.min.js";
import "https://cdn.jsdelivr.net/npm/@tensorflow-models/hand-pose-detection@2.0.0/dist/hand-pose-detection.min.js";
import "https://cdn.jsdelivr.net/npm/fingerpose@0.1.0/dist/fingerpose.min.js";
// import "./gesture/factories/handGestureFactory";

import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";

import { Navbar } from "./components/shared/navbar";
import { Widget } from "./components/shared/widget";
import { useState } from "react";
import { transitionDarkModeCss } from "./util/transitionDarkModCss";
import { NotFound } from "./pages/notFound";

function App() {
  const [darkMod, setDarkMod] = useState(true);

  return (
    <div
      className={`${
        darkMod ? "bg-black-700" : "bg-white"
      }  ${transitionDarkModeCss}`}
    >
      <Navbar darkMod={darkMod} />
      <Routes>
        <Route path="/" element={<Home darkMod={darkMod} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound darkMod={darkMod} />} />
      </Routes>
      <Widget darkMod={darkMod} setDarkMod={setDarkMod} />
    </div>
  );
}

export default App;
