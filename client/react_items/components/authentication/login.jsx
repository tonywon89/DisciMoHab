var React = require("react");
var axios = require("axios");

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

    // axios.post('/users/login', {
    //     username: this.state.username,
    //     password: this.state.password
    //   }
    // )
    axios({
      method: 'post',
      url: "/users/login",
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then(function(res) {
      console.log(res);
    });
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
