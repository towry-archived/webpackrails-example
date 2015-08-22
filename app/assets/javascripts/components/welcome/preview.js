
var canUseDom = typeof document !== 'undefined';

var Composite = {
  render: function () {
    var props = this.props;

    return (
      <div ref="preview" id="preview">
      </div>
    );
  }
}

exports = module.exports = React.createClass(Composite);
exports.Composite = Composite;
