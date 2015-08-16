
import React, {Component} from 'react'

export default class extends Component {
  constructor (props) {
    super(props);

    this.displayName = 'MainView';
  }

  render () {
    return (
      <div id="main">
        <p>Hello world</p>
      </div>
    );
  }
}
