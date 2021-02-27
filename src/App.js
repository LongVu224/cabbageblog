import React from 'react';
import Navbar from './components/Navbar';
import {Footer} from './components/Footer';
import Home from './routes/Home';
import Blog from './routes/Blog';
import SignIn from './routes/SignIn';
import { Trailer } from './routes/Trailer';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Blogs from './routes/Blogs';

function App() {
  return (
    <div>
      <Switch>
        <Navbar />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/trailer' component={Trailer} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/blog/:id' component={Blog} />
        <Route path='/' exact component={Home} />
        <Footer />
      </Switch>
    </div>
  );
}

export default App;
