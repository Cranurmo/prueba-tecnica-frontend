import "./App.css";
import Searcher from "./components/Searcher";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";
import getMovies from "./api";

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesRes = await getMovies()
      setMovies(moviesRes)
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Searcher className="searcher" variant="outlined" size="small" />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
