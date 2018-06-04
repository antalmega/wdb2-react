import React from 'react';
import {
  Switch, Route
} from 'react-router-dom';

const Home = () => (
  <div>HOMEPAGE</div>
);
const About = () => (
  <div>ABOUT</div>
);

const SwitchDemo = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Switch>
);

export default SwitchDemo;