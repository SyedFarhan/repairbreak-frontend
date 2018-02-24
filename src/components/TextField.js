import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TextField extends Component {
  render() {
    return (
      <div>
        <h1>Additional comments</h1>
        <textarea rows="4" cols="50">
        </textarea>
      </div>
    );
  }
}

export default TextField;
