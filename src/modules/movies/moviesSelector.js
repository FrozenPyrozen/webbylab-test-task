const getItems = state => state.movies.items;

const getFilter = state => state.movies.filter;

const getTypeOfSearch = state => state.movies.currentSearchType;
const getItem = state => state.movies.currentMovie;

const getFilteredMovies = state => {
  const items = getItems(state);
  const filter = getFilter(state).toLowerCase();
  const searchType = getTypeOfSearch(state);

  const stars = items.map(item => item.Stars);
  console.log(searchType);
  // console.log(stars.filter(star => star.toLowerCase().includes(filter)));
  if (searchType === "actorName") {
    return items.filter(item => item.Stars.toLowerCase().includes(filter));
  }

  return items.filter(item => item.title.toLowerCase().includes(filter));
};

export default {
  getItems,
  getFilter,
  getFilteredMovies,
  getItem,
  getTypeOfSearch
};
