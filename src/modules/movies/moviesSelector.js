const getItems = state => state.movies.items;

const getFilter = state => state.movies.filter;

const getLoading = state => state.movies.loading;

const getTypeOfSearch = state => state.movies.currentSearchType;
const getItem = state => state.movies.currentMovie;

const getFilteredMovies = state => {
  const items = getItems(state);
  const filter = getFilter(state).toLowerCase();
  const searchType = getTypeOfSearch(state);

  if (searchType === "actorName") {
    return items.filter(item =>
      item.stars.some(item => item.toLowerCase().includes(filter))
    );
  }

  return items.filter(item => item.title.toLowerCase().includes(filter));
};

export default {
  getItems,
  getFilter,
  getFilteredMovies,
  getItem,
  getTypeOfSearch,
  getLoading
};
