import "../src/assets/css/style.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Products from "./pages/products";
import Footer from "./components/footer";

// import UserContext from "./components/contextProvider";
// import Memo from "./components/memo";

// let user = {
//   firstName: "Juan",
//   lastName: "fk"
// }

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/products" element={ <Products/> }/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
 