import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './components/style.css'


//import components for router
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import HeaderBar from './components/HeaderBar';
import About from './components/About';

const App = () => {

  return (
    <HashRouter>
      <main>
        <HeaderBar />
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </HashRouter>
  );
};

export default App;
