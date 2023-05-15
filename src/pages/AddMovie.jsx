import React from 'react';
import Form from '../components/Form';
import { postMovies} from '../api';

function AddMovie() {

  const handleSubmit = async (pelicula) => {
    try {
      const response = await postMovies(pelicula);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Agregar Película</h1>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default AddMovie;