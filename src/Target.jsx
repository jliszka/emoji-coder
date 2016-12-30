import React, { Component } from 'react';
import cx from 'classnames';
import Tappable from 'react-tappable';
import Emoji from './Emoji';

class Target extends Component {
  render() {
    const classes = cx({
      'target': true,
      'unlocked': this.props.unlocked
    });
    return (
      <div className={classes}>
        <Tappable onTap={() => { if (this.props.unlocked) this.props.onSelect() }}>
          <Emoji value={this.props.name} />
        </Tappable>
      </div>
    );
  }
}

export default Target;
