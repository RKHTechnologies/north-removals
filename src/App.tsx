import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './Shared/GlobalStyle';
import Home from './pages/Home';
import Error404 from './Shared/Error404';
import Quote from './pages/Quote';
import PackagingMaterials from './pages/PackagingMaterials';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/quote`} component={Quote} />
          <Route exact path={`${process.env.PUBLIC_URL}/packaging-materials`} component={PackagingMaterials} />
          <Route exact path={`${process.env.PUBLIC_URL}/contact-us`} component={ContactUs} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
