import React from "react";
import { useState, useEffect } from "react";

const FetchAPI = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network not OK");
        }
        return response.json();
      })

      .then((data) => {
        setData(data.products);
        console.log(data)
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if(loading){
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1><b>Fetched data</b></h1>

      <ul>
        {data.map((item) => (
            
          <li key={item.id}>
            <div>
                <h3> <b>Item Title: </b> {item.title}</h3>
                <h5> <b>Item category: </b> {item.category}</h5> 
                <span><b>Item Tags: </b>{item.tags}</span>
                <p><b>About Item: </b>{item.description}</p>
                <hr /> <br />

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAPI;
