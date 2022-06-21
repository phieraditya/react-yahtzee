import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  static defaultProps = {
    dies: [
      faDiceOne,
      faDiceTwo,
      faDiceThree,
      faDiceFour,
      faDiceFive,
      faDiceSix,
    ],
  };
  constructor(props) {
    super();
    this.toggleClick = this.toggleClick.bind(this);
  }
  toggleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { val, dies, locked, disabled } = this.props;
    let classes = 'Die ';
    if (locked) classes += 'Die-locked';
    return (
      <FontAwesomeIcon
        className={classes}
        onClick={this.toggleClick}
        icon={dies[val - 1]}
        disabled={disabled}
      ></FontAwesomeIcon>
    );
  }
}

export default Die;
