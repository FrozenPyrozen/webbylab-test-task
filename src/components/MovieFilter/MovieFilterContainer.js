import { connect } from "react-redux";
import MovieFilter from "./MovieFilter";

import { moviesActions, moviesSelectors } from "../../modules/movies";

const mapStateToProps = state => ({
  value: moviesSelectors.getFilter(state)
});

const mapDispatchToProps = { onChange: moviesActions.changeFilter };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieFilter);
