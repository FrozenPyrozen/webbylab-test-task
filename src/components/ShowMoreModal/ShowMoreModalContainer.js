import React, { Component, createRef } from "react";
import ShowMoreModal from "./ShowMoreModal";
import { connect } from "react-redux";

import { moviesSelectors } from "../../modules/movies";

class ShowMoreModalContainer extends Component {
  containerRef = createRef();

  componentDidMount() {
    this.containerRef.current.addEventListener(
      "click",
      this.handleBackdropClick
    );
    window.addEventListener("keydown", this.handleCloseEsc);
  }

  componentWillUnmount() {
    this.containerRef.current.removeEventListener(
      "click",
      this.handleBackdropClick
    );

    window.removeEventListener("keydown", this.handleCloseEsc);
  }

  handleCloseEsc = e => {
    const { onClose } = this.props;
    const isEsc = e.keyCode === 27;

    if (isEsc) {
      onClose();
    }
  };

  handleBackdropClick = e => {
    const { onClose } = this.props;

    const isTargetOutsideContainer = this.containerRef.current === e.target;

    if (isTargetOutsideContainer) {
      onClose();
    }
  };

  render() {
    const { onClose, currentMovie } = this.props;
    const {
      title,
      "Release Year": releaseYear,
      Format: format,
      Stars: stars
    } = currentMovie;

    return (
      <ShowMoreModal
        containerRef={this.containerRef}
        {...this.state}
        onClose={onClose}
        details={{ title, releaseYear, format, stars }}
      />
    );
  }
}

const mapStateToProps = state => ({
  currentMovie: moviesSelectors.getItem(state)
});

export default connect(mapStateToProps)(ShowMoreModalContainer);
