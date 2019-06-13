import React, { Component } from "react";

import Movie from "./Movie";

export default class MovieContainer extends Component {
  state = { isModalOpen: false };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <Movie
        {...this.props}
        onOpenModal={this.handleOpenModal}
        isOpened={isModalOpen}
        onClose={this.handleCloseModal}
      />
    );
  }
}
