var React = require("react");

var SignUpForm = React.createClass({
  render: function () {
    return (
      <form>
          <input type="text"
                 placeholder="Username"
           />

           <input type="password"
                  placeholder="Password"
           />

           <input type="password"
                  placeholder="Password Confirmation"
           />

           <input type="submit"
                  value="SignUp"
           />
      </form>
    );
  }
});

module.exports = SignUpForm;
