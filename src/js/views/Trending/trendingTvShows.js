import View from "../View";

class TrendingTvShows extends View {
  _parentElement = document.querySelector(".cards-tv");
  _errorMessage = "No data found! Please try again ;)";

  _generateMarkup() {
    return this._data
      .map((item) => {
        return `
        <div class="cards-tv__card">
          <img
            src="${item.tvPoster}"
            class="cards-tv__card--img"
          />
          <div class="cards-tv__card--hover" >
            <p class='description'>${item.tvOverview}<p/>
          </div>
        </div>
    `;
      })
      .join(" ");
  }
}

export default new TrendingTvShows();
