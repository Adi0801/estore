import { Routes, Route } from "react-router-dom";
import "./App.css";
import CatNav from "./Components/CatNav";
import TopNav from "./Components/TopNav";
import LandingPage from "./Components";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
