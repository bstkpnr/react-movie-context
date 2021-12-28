import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/MostPopularMovies/k_9jopu1jg")
      .then((response) => setMovies(response.data.items))
      .catch((error) => alert(error))
  }, []);

  const values = { movies };

  return (
    <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>
  );
};

const useMovies = () => useContext(MoviesContext);

export { MoviesProvider, useMovies };