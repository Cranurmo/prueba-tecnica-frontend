import React from "react";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FavButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? FavoriteBorderIcon  : FavoriteIcon;
  
  return <Button startIcon={<Icon />} onClick={onClick} />;
};

export default FavButton;
