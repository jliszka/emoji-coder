import React, { Component } from 'react';
import EmojiConvertor from '../public/js/emoji';

const emoji = new EmojiConvertor();
emoji.img_sets.apple.sheet = 'img/sheet_apple_64.png';
emoji.use_sheet = true;
emoji.replace_mode = 'img';

const numbers = [':zero:', ':one:', ':two:', ':three:', ':four:', ':five:', ':six:', ':seven:', ':eight:', ':nine:'];
const cmds = {
    lt: ':arrow_left:',
    rt: ':arrow_right:',
    hr: ':black_circle_for_record:',
    ll: ':black_left_pointing_double_triangle_with_vertical_bar:',
    rr: ':black_right_pointing_double_triangle_with_vertical_bar:',
    up: ':arrow_up:',
    dn: ':arrow_down:',
    rp: ':repeat:',
    ru: ':arrow_heading_up:',
    lk: ':eyes:',
    st: ':no_entry:',
};

class Emoji extends Component {
	render() {
    let code = this.props.value;
    if (code === null) {
      return <span>{code}</span>;
    }

    if (typeof code === 'number') {
      code = numbers[code];
    }

    if (cmds[code]) {
      code = cmds[code];
    }

    return <span className="emoji2" dangerouslySetInnerHTML={{__html: emoji.replace_colons(code)}}></span>;
  }
}

export default Emoji;