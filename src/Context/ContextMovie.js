import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/MostPopularMovies/k_9jopu1jg")
      .then((response) => setMovies(response.data.items))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);

  const values = { movies, isLoading };

  return (
    <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>
  );
};

const useMovies = () => useContext(MoviesContext);

export { MoviesProvider, useMovies };