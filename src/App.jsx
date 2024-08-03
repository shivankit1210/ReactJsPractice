import "./App.css";
import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StopWatch from "./components/StopWatch";
import FetchAPI from "./components/FetchAPI/FetchAPI";
import FundamentalsOfApi from "./components/FetchAPI/FundamentalsOfApi";
import FetchImages from "./components/FetchAPI/FetchImages";
import FetchImagesWithId from "./components/FetchAPI/FetchImagesWithId";
import AxiosAPI from "./components/FetchAPI/AxiosAPI";
import TailwindCss from "./components/TailwindCSS/TailwindCss";
import Cards from "./components/TailwindCSS/Cards"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stopwatch" element={<StopWatch/>} />
      <Route path="fetch-api" element={<FetchAPI/>} />
      <Route path="Fundamentals-of-api" element={<FundamentalsOfApi/>} />
      <Route path="fetching-images-without-id" element={<FetchImages/>} />
      <Route path="fetching-images-with-id" element={<FetchImagesWithId/>} />
      <Route path="get-api-data-using-axios" element={<AxiosAPI/>}/>
      <Route path="tailwind-css"  element={<TailwindCss/>}/>
      <Route path="/cards-using-tailwind" element={<Cards/>}/>
    </Routes>
  );
}

export default App;
