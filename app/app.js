import React from 'react';
import Router from 'react-router';
import { Link, Route, RouteHandler } from 'react-router';

import './app.scss';
import FooHandler from './components/Foo.js';
import BarHandler from './components/Bar.js';

let App = React.createClass({
  render() {
    return (
      <div>

        <div className="menubar">
          <ul>
            <li>
              <Link to="app">Home</Link>
            </li>
            <li>
              <ul>
                <li>
                  <Link to="foo">Foo</Link>
                </li>
                <li>
                  <Link to="bar">Bar</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="clear" />

        <div className="main-content">
          <RouteHandler />
        </div>

      </div>
      );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="foo" path="/foo" handler={FooHandler} />
    <Route name="bar" path="/bar" handler={BarHandler} />
  </Route>
  );

Router.run(routes, function routerHandle(Handler) {
  console.log('routerHandle');
  React.render((
    <Handler />
    ), document.getElementById('react'));
});
