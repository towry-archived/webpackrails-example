
import React, {Component} from 'react'

export default class MainView extends Component {
  constructor (props) {
    super(props);

    this.displayName = "MainView";
  }

  render () {
    return (
      <div className="container">
        <h1>Hello World</h1>
      </div>
    );
  }
}
