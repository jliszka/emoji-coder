import React, { Component } from 'react';
import Tappable from 'react-tappable';
import Emoji from './Emoji';

class Input extends Component {
  render() {
    return (
      <div className="input">
        <div className="input-row">
          <Key onKey={this.props.onKey} value={1}/>
          <Key onKey={this.props.onKey} value={2}/>
          <Key onKey={this.props.onKey} value={3}/>

          <Spacer />

          <Spacer />
          <Key onKey={this.props.onKey} value="up"/>
          <Spacer />

          <Spacer />

          <Key onKey={this.props.onKey} value="rp"/>
          <Key onKey={this.props.onKey} value="ru"/>

          <Spacer />
          <Spacer />
          <Spacer />

          <Key onKey={this.props.onKey} value=":red_circle:"/>
          <Key onKey={this.props.onKey} value=":large_blue_circle:"/>
          <Key onKey={this.props.onKey} value=":white_circle:"/>
          <Key onKey={this.props.onKey} value=":black_circle:"/>
          <Key onKey={this.props.onKey} value=":heart:"/>
          <Key onKey={this.props.onKey} value=":blue_heart:"/>
          <Key onKey={this.props.onKey} value=":green_heart:"/>
          <Key onKey={this.props.onKey} value=":yellow_heart:"/>
          <Key onKey={this.props.onKey} value=":purple_heart:"/>
          <Spacer />
          <Key onKey={this.props.onDelete} value=":back:"/>
        </div>

        <div className="input-row">
          <Key onKey={this.props.onKey} value={4}/>
          <Key onKey={this.props.onKey} value={5}/>
          <Key onKey={this.props.onKey} value={6}/>

          <Spacer />

          <Key onKey={this.props.onKey} value="lt"/>
          <Spacer />
          <Key onKey={this.props.onKey} value="rt"/>

          <Spacer />

          <Key onKey={this.props.onKey} value="lk"/>
          <Key onKey={this.props.onKey} value="st"/>

          <Spacer />
          <Spacer />
          <Spacer />

          <Key onKey={this.props.onKey} value=":smile:"/>
          <Key onKey={this.props.onKey} value=":slightly_frowning_face:"/>
          <Key onKey={this.props.onKey} value=":stuck_out_tongue_winking_eye:"/>
          <Key onKey={this.props.onKey} value=":tada:"/>
          <Key onKey={this.props.onKey} value=":jack_o_lantern:"/>
          <Key onKey={this.props.onKey} value=":robot_face:"/>
          <Key onKey={this.props.onKey} value=":chicken:"/>
          <Key onKey={this.props.onKey} value=":monkey_face:"/>
          <Key onKey={this.props.onKey} value=":bee:"/>
          <Key onKey={this.props.onKey} value=":panda_face:"/>
          <Key onKey={this.props.onKey} value=":football:"/>
        </div>

        <div className="input-row">
          <Key onKey={this.props.onKey} value={7}/>
          <Key onKey={this.props.onKey} value={8}/>
          <Key onKey={this.props.onKey} value={9}/>

          <Spacer />

          <Key onKey={this.props.onKey} value="ll"/>
          <Key onKey={this.props.onKey} value="dn"/>
          <Spacer />

          <Spacer />

          <Spacer />
          <Spacer />

          <Spacer />
          <Spacer />
          <Spacer />

          <Key onKey={this.props.onKey} value=":apple:"/>
          <Key onKey={this.props.onKey} value=":pear:"/>
          <Key onKey={this.props.onKey} value=":tangerine:"/>
          <Key onKey={this.props.onKey} value=":lemon:"/>
          <Key onKey={this.props.onKey} value=":banana:"/>
          <Key onKey={this.props.onKey} value=":watermelon:"/>
          <Key onKey={this.props.onKey} value=":grapes:"/>
          <Key onKey={this.props.onKey} value=":strawberry:"/>
          <Key onKey={this.props.onKey} value=":pineapple:"/>
          <Key onKey={this.props.onKey} value=":cheese_wedge:"/>
          <Key onKey={this.props.onKey} value=":pizza:"/>


        </div>

        <div className="input-row">
          <Spacer />
          <Key onKey={this.props.onKey} value={0}/>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />

          <Key onKey={this.props.onKey} value=":baby:"/>
          <Key onKey={this.props.onKey} value=":girl:"/>
          <Key onKey={this.props.onKey} value=":walking:"/>
          <Key onKey={this.props.onKey} value=":information_desk_person:"/>
          <Key onKey={this.props.onKey} value=":sleuth_or_spy:"/>
          <Key onKey={this.props.onKey} value=":dancer:"/>
          <Key onKey={this.props.onKey} value=":evergreen_tree:"/>
          <Key onKey={this.props.onKey} value=":snowman:"/>
          <Key onKey={this.props.onKey} value=":earth_americas:"/>
          <Key onKey={this.props.onKey} value=":moon:"/>
          <Key onKey={this.props.onKey} value=":sunny:"/>
        </div>

      </div>
    );
  }
}

class Key extends Component {

  constructor() {
    super();
    this.state = { feedback: false };
  }

  showFeedback() {
    this.setState({
      feedback: true
    });
  }

  hideFeedback() {
    this.setState({
      feedback: false
    });
  }

  render() {
    return (
      <Tappable
        className="key"
        onTap={() => this.props.onKey(this.props.value)}
        onTouchStart={() => this.showFeedback()}
        onMouseDown={() => this.showFeedback()}
        onTouchEnd={() => this.hideFeedback()}
        onMouseUp={() => this.hideFeedback()}>
        { this.state.feedback && <div className="feedback"><Emoji value={this.props.value} /></div>}
      	<Emoji value={this.props.value} />
      </Tappable>
    );
  }
}

class Spacer extends Component {
	render() {
    return (
      <div className="spacer"> </div>
    );
  }
}

export default Input;
