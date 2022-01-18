import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './components/style.css'


//import components for router
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import FooterBar from './components/FooterBar';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

const App = () => {

  return (
    <HashRouter>
      <main>
        <FooterBar />
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </HashRouter>
  );
};

export default App;
