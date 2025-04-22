import Header from './Components/Header'
import './App.css';
import { Routes , Route} from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products/ProductList';
import ContactUs from './Components/Contact';
import AboutUs from './Components/About';
import Productdetail from './Components/Products/Productdetail';
import Cart from './Components/Cart';


function App() {
  return (
    <div className="App">
<Header/>
<Routes>
  <Route path ="/" element= {<Home/>}/>
  <Route path ="/ProductList" element= {<Products/>}/>
  <Route path ="/Contact" element= {<ContactUs/>}/>
  <Route path ="/Cart" element= {<Cart/>}/>
  <Route path ="/About" element= {<AboutUs/>}/>
  <Route path = "/Productdetail/:id" element={<Productdetail/>}/>

</Routes>
    </div>
  );
}

export default App;
