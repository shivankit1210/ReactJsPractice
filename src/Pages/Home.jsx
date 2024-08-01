import React from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {

    const navigate = useNavigate();
  return (
    <div> 
  <button onClick={()=> navigate("/stopwatch")}>StopWatch</button>
  <button onClick={()=> navigate("fetch-api")} >Fetch API</button>
    </div>
  )
}

export default Home