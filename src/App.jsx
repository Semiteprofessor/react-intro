import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/login/login";
import Timer from "./components/state";
import Counter from "./components/state";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import UserProfile from "./pages/user-profile";
import Products from "./pages/products";
import ProductDetails from "./pages/product-detail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
