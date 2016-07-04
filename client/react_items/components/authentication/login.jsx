var React = require("react");

var LoginForm = React.createClass({
  render: function () {
    return (
      <form>
          <input type="text"
                 placeholder="Username"
           />

           <input type="password"
                  placeholder="Password"
           />

           <input type="submit"
                  value="Login"
           />
      </form>
    );
  }
});

module.exports = LoginForm;
