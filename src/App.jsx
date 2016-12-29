import React, { Component } from 'react';
import Code from './Code';
import Grid from './Grid';
import Input from './Input';
import VM from './VM';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.vm = new VM();
    this.state = {
      lines: [],
      line: 0,
      pos: 0,
      grid: [],
      gx: 0,
      gy: 0,
      playing: false,
    };
  }

  setPos(line, pos) {
    this.setState({
      line: line,
      pos: pos
    });
  }

  setGridPos(x, y) {
    console.log("setGrid");
    this.setState({
      gx: x,
      gy: y
    });
  }

  onDelete() {
    const line = this.state.lines[this.state.line].slice();
    if (this.state.pos > 0) {
      line.splice(this.state.pos-1, 1);
      const lines = this.state.lines.slice();
      lines[this.state.line] = line;
      this.setState({
        lines: lines,
        pos: this.state.pos-1,
      });
    } else if (line.length === 0) {
      const lines = this.state.lines.slice();
      lines.splice(this.state.line, 1);
      const newLine = this.state.line === 0 ? 0 : this.state.line - 1;
      this.setState({
        lines: lines,
        line: newLine,
        pos: lines[newLine].length
      });
    }
  }

  onKey(k) {
    const line = (this.state.lines[this.state.line] || []).slice();
    line.splice(this.state.pos, 0, k);
    const lines = this.state.lines.slice();
    lines[this.state.line] = line;
    this.setState({
      lines: lines,
      pos: this.state.pos+1,
    });
  }

  doReset() {
    this.setState({
      gx: 0,
      gy: 0,
      line: 0,
      pos: 0,
      grid: [],
      playing: false,
      counters: null,
    })
  }

  doStep() {
    this.vm.step(this.state);
    this.setState(this.state);
  }

  doSteps() {
    setTimeout(() => {
      if (!this.state.playing) return;
      const newState = Object.assign({}, this.state);
      this.vm.step(newState);
      this.setState({
        gx: newState.gx,
        gy: newState.gy,
        grid: newState.grid,
        counters: newState.counters,
      });
      setTimeout(() => {
        if (!this.state.playing) return;
        this.setState({
          line: newState.line,
          pos: newState.pos,
          playing: newState.playing,
        });
        if (this.state.playing && this.state.lines[this.state.line]) {
          this.doSteps();
        } else {
          this.setState({ playing: false });
        }
      }, this.state.speed || 1000);
    }, this.state.speed || 1000);
  }

  doPlay(speed) {
    const wasPlaying = this.state.playing;
    this.setState({ playing: true, speed: speed });
    if (!wasPlaying) this.doSteps();
  }

  doPause() {
    this.setState({ playing: false });
  }

  doRun() {
    const newState = Object.assign({}, this.state);
    newState.playing = true;
    let i = 0;
    while(newState.playing && newState.lines[newState.line] && i < 1000) {
      this.vm.step(newState);
      i++;
    }
    newState.playing = false;
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <Code
          lines={this.state.lines}
          line={this.state.line}
          pos={this.state.pos}
          counters={this.state.counters}
          playing={this.state.playing}
          setPos={(line, pos) => this.setPos(line, pos)}
          doReset={() => this.doReset()}
          doPlay={() => this.doPlay(1000)}
          doFF={() => this.doPlay(100)}
          doRun={() => this.doRun()}
          doPause={() => this.doPause()}
          doStep={() => this.doStep()} />

        <Grid
          grid={this.state.grid}
          gx={this.state.gx}
          gy={this.state.gy}
          setGridPos={(x, y) => this.setGridPos(x, y)}
        />

        <Input onKey={k => this.onKey(k)} onDelete={() => this.onDelete()} />
      </div>
    );
  }
}


export default App;
