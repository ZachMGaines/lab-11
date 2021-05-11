import React, { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {

  render() {
    const { loading } = this.props;
    if (!loading) return null;

    return (
      <div className="Loader">
        <img src="public/loading2.gif" alt="loader" />
      </div>
    );
  }
}
