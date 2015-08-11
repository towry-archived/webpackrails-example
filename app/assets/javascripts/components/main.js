
import React, {Component} from 'react'

import 'react-date-picker/index.css'
import DatePicker from 'react-date-picker'

function onChange (a, b) {
  console.log(a);
}

var date = '2015-8-12';

export default class MainView extends Component {
  constructor (props) {
    super(props);

    this.displayName = "MainView";
  }

  render () {
    return (
      <DatePicker
        minDate='2014-04-04'
        maxDate='2015-10-10'
        date={date}
        onChange={onChange}
      />
    );
  }
}
