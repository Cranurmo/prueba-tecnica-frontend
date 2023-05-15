import React, { useState } from 'react';

function Form({ handleSubmit }) {

  const [pelicula, setPelicula] = useState({
    titulo: '',
    director: '',
    anio: 0,
    descripcion: '',
    genero: '',
    favorita: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPelicula((prevPelicula) => ({
      ...prevPelicula,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(pelicula);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Título:
        <input type="text" name="titulo" value={pelicula.titulo} onChange={handleChange} />
      </label>
      <label>
        Director:
        <input type="text" name="director" value={pelicula.director} onChange={handleChange} />
      </label>
      <label>
        Año:
        <input type="number" name="anio" value={pelicula.anio} onChange={handleChange} />
      </label>
      <label>
        Descripción:
        <textarea name="descripcion" value={pelicula.descripcion} onChange={handleChange} />
      </label>
      <label>
        Género:
        <input type="text" name="genero" value={pelicula.genero} onChange={handleChange} />
      </label>
      <label>
        Favorita:
        <input type="checkbox" name="favorita" checked={pelicula.favorita} onChange={handleChange} />
      </label>
      <button type="submit">Agregar Película</button>
    </form>
  );
}

export default Form;
