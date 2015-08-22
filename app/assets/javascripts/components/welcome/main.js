
var Side = require('./side');
var Preview = require('./preview');

module.exports = React.createClass({
  displayName: 'MainView', 

  getDefaultProps: function () {
    return {
    };
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
