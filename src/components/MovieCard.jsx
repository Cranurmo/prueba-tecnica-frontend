import React from "react";
import { Card, CardContent, Typography, CardActions } from "@mui/material";
import FavButton from "./FavButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

const MovieCard = ({ title, director, year, about, id }) => {
  const dispatch = useDispatch();

  const handleOnFavorite = ()=>{
    dispatch(setFavorite({movieId: id}))
  }


  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">{about}</Typography>
        <CardActions>
          <FavButton isFavorite={true} onClick={handleOnFavorite} />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
