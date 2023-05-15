import axios from "axios"

const getMovies = ()=>{
    return axios.get('https://pruebatoc-production.up.railway.app/peliculas')
    .then(res=> res.data);

}

export const postMovies =  (pelicula) => {
    try {
      const response = axios.post('https://pruebatoc-production.up.railway.app/peliculas', pelicula);
      return response;
    } catch (error) {
      throw error;
    }
  };

export const deleteMovie = async (id) => {
    try {
      const response = await axios.delete(`https://pruebatoc-production.up.railway.app/peliculas/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error deleting movie from API");
    }
  };


export default getMovies

