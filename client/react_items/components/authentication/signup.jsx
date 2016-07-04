var React = require("react");
var axios = require("axios");
var SignUpForm = React.createClass({
  getInitialState: function () {
    return { username: "", password: "", passwordConfirm: "" };
  },

  usernameChange: function (event) {
    this.setState({ username: event.target.value});
  },

  passwordChange: function (event) {
    this.setState({ password: event.target.value});
  },

  passwordConfirmChange: function (event) {
    this.setState({ passwordConfirm: event.target.value });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    axios.post("/users/register", {
      username: this.state.username,
      password: this.state.password
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
           />

           <input type="password"
                  placeholder="Password"
                  onChange={this.passwordChange}
           />

           <input type="password"
                  placeholder="Password Confirmation"
                  onChange={this.passwordConfirmChange}
           />

           <input type="submit"
                  value="Sign Up"
           />
      </form>
    );
  }
});

module.exports = SignUpForm;
