import React from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import './App.css';
import Home from './routes/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blogs from './routes/Blogs';
import Products from './routes/Products';
import SignUp from './routes/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
