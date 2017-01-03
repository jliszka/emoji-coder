import React, { Component } from 'react';
import Tappable from 'react-tappable';
import cx from 'classnames';
import Emoji from './Emoji';
import puzzles from './Puzzles';

export default class PuzzleMenu extends Component {

  selectPuzzle(book, puzzle) {
    this.props.toggleMenu();
    this.props.selectPuzzle(book, puzzle);
  }

  render() {
    return (
      <div className="puzzles">
        <Tappable onTap={() => this.props.toggleMenu()}>
          <Emoji value=":trophy:"/>
        </Tappable>
        {
          this.props.open && (
            <PuzzleModal
              openBook={this.props.book}
              solved={this.props.solved}
              selectPuzzle={(book, puzzle) => this.selectPuzzle(book, puzzle)}
              toggleBook={this.props.toggleBook} />
          )
        }
      </div>
    );
  }
}

class PuzzleModal extends Component {

  render() {
    const { openBook, solved } = this.props;
    const prevSolved = openBook === 0 || openBook === undefined || openBook === null || solved[openBook-1] === puzzles[openBook-1].puzzles.length-1;
    const rawSolved = solved[openBook];
    const maxSolved = rawSolved === 0 ? rawSolved : (rawSolved || -1);
    const bookPuzzles = (puzzles[openBook] || {}).puzzles || [];

    return (
      <div className="puzzle-modal">
        <div className="puzzle-books">
          <Tappable className="puzzle-book unlocked puzzle-clear" onTap={() => this.props.selectPuzzle(null, null)}>
            <Emoji value=":no_entry_sign:" />
          </Tappable>

          {
            puzzles.map((book, i) => {
              const prevSolved = i === 0 || solved[i-1] === puzzles[i-1].puzzles.length-1;
              return (
                <PuzzleBook
                  key={"book_"+i}
                  value={book.name}
                  unlocked={prevSolved}
                  open={openBook === i}
                  toggleOpen={() => prevSolved && this.props.toggleBook(i)} />
              );
            })
          }
        </div>

        {
          bookPuzzles.map((p, i) => {
            return (
              <Puzzle
                key={"puzzle_"+i}
                idx={i}
                solved={i <= maxSolved}
                unlocked={prevSolved && i <= maxSolved + 1}
                onSelect={() => this.props.selectPuzzle(openBook, i)} />
            );
          })
        }

      </div>
    );
  }
}

class PuzzleBook extends Component {
  render() {
    const classes = cx({
      'puzzle-book': true,
      'unlocked': this.props.unlocked
    });
    return (
      <Tappable className={classes} onTap={this.props.toggleOpen}>
        <Emoji value={ this.props.open ? ':open_book:' : this.props.value } />
      </Tappable>
    );
  }
}

class Puzzle extends Component {
  render() {
    const classes = cx({
      'puzzle': true,
      'unlocked': this.props.unlocked
    });
    const numberClasses = cx({
      'puzzle-number': true,
      'two-digit': this.props.idx + 1 >= 10
    })
    return (
      <div className={classes}>
        <Tappable onTap={() => { if (this.props.unlocked) this.props.onSelect() }}>
          <div className={numberClasses}>{this.props.idx+1}</div>
          <Emoji value={ this.props.solved ? ':unlock:' : ':lock:'} />
        </Tappable>
      </div>
    );
  }
}
