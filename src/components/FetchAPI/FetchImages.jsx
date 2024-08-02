import React, { useEffect, useState } from "react";

const FetchImages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Problem");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error : {error.message}</div>;
  }

  return (
    <div>
      <h1> Fetched images</h1>
      <ul>
        
        {data.map((item) => (
          <li key={item.id}>
            <hr /> <br />
            <div>
              <h3>
                <b>Title: {item.title}</b>
              </h3>
              <img src={item.thumbnailUrl} alt={item.title} srcset="" />
              <br />
              {/* <img src={item.url} alt={item.title} srcset="" /> */}
            </div>
          </li>
        ))}
        <br />
      </ul>
    </div>
  );
};

export default FetchImages;
