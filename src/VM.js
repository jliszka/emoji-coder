
const N = 12;

class VM {
  ops = {
    outer: this,
    lt: function(s) { s.gx = (s.gx-1+N) % N; },
    rt: function(s) { s.gx = (s.gx+1+N) % N; },
    ll: function(s) { s.gx = 0; },
    rr: function(s) { s.gx = N-1; },
    up: function(s) { s.gy = (s.gy-1+N) % N; },
    dn: function(s) { s.gy = (s.gy+1+N) % N; },
    rp: function(s, n) {
      if (typeof n !== 'number') {
        s.pos = 0;
        return -1;
      }
      const k = s.line + "_" + s.pos;
      const counters = s.counters || {};
      s.counters = counters;
      counters[k] = (counters[k] || n) - 1;
      if (counters[k] === 0) {
        counters[k] = null;
        return 1;
      } else {
        s.pos = 0;
        return -1;
      }
    },
    ru: function(s, n) {
      if (typeof n !== 'number') {
        s.line = 0;
        s.pos = 0;
        return -1;
      }
      const k = s.line + "_" + s.pos;
      const counters = s.counters || {};
      s.counters = counters;
      counters[k] = (counters[k] || n) - 1;
      if (counters[k] === 0) {
        counters[k] = null;
        return 1;
      } else {
        s.line = 0;
        s.pos = 0;
        return -1;
      }
    },
    lk: function(s, a) {
      /*
      const b = dir == 'up' ? getGrid(s.grid, s.gx, s.gy-1)
        : dir == 'dn' ? getGrid(s.grid, s.gx, s.gy+1)
        : dir == 'lt' ? getGrid(s.grid, s.gx-1, s.gy)
        : dir == 'rt' ? getGrid(s.grid, s.gx+1, s.gy)
        : dir == 'hr' ? getGrid(s.grid, s.gx, s.gy)
        : undefined;
      */
      const b = this.outer.getGrid(s.grid, s.gx, s.gy);
      if (a === b) {
        return 1;
      } else {
        s.line += 1;
        s.pos = 0;
        return -1;
      }
    },
    st: function(s) {
      s.playing = false;
      return -1;
    }
  }

  setGrid(grid, x, y, c) {
    y = (y+N) % N;
    x = (x+N) % N;
    const row = grid[y] || [];
    grid[y] = row;
    row[x] = c;
  }

  getGrid(grid, x, y) {
    y = (y+N) % N;
    x = (x+N) % N;
    const row = grid[y] || [];
    grid[y] = row;
    return row[x];
  }

  showGrid(grid) {
    for (var x = 0; x < N; x++) {
      let s = '';
      const gline = grid[x];
      for (var y = 0; y < N; y++) {
        s += gline && gline[y] ? gline[y] : '.';
        s += ' ';
      }
      console.log(s);
    }
  }

  step(state) {
    const lines = state.lines;
    const line = lines[state.line];
    if (!line) return;
    const op = line[state.pos];
    var inc = 1;
    if (this.ops[op]) {
      inc = (this.ops[op](state, line[state.pos+1], line[state.pos+2]) || 0) + 1;
    } else {
      this.setGrid(state.grid, state.gx, state.gy, op);
    }
    if (inc > 0) {
      state.pos += inc;
      if (state.pos >= line.length) {
        state.pos = 0;
        state.line++;
      }
    }
  }
}

export default VM;
