import React, { Component } from "react";
import { connect } from "react-redux";

import UploadFile from "./UploadFile";

import { moviesOperations } from "../../modules/movies";

import movieParser from "../../utils/utils";

class UploadFileContainer extends Component {
  handleFile = async event => {
    // Choose file
    const file = event.target.files[0];

    // Parse movies from file
    const movies = await movieParser(file);

    this.props.addMovies(movies);
  };
  render() {
    return <UploadFile onUpload={this.handleFile} />;
  }
}

const mapDispatchToProps = { addMovies: moviesOperations.addMovie };

export default connect(
  null,
  mapDispatchToProps
)(UploadFileContainer);
