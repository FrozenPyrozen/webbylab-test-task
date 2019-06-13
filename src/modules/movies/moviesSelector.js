const getItems = state => state.movies.items;

const getFilter = state => state.movies.filter;

const getFilteredMovies = state => {
  const items = getItems(state);
  const filter = getFilter(state).toLowerCase();

  return items.filter(item => item.title.toLowerCase().includes(filter));
};

export default { getItems, getFilter, getFilteredMovies };
