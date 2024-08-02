import React from "react";

import { useNavigate } from "react-router-dom";

const FetchAPI =()=>{

const navigate= useNavigate();




  return (
    <div>
      <h1><b>FETCHING API PAGE</b></h1>
      <button onClick={()=>navigate("/Fundamentals-of-api")}>Fundamentals of API</button>
      <button onClick={()=>navigate("/fetching-images-without-id")}>Fetching Images(without putting ID)</button>
      <button onClick={()=>navigate("/fetching-images-with-id")}>Fetching Images(with ID)</button>

     
    </div>
  );
};

export default FetchAPI;










