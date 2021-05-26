import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import Header from './components/Header';
import Start from './pages/Start';
import About from './pages/About';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
