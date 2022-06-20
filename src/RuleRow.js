import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
  render() {
    const { name, score } = this.props;
    let disabled = score === undefined ? 'active' : 'disabled';
    return (
      <tr
        className={`RuleRow RuleRow-${disabled}`}
        onClick={this.props.doScore}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    );
  }
}

export default RuleRow;
