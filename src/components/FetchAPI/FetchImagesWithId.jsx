import React, { useState } from "react";

const FetchImagesWithId = () => {
  const [userid, setUserid] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const HandleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/photos/${userid}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
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
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Fetch Images With Id</h1>
      <form onSubmit={HandleSubmit}>
        <input
          type="number"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
          placeholder="ENTER USER ID"
        />
        <button type="submit">Show User data</button>
      </form>
      {data && (
        <div>
          <h1>
            <b>Id: </b>
            {data.id}
          </h1>
          <img src={data.thumbnailUrl} alt="" />
        </div>
      )}
    </div>
  );
};

export default FetchImagesWithId;
