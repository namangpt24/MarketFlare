import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage.js";
import AboutUs from "./pages/AboutUs.js";
import Contact from "./pages/Contact.js";
import Policy from "./pages/Policy.js";
import Forgotpass from "./pages/Auth/Forgotpass.js";
import PageNotFound from "./pages/PageNotFound.js";
import Register from "./pages/Auth/Register.js";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Auth/Login.js";
import CartPage from "./pages/CartPage.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}/>
        <Route path="/Register" element={<Register></Register>}/>
        <Route path="/forgot-password" element={<Forgotpass></Forgotpass>}/>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/About" element={<AboutUs></AboutUs>}/>
        <Route path="/Contact" element={<Contact></Contact>}/>
        <Route path="/Policy" element={<Policy></Policy>}/>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}/>
      </Routes>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
