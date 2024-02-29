import React, { Component } from 'react';

import '../styles/App.css';
import '../styles/Navigation.css';
import '../styles/Projects.css';
import '../styles/Footer.css';
import '../styles/Mediaqueries.css';
import 'animate.css';

import Navigation from './Navigation';
import Welcome from './Welcome';
import Aboutme from './Aboutme';
import Project from './Project';
import Footer from './Footer';
import Intro from './Intro';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <main>{<Navigation />}</main>
        <section>{<Intro />}</section>
        <section>{<Welcome />}</section>
        <section>{<Aboutme />}</section>
        <section>{<Project />}</section>
        <footer>{<Footer />}</footer>
      </div>
    );
  }
}

export default App;
