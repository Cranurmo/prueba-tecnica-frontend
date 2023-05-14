import "./App.css";
import Searcher from "./components/Searcher";
import MovieList from "./components/MovieList";
import { useEffect } from "react";
import getMovies from "./api";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setMovies } from "./actions";
import { CircularProgress } from "@mui/material";

function App() {
  const movies = useSelector((state) => state.movies);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(setLoading(true));
      const moviesRes = await getMovies();
      dispatch(setMovies(moviesRes));
      dispatch(setLoading(false));
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Searcher className="searcher" variant="outlined" size="small" />

      {loading ? (
        <CircularProgress style={{ marginTop: "20px" }} />
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

export default App;
