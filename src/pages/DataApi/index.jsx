import React, { useState } from "react";
import "./styles.css";
import Axios from "axios";

const DataApi = () => {
  const [joke, setJoke] = useState("");

  const getJokes = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        setJoke(response.data.setup + "..." + response.data.punchline);
      }
    );
  };

  return (
    <div className="container">
      <div className="joke">
        <h1>{joke}</h1>
      </div>
      {joke === "" ? (
        <button onClick={getJokes} className="submit">
          Click here for a not funny joke
        </button>
      ) : (
        <button onClick={getJokes} className="submit">
          Click here for a outher not funny joke
        </button>
      )}
    </div>
  );
};

export default DataApi;
