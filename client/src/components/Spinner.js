import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/logo.png';

class Spinner extends Component {
  render() {
    const { err } = this.props;
    return (
      <div className="container">
        <img src={logo} alt="logo" />
        <h1>Loading...</h1>

        {this.props.err.length > 0 ? (
          <div>
            <h1>{this.props.err}</h1>
            <Link to="/">Go Back</Link>
          </div>
        ) : null}
      </div >
    );
  };
};

Spinner.propTypes = {
  error: PropTypes.string
};

export default Spinner;