import React from "react";
import { TextField } from "@mui/material";

const Searcher = () => {
  return (
    <TextField
      style={{ margin: "20px" }}
      id="outlined-basic"
      label="Pelicula"
      variant="outlined"
      size="small"
    />
  );
};

export default Searcher;
