var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var React = require('react');
var ReactDOM = require('react-dom');

var App = require("./components/app");

var routes = (
  <Route path="/" component={App}>

  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />, root
  );
});
