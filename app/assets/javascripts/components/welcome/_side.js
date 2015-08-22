
var React = require('react');
var assign = require('object-assign');

var side = require('./side');

var Composite = assign({}, side.Composite, {
  click: function () {
    console.log('you clicked on sidebar');
  }
});

module.exports = React.createClass(Composite);
