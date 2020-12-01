import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './components/style.css'


//import components for router
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import FooterBar from './components/FooterBar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';

const App = () => {
  /*Consider a useEffect here to fetch the images from the server and 
  then pass as props to the Portfolio so the data is loaded. We can assume visitors will want to see his work.
  We'll also need to render images on the home page, anyway.
  */


  return (
    <HashRouter>
      <main>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <FooterBar />
      </main>

    </HashRouter>
  );
};

export default App;
