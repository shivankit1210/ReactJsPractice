import "./App.css";
import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StopWatch from "./components/StopWatch";
import FetchAPI from "./components/FetchAPI";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stopwatch" element={<StopWatch/>} />
      <Route path="fetch-api" element={<FetchAPI/>} />
    </Routes>
  );
}

export default App;
