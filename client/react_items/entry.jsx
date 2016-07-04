var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Modal = require('react-modal');

var React = require('react');
var ReactDOM = require('react-dom');

var App = require("./components/app");
var LoginForm = require("./components/authentication/login.jsx");
var SignUpForm = require("./components/authentication/signup.jsx");

var routes = (
  <Route path="/" component={App}>
    <Route path="/login" component={LoginForm} />
    <Route path="/register" component={SignUpForm} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  Modal.setAppElement(root);
  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />, root
  );
});
