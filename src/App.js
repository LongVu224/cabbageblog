import React, {useState} from 'react';
import ScrollToTop from './components/helper/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Modal } from './components/Modal2/Modal';
import Home from './routes/Home';
import Blog from './routes/Blog';
import Blogs from './routes/Blogs';
import SignIn from './routes/SignIn';
import Upload from './routes/Upload';
import { Info } from './routes/Intro/Info'
import Contact from './routes/Intro/Contact/Contact.component';
import { Trailer } from './routes/Trailer';
import Construction from './routes/Construction';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div>
      <Switch>
        <ScrollToTop />
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        <Navbar />
        <Route path='/coming' component={Construction} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/info' component={Info} />
        <Route path='/contact' component={Contact} />
        <Route path='/upload' component={Upload} />
        <Route path='/trailer' component={Trailer} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/blog/:id' component={Blog} />
        <Route path='/' exact component={Home} />
        <Footer openModal={openModal} />
      </Switch>
    </div>
  );
}

export default App;
