import {
  SET_FAVORITE,
  SET_LOADING,
  SET_MOVIES,
  SET_POST,
} from "../actions/types";

const initialState = {
  movies: [],
  loading: false,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case SET_FAVORITE:
      const newMoviesList = [...state.movies];
      const currentMovieIndex = newMoviesList.findIndex((movie) => {
        return movie.id === action.payload.movieId;
      });

      if (currentMovieIndex < 0) {
        return state;
      }

      newMoviesList[currentMovieIndex].favorite =
        !newMoviesList[currentMovieIndex].favorite;
      return { ...state, movies: newMoviesList };
    case SET_POST:
      return { ...state, createdMovie: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
