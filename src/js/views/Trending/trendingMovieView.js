import View from "../View";

class TrendingMovieView extends View {
  _parentElement = document.querySelector(".cards-movie");
  _errorMessage = "No data found! Please try again ;)";

  _generateMarkup() {
    return this._data
      .map((item) => {
        return `
       
        <div class="cards-movie__card">
        <img
          src="${item.moviePoster}"
          class="cards-movie__card--img"
        />
        <div class="cards-movie__card--hover" >
          <p class='title'>${item.movieName}<p/>
          <p class='description'>${item.movieOverview}<p/>
          <p class='date'> ${item.movieReleaseDate}<p/>  
        </div>
      </div>
      `;
      })
      .join(" ");
  }
}

export default new TrendingMovieView();
