import axios from "axios";

export const getTrendingMovies = async (page=1) => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1a0f2de132857590e908bb553dea49ea&page=${page}`);
    return data;
}

export const getMovieDetails = async (movie_id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=1a0f2de132857590e908bb553dea49ea`);
    return data;
}

export const getCastDetails = async (movie_id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=1a0f2de132857590e908bb553dea49ea`);
    return data;
}

export const getReviewsDetails = async (movie_id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=1a0f2de132857590e908bb553dea49ea`);
    return data;
}

 export const getSearchMovies = async (query, page=1) => {
     const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1a0f2de132857590e908bb553dea49ea&query=${query}&page=${page}`);
    return data;
  }