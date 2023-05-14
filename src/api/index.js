import axios from "axios"

const getMovies = ()=>{
    return axios.get('https://pruebatoc-production.up.railway.app/peliculas')
    .then(res=> res.data);

}

export default getMovies;