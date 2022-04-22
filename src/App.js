import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Product from './components/Product';
import Footer from './components/Footer';
import Login from './components/Login';
import EmailVerify from './components/EmailVerify';

const user = localStorage.getItem("token");

function App() {
  return (
      <div>
      
        <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/products" component={Product}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/user/:id/verify/:token" element={<EmailVerify/>}/>
      </Switch>
      
      <Footer/>
      
      </div>
  );
}

export default App;
