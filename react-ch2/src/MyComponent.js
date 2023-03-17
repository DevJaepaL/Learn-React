import PropTypes from "prop-types";
import React, { Component } from "react";

export class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hello ! My name is {name}. <br />
        This Component Children Value is {children} <br />
        My Favorite Number is {favoriteNumber} !
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "Null Name",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
