import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import TopMenu from './components/TopMenu';
import LandingPage from './components/LandingPage';
import Signup from './components/singup';
import ProductPage from './components/ProductPage';
import Login from './components/login';
import Contact from './components/contact';
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div>
        
        <TopMenu />
        <div className="container">
        <Switch>
            <Route path="/home" exact component={LandingPage} />
            <Route path="/signup"  component={Signup} />
            <Route path="/checkout"  component={Checkout} />

            <Route path="/login"  component={Login} />
            <Route path="/products" component={ProductPage}/>
            <Route path="/contact"  component={Contact} />
            <Redirect to='/home' />
          </Switch>
        </div>
        </div>
      
      <Footer />
    </Router>
    

  );
}

export default App;
