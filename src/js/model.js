import { API_KEY, API_URL_TRENDING, POSTER_PATH } from "./config";
import { getJSON } from "./helper";

export const state = {
  trending: {
    render: false,
  },
};

export const loadTrending = async () => {
  try {
    const data = await getJSON(`${API_URL_TRENDING}${API_KEY}`);
    const { results } = data;

    console.log(results);

    // Filter trending movies
    state.trending.movie = results.filter(
      (item) => item.media_type === "movie"
    );

    // Filter TV shows
    state.trending.tv = results.filter((item) => item.media_type === "tv");

    // Populate trending movie object
    state.trending.movie = state.trending.movie.map((item) => {
      return {
        movieId: item.id,
        movieName: item.title ? item.title : "",
        movieOverview: item.overview,
        moviePoster: `${POSTER_PATH}${item.poster_path}`,
        movieReleaseDate: item.release_date ? item.release_date : "",
      };
    });

    // Populate trending TV object
    state.trending.tv = state.trending.tv.map((item) => {
      return {
        tvId: item.id,
        tvOverview: item.overview,
        tvPoster: `${POSTER_PATH}${item.poster_path}`,
      };
    });
  } catch (err) {
    console.log(`Model Error: ${err}`);
  }
};
