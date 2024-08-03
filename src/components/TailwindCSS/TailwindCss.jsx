import React from "react";
import { useNavigate } from "react-router-dom";

const TailwindCss = () => {

  const navigate =useNavigate();
  return (

    <div className=" bg-cyan-600 h-96  place-content-center  ">

      <div>
      <button className="text-white flex place-content-center  " onClick={()=>navigate("/cards-using-tailwind")}>click here</button>

      </div>
     

    </div>
  );
};

export default TailwindCss;
