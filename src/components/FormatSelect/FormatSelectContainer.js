import React, { Component } from "react";

// Reuse select view component
import FormatSelect from "../SearchSelect/SearchSelect";

/**
 * Selector for movie format "VHD", "DVD", "Blu-Ray"
 */

class FormatSelectContainer extends Component {
  render() {
    const { onChange, currentFilter } = this.props;
    return (
      <FormatSelect
        filterValues={["VHD", "DVD", "Blu-Ray"]}
        changeFilter={onChange}
        currentFilter={currentFilter}
      />
    );
  }
}

export default FormatSelectContainer;
