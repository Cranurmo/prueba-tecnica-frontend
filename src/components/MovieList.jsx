import React from "react";
import MovieCard from "./MovieCard";
import { Grid, Box } from "@mui/material";

const MovieList = ({ movies }) => {
    
  return (
    <Box>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        {movies.map((movie) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MovieCard
                key={movie.id}
                title={movie.titulo}
                director={movie.director}
                year={movie.anio}
                about={movie.descripcion}
                id={movie.id}
              />{" "}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

MovieList.defaultProps = {
  movies: Array(10).fill(""),
};

export default MovieList;
