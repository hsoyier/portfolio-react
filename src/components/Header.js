import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Error from './Error';
import Navigation from './Navigation';

// Route should be wrapped by div tag
const Header = () => {
  return (
    <Router>
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default Header
