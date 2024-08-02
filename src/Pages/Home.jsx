import React from 'react'
import {useNavigate} from "react-router-dom"
import "./home.css"

const Home = () => {

    const navigate = useNavigate();
  return (
    <div className='home'> 
      <h1><i>Concept which i learned is shown below</i></h1>
      <div className='home-container'>
      <button onClick={()=> navigate("/stopwatch")}>StopWatch</button>
      <button onClick={()=> navigate("/stopwatch")}>Calculator</button>
      <button onClick={()=> navigate("fetch-api")} >Fetch API</button>
      <button onClick={()=> navigate("/get-api-data-using-axios")} >get API  data Using Axios</button>
      <button onClick={()=> navigate("fetch-api")} >Hooks</button>
      <button onClick={()=> navigate("fetch-api")} >Redux</button>
      <button onClick={()=> navigate("fetch-api")} >useMemo</button>
      <button onClick={()=> navigate("fetch-api")} >useContext</button>
      <button onClick={()=> navigate("fetch-api")} >useCallback</button>
      </div>

    </div>
  )
}

export default Home