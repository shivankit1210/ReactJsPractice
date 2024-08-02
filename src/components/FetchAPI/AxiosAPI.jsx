import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosAPI = () => {
  const [inputText, setInputText] = useState("");
  const [imgUrl, setImagUrl] = useState("");
  const [loading,setLoading]=useState(false);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    if (inputText.trim() !== "") {
      const url = `https://robohash.org/${inputText}`;

      axios
        .get(url, { responseType: "blob" })

        .then((response) => {
          const imageurl = URL.createObjectURL(response.data);
          setImagUrl(imageurl);
          setLoading(false);
        })
        .catch((error) => {
          alert(error);
          setLoading(false);
        });
    }
  };


  if(loading){
    return <div>
        <h1>Axios API fetching</h1>

<form onSubmit={handleSubmit}>
  <input
    type="text"
    value={inputText}
    onChange={(e) => setInputText(e.target.value)}
    placeholder="enter random text or name"
  />
  <button type="submit">Generate image</button>
</form>
        Loading.....Please Wait</div>
  }

//   if(error){
//     return <div>Error: {error.message}</div>
//   }

  return (
    <div>
      <h1>Axios API fetching</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="enter random text or name"
        />
        <button type="submit">Generate image</button>
      </form>

      {imgUrl && <img src={imgUrl} alt="generated robot" />}
    </div>
  );
};

export default AxiosAPI;
