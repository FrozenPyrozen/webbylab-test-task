import React, { Component } from "react";
import { connect } from "react-redux";

import SearchSelect from "./SearchSelect";

import { moviesActions, moviesSelectors } from "../../modules/movies";

class SearchSelectContainer extends Component {
  render() {
    return (
      <SearchSelect {...this.props} filterValues={["title", "actorName"]} />
    );
  }
}
const mapStateToProps = state => ({
  currentFilter: moviesSelectors.getTypeOfSearch(state)
});

const mapDispatchToProps = {
  changeFilter: moviesActions.changeSearchType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSelectContainer);
