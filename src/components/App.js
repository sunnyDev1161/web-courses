import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header"
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import Featured from "./Featured";
import Courses from "./Courses";
import NotFound from "./NotFound"
const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About title="About" />} />
        <Route exact path="/teachers" render={() => <Teachers />} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;