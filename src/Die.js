import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  constructor(props) {
    super();
    this.toggleClick = this.toggleClick.bind(this);
  }
  toggleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    return (
      <button
        className={'Die'}
        style={{ backgroundColor: this.props.locked ? 'grey' : 'black' }}
        onClick={this.toggleClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
