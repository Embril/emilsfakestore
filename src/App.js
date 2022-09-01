import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {Route, Switch} from 'react-router-dom';
import Products from './Component/Products';
import Product from './Component/Product';
import Footer from './Component/Footer';
import Register from './Component/Register';
import Login from './Component/Login';
import Cart from './Component/Cart';
import "../src/Styles/styles.js"


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/products/:id" component={Product}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/cart" component={Cart}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
