
var React = require('react');
var assign = require('object-assign');
var antd = require('antd');

var Datepicker = antd.Datepicker;

var preview = require('./preview');

// for demo
var Composite = assign({}, preview.Composite, {
  componentDidMount: function () {
    React.render(<Datepicker />, this.refs.preview.getDOMNode());
  }
});

module.exports = React.createClass(Composite);
