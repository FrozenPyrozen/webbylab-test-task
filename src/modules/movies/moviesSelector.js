const getItems = state => state.movies.items;

const getFilter = state => state.movies.filter;

const getSorted = state => state.movies.sorting;

const getLoading = state => state.movies.loading;

const getTypeOfSearch = state => state.movies.currentSearchType;
const getItem = state => state.movies.currentMovie;

const getFilteredMovies = state => {
  const items = getItems(state);
  const filter = getFilter(state).toLowerCase();
  const searchType = getTypeOfSearch(state);
  const isSorted = getSorted(state);

  return items
    .filter(item => {
      if (searchType === "actorName") {
        return item.stars.some(item => item.toLowerCase().includes(filter));
      } else {
        return item.title.toLowerCase().includes(filter);
      }
    })
    .sort((prev, next) => {
      if (!isSorted) return 0;
      const prevTitle = prev.title.toLowerCase();
      const nextTitle = next.title.toLowerCase();

      return prevTitle > nextTitle ? 1 : prevTitle < nextTitle ? -1 : 0;
    });
};

export default {
  getSorted,
  getItems,
  getFilter,
  getFilteredMovies,
  getItem,
  getTypeOfSearch,
  getLoading
};
