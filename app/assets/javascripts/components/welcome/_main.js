
var React = require('react');

var Preview = require('./_preview');
var Side = require('./_side');

module.exports = React.createClass({
  componentDidMount: function () {
  },

  render: function () {
    return (
      <div id="main">
        <Side {...this.props.side}/>
        <Preview {...this.props.preview}/>
      </div>
    );
  }
});
