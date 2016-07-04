var React = require("react");

var App = React.createClass({
  render: function () {
    return (
      <div>
        This is the App Component
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
