"use strict";

import * as model from "./model";
import trendingMovieView from "./views/Trending/trendingMovieView";
import trendingTvShows from "./views/Trending/trendingTvShows";

// Control trending starts
const controlTrending = async () => {
  try {
    await model.loadTrending();
    trendingMovieView.render(model.state.trending.movie);
    trendingTvShows.render(model.state.trending.tv);
  } catch (error) {
    console.error(error);
  }
};
// Control trending ends

const init = () => {
  controlTrending();
};

init();
