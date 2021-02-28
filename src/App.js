import React from 'react';
import Navbar from './components/Navbar';
import {Footer} from './components/Footer';
import Home from './routes/Home';
import Blog from './routes/Blog';
import Blogs from './routes/Blogs';
import SignIn from './routes/SignIn';
import Upload from './routes/Upload';
import { Info } from './routes/Intro/Info'
import { Trailer } from './routes/Trailer';
import { Construction } from './routes/Construction';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Navbar />
        <Route path='/coming' component={Construction} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/info' component={Info} />
        <Route path='/upload' component={Upload} />
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
