
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Products from './components/Products';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Product from './components/Product';


function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products } />
        <Route exact path="/products/:id" component={Product } />
        <Route exact path="/about" component={About } />


      </Switch>
      


    </>
  );
}

export default App;
