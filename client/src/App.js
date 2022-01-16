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
  function importAll(r) {
    return r.keys().map(r);
  }

  const imagesObj = importAll(require.context('./assets/hero-images', true, /\.(png|jpe?g|svg)$/));

  //the above returns an array of objects with images on .default

  const createImagesArray = (img) => {
    const valuesToArray = [];
    img.forEach((obj) => {
      valuesToArray.push(obj.default);
    });
    return valuesToArray;
  };
  const imagesArray = createImagesArray(imagesObj);



  return (
    <HashRouter>
      <main>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" render={(props) => <Portfolio {...props} imagesArray={imagesArray} />} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <FooterBar />
      </main>
    </HashRouter>
  );
};

export default App;
