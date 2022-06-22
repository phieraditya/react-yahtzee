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
    val: 1,
  };
  constructor(props) {
    super();
    this.toggleClick = this.toggleClick.bind(this);
  }
  toggleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { val, dies, locked, disabled, rolling } = this.props;
    let classes = 'Die ';
    if (locked) classes += 'Die-locked';
    if (rolling && !locked) classes += 'Die-rolling';
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
