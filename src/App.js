import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Home/Header/Header';
import Login from './Components/LogIn/Login';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import Checkout from './Components/Services/service/Checkout/Checkout';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/logIn" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path = "services/service/:checkoutId" element = {<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
        
        }></Route>
        <Route path = "/*" element = {<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
