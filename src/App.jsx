import React, { Component } from 'react';
import Code from './Code';
import Emoji from './Emoji';
import Grid from './Grid';
import Input from './Input';
import Storage from './Storage';
import Tada from './Tada';
import VM from './VM';
import PuzzleMenu from './PuzzleMenu';
import puzzles from './Puzzles';
import './App.css';

class App extends Component {


  constructor() {
    super();
    this.vm = new VM();
    this.storage = new Storage();
    this.state = {
      lines: [],
      line: 0,
      pos: 0,
      grid: [],
      gx: 0,
      gy: 0,
      playing: false,
      solved: this.storage.get('solved') || {}
    };
  }

  setPos(line, pos) {
    if (this.state.playing) return;
    this.setState({
      line: line,
      pos: pos
    });
  }

  setGridPos(x, y) {
    if (this.state.playing) return;
    this.setState({
      gx: x,
      gy: y
    });
  }

  onDelete() {
    if (this.state.playing) return;
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
        pos: lines[newLine] ? lines[newLine].length : 0
      });
    }
  }

  onKey(k) {
    if (this.state.playing) return;
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
      puzzleCorrect: false,
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
          this.checkPuzzle();
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
    this.checkPuzzle();
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  toggleBook(book) {
    if (this.state.book === book) {
      this.setState({
        book: null
      });
    } else {
      this.setState({
        book: book
      });
    }
  }

  selectPuzzle(book, puzzle) {
    if (this.state.playing) return;
    this.doReset();
    this.setState({
      currentBook: book,
      currentPuzzle: puzzle
    });
    if (book !== null) {
      const lines = puzzles[book].puzzles[puzzle].lines;
      if (lines) {
        this.setState({ lines: lines });
      }
    }
  }

  resetTada() {
    this.setState({
      puzzleCorrect: false,
      menuOpen: true
    });
  }

  currentPuzzleGrid() {
    if (this.state.currentBook !== null && this.state.currentBook !== undefined) {
      return puzzles[this.state.currentBook].puzzles[this.state.currentPuzzle].grid;
    }
    return null;
  }

  checkPuzzle() {
    const grid = this.state.grid;
    const puzzle = this.currentPuzzleGrid();
    if (!puzzle) return;

    let correct = true;
    for (var i = 0; i < 12; i++) {
      for (var j = 0; j < 12; j++) {
        const gcell = (grid[i]||[])[j] || null;
        const pcell = (puzzle[i]||[])[j] || null;
        if (gcell !== pcell) {
          correct = false;
          break;
        }
      }
      if (!correct) break;
    }

    if (correct) {
      const newSolved = Object.assign({}, this.state.solved || {});
      newSolved[this.state.currentBook] = Math.max(this.state.solved[this.state.currentBook] || 0, this.state.currentPuzzle);
      this.storage.set('solved', newSolved);
      this.setState({
        puzzleCorrect: true,
        solved: newSolved
      });
    }
  }

  render() {
    const puzzle = this.currentPuzzleGrid();
    return (
      <div className="App">
        <div className="App-header">
          <PuzzleMenu
            book={this.state.book}
            solved={this.state.solved}
            open={this.state.menuOpen}
            toggleMenu={() => this.toggleMenu()}
            toggleBook={b => this.toggleBook(b)}
            selectPuzzle={(b, p) => this.selectPuzzle(b, p)} />
          <Emoji value=":computer:"/>
          <h2>Emoji Coder</h2>
        </div>
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

        <div className="grid">
          {
            puzzle &&
            <div className="current-puzzle">
              <Grid grid={puzzle} />
            </div>
          }
          <Tada show={this.state.puzzleCorrect} onTap={() => this.resetTada()}/>
          <Grid
            grid={this.state.grid}
            gx={this.state.gx}
            gy={this.state.gy}
            setGridPos={(x, y) => this.setGridPos(x, y)}
          />
        </div>

        <Input onKey={k => this.onKey(k)} onDelete={() => this.onDelete()} />

      </div>
    );
  }
}

export default App;
