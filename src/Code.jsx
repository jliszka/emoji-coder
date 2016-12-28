import React, { Component } from 'react';
import Emoji from './Emoji';
import cx from 'classnames';

class Code extends Component {
  render() {
    return (
      <div className="code">
        <div className="controls">
          <div className="spacer"></div>
          <div className="key" onClick={this.props.doReset}>
            <Emoji value=":house:" />
          </div>
          {
            this.props.playing ?
              <div className="key" onClick={this.props.doPause}>
                <Emoji value=":double_vertical_bar:" />
              </div>
            : <div className="key" onClick={this.props.doPlay}>
                <Emoji value=":arrow_forward:" />
              </div>
          }
          <div className="key" onClick={this.props.doStep}>
            <Emoji value=":black_right_pointing_triangle_with_double_vertical_bar:" />
          </div>
          <div className="key" onClick={this.props.doFF}>
            <Emoji value=":fast_forward:" />
          </div>
          <div className="spacer"></div>
          <div className="key" onClick={this.props.doRun}>
            <Emoji value=":black_right_pointing_double_triangle_with_vertical_bar:" />
          </div>
        </div>
        {
          this.props.lines.concat([[]]).map((line, idx) => {
            return <Line
              key={"line_"+idx}
              cmds={line}
              line={idx}
              pos={this.props.pos}
              counters={this.props.counters}
              setPos={this.props.setPos}
              current={this.props.line === idx} />
          })
        }
      </div>
    );
  }
}

class Line extends Component {
  render() {
    return (
      <div className="line">
      	<div className="line-number">{this.props.line+1}</div>
        {
          this.props.cmds.concat([null]).map((cmd, idx) => {
            const classes = cx({
              'cmd': true,
              'current': this.props.current && this.props.pos === idx,
              'empty': cmd === null
            });
            const counterKey = this.props.line + "_" + idx;
            const counterValue = this.props.counters && this.props.counters[counterKey];
            return (
            	<div key={"cmd_"+this.props.line+"_"+idx} className={classes} onClick={() => this.props.setPos(this.props.line, idx)}>
                { typeof counterValue === 'number' && <div className="counter">{counterValue}</div> }
            		<Emoji value={cmd} />
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Code;
