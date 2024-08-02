import React from 'react'
import { useState, useEffect } from "react";


const FundamentalsOfApi = () => {

    const [data,setData]=useState(null);
    const [error,setError]= useState(null)
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
       fetch("https://dummyjson.com/products")
       .then((response)=>{
        if(!response.ok){
            throw new error("Network Problem")
        }
        return response.json();
       })

       .then((data)=>{
        setData(data.products.slice(0,10));
        setLoading(false);
       })
       .catch((error)=>{
        setError(error);
        setLoading(false);
       })
    },[])


    if(loading){
        return <div> Loading..... </div>
    }
    if(error){
        return <div>Error: {Error.message}</div>
    }

  return (
    <div>
        <h1>Fetched Data from dummy API</h1>
        <br />
        <ol type='A'>
        {data.map((item)=>(
            <li key={item.id}>
                <div>
                    <h2><b>{item.id}.  Item Title:</b> {item.title}</h2>
                    <h3><b>Item Category:</b> {item.category}</h3>
                    <h4><b>Item Tags: </b>{item.tags}</h4>
                    <p><b>About Item: </b>{item.description}</p>
                </div>
                <br /> <hr />
            </li>
        ))}
        </ol>



    </div>
    
  )
}

export default FundamentalsOfApi