import React, { Component } from "react";

import AppHeader from "./AppHeader";

export default class AppHeaderContainer extends Component {
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
      <AppHeader
        {...this.props}
        onOpenModal={this.handleOpenModal}
        isOpened={isModalOpen}
        onClose={this.handleCloseModal}
      />
    );
  }
}
