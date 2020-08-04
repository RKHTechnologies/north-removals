import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import GlobalStyle from './Shared/GlobalStyle';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={Home} />
        </Switch>
        <Header />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
