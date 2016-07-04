var React = require("react");

var LoginForm = React.createClass({
  getInitialState: function () {
    return { username: "", password: "" };
  },

  usernameChange: function (event) {
    this.setState({ username: event.target.value});
  },

  passwordChange: function (event) {
    this.setState({ password: event.target.value});
  },

  handleSubmit: function (event) {
    event.preventDefault();

    alert(`There has been a login ${this.state.username}, ${this.state.password}`);
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="Username"
                 onChange={this.usernameChange}
                 value={this.state.username} />

          <input type="password"
                 placeholder="Password"
                 onChange={this.passwordChange}
                 value={this.state.password} />

          <input type="submit"
                 value="Login" />
      </form>
    );
  }
});

module.exports = LoginForm;
