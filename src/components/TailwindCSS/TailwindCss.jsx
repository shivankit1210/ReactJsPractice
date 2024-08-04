import React from "react";
import { useNavigate } from "react-router-dom";

const TailwindCss = () => {

  const navigate =useNavigate();
  return (

    <div className=" flex-row bg-cyan-600 h-screen  place-content-center  ">

      <div className="flex flex-col m-20 p-10 gap-10 place-content-center"> 
      <button className="text-white   " onClick={()=>navigate("/cards-using-tailwind")}>click here To view Card Create using Tailwind</button>
      <button className="text-white   " onClick={()=>navigate("/cards-using-tailwind")}>State function in Tailwind CSS</button>
      {/* <button className="text-white   " onClick={()=>navigate("/cards-using-tailwind")}>click here To view Card Create using Tailwind</button>
      <button className="text-white   " onClick={()=>navigate("/cards-using-tailwind")}>click here To view Card Create using Tailwind</button>
      <button className="text-white   " onClick={()=>navigate("/cards-using-tailwind")}>click here To view Card Create using Tailwind</button> */}

      </div>
     

    </div>
  );
};

export default TailwindCss;
