import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import Homepage from './customer/pages/Homepage/Homepage';
import Footar from './customer/components/Footar/Footar';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';



function App() {
  return (
    <div className="">
      <Navigation/>

     <div>
      
      {/* <Homepage/> */}
     {/* <Product/> */}
     <ProductDetails/>
     </div>
    <Footar/>
    </div>
  
  );
}

export default App;
