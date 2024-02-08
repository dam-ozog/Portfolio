import React, { Component } from 'react';

import '../styles/App.css'
import '../styles/Navigation.css'

import Navigation from './Navigation';
import Welcome from './Welcome';
import Aboutme from './Aboutme';


class App extends Component {
  state = {}
  render() {
    return ( 
      <div className='app'>
      <header>
        {<Navigation/>}
      </header>
      <main>
        {<Welcome/>}
      </main>
      <section>
        {<Aboutme/>}
      </section>
    </div>
   );
  }
}
 
export default App;
