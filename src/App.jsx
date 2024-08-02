import "./App.css";
import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StopWatch from "./components/StopWatch";
import FetchAPI from "./components/FetchAPI/FetchAPI";
import FundamentalsOfApi from "./components/FetchAPI/FundamentalsOfApi";
import FetchImages from "./components/FetchAPI/FetchImages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stopwatch" element={<StopWatch/>} />
      <Route path="fetch-api" element={<FetchAPI/>} />
      <Route path="Fundamentals-of-api" element={<FundamentalsOfApi/>} />
      <Route path="fetching-images" element={<FetchImages/>} />
    </Routes>
  );
}

export default App;
