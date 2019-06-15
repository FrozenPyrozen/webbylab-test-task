import React, { Component } from "react";
import { connect } from "react-redux";

import UploadFile from "./UploadFile";

import { moviesOperations } from "../../modules/movies";

import movieParser from "../../utils/utils";

/*
 * Component for upload and parcing file
 */

class UploadFileContainer extends Component {
  handleFile = async event => {
    const file = event.target.files[0];

    const fileType = file.type;
    console.log(file);

    if (fileType !== "text/plain") {
      return alert("Wrong file type. Please upload txt file!");
    }

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
