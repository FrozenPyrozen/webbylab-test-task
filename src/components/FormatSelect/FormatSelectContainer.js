import React, { Component } from "react";

import FormatSelect from "../SearchSelect/SearchSelect";

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
