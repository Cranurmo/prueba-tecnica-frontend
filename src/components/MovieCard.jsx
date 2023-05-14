import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieCard = ({ title, director, year, about }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">{about}</Typography>
        <CardActions>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
