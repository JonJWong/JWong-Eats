import React from "react";
import * as Util from "../../util/util";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
  }

  render() {
    const { item, toggleItemModal } = this.props;

    return (
      <div id="food-modal-container">
        <div id="food-modal-block"></div>
        <div id="food-modal-content">
          test
        </div>
      </div>
    )
  }
}

export default MenuItem;