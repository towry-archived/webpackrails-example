
import React, {Component} from 'react'

import {canUseDom} from 'react/lib/ExecutionEnvironment'

import 'react-date-picker/index.css'

import DatePicker from 'react-date-picker'

function onChange (a, b) {
  console.log('hi');
}

var date = '2015-8-12';

export default class MainView extends Component {
  constructor (props) {
    super(props);

    this.displayName = "MainView";

    this.state = {
      canUseDom
    }
  }

  componentDidMount () {
    this.setState({
      canUseDom: true
    })
  }

  render () {

    var DP;
    if (this.state.canUseDom) {
      DP = <DatePicker />
    } else {
      DP = 'loading ....';
    }

    return (
      <div>
        {DP}
      </div>
    );
  }
}
