import React, { Component } from 'react';
import Tappable from 'react-tappable';
import Emoji from './Emoji';

class Tada extends Component {
  render() {
  	if (!this.props.show) return null;
    return (
      <div className="tada">
        <Tappable onTap={this.props.onTap}>
          <Emoji value=":tada:" />
        </Tappable>
      </div>
    );
  }
}

export default Tada;
