import { SET_FAVORITE, SET_LOADING, SET_MOVIES, SET_POST } from "./types";

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setMovies = (payload) => ({
  type: SET_MOVIES,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const setPost = (payload) => ({
  type: SET_POST,
  payload
})
