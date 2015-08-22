
var Composite = {

  _click: function () {
    return this.click;
  },

  render: function () {
    var props = this.props;

    return (
      <div id="sidebar" onClick={this._click()}>
        <p>I am the sidebar</p>
      </div>
    );
  }
};

exports = module.exports = React.createClass(Composite);
exports.Composite = Composite;
