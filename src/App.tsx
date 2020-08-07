import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './Shared/GlobalStyle';
import Home from './pages/Home';
import Error404 from './Shared/Error404';
import Quote from './pages/Quote';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/quote`} component={Quote} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
