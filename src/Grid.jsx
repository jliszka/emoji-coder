import React, { Component } from 'react';
import Emoji from "./Emoji";
import Tappable from 'react-tappable';
import cx from 'classnames';

class Grid extends Component {
  N = 12
  ns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  render() {
    return (
      <table cellSpacing="0">
        <tbody>
        {
          this.ns.map(j => {
            const gline = this.props.grid[j] || [];
            return <tr key={"row_"+j}>
              {
                this.ns.map(i => {
                  const classes = cx({
                    'cell': true,
                    'current': this.props.gx === i && this.props.gy === j
                  });
                  const gcell = gline[i] || ' ';
                  return (
                  	<td key={"cell_"+j+"_"+i} className={classes}>
                      <Tappable className="cell-inner" onTap={() => this.props.setGridPos(i, j)}>
                        <Emoji value={gcell} />
                      </Tappable>
                  	</td>
                  );
                })
              }
            </tr>
          })
        }
        </tbody>
      </table>
    );
  }
}

export default Grid;
