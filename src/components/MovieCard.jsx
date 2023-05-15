import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";
import { deleteMovie } from "../api";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const MovieCard = ({ title, director, year, about, id, onDeleted }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleOnFavorite = () => {
    dispatch(setFavorite({ movieId: id }));
  };

  const handleOnDelete = async () => {
    try {
      await deleteMovie(id);
      onDeleted(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">{about}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOnFavorite}>Add to favorites</Button>
        <DeleteIcon onClick={handleOpenDialog}  />
        <Dialog open={open} >
          <DialogTitle>Eliminar Película</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ¿Está seguro que desea eliminar esta película?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancelar</Button>
            <Button onClick={() => { handleOnDelete(); handleCloseDialog(); }} autoFocus>
              Eliminar
            </Button>
          </DialogActions>
        </Dialog>
        <EditIcon /> 
      </CardActions>
    </Card>
  );
};

export default MovieCard;
