import React, { Component, createRef } from "react";
import { connect } from "react-redux";

import AddMovieModal from "./AddMovieModal";

import { moviesOperations } from "../../modules/movies";

const INITIAL_STATE = {
  title: "",
  releaseYear: "",
  type: "VHD",
  star: "",
  stars: []
};

class AddMovieModalContainer extends Component {
  state = { ...INITIAL_STATE };
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

  // Inner form handlers

  /*
   * One handler for all iputs
   * We will distinguish the inputs by the name attribute
   */
  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleAddActor = value => {
    if (!value) {
      return alert("Enter actor full name!");
    }
    this.setState(prevState => {
      return {
        stars: [...prevState.stars, value.trim()],
        star: ""
      };
    });
  };

  handleDeleteActor = value => {
    this.setState(prevState => {
      return {
        stars: prevState.stars.filter(star => star !== value.trim())
      };
    });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    const { onClose } = this.props;
    const { title, releaseYear, type, stars } = this.state;

    if (!title || !releaseYear || !type || !stars) {
      return alert("Please, fill out all forms!");
    }

    if (stars.length === 0) {
      return alert(
        "Please, fill at least one actor! To add actor click on '+' button!"
      );
    }

    const movie = {
      title: title.trim(),
      releaseYear: Number(releaseYear.trim()),
      type: type.trim(),
      stars
    };

    this.props.addMovie(movie);
    this.reset();
    onClose();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  // Modal view handlers

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
    const { onClose } = this.props;
    const { title, releaseYear, format, star, stars } = this.state;

    return (
      <AddMovieModal
        containerRef={this.containerRef}
        fields={{ title, releaseYear, format, star, stars }}
        onClose={onClose}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        onAddActor={this.handleAddActor}
        onDeleteActor={this.handleDeleteActor}
      />
    );
  }
}

const mapDispatchToProps = {
  addMovie: moviesOperations.addMovie
};
export default connect(
  null,
  mapDispatchToProps
)(AddMovieModalContainer);
