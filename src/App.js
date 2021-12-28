import React from "react";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies/Movies";
import { MoviesProvider } from "./Context/ContextMovie";
import Movie from "./Components/Movie/Movie";
function App() {
  return (
    <>
      <MoviesProvider>
        <Router>

        <Routes>

        <Route path="/" element={<Movies/>} />
          <Route path="/:id"  element={<Movie/>}/>
        </Routes>
        </Router>
      </MoviesProvider>
    </>
  );
}

export default App;
