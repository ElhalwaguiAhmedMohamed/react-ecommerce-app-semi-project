import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductCard from "./components/ProductCard";
import { Route, Routes } from "react-router-dom";
import ProductTable from "./components/ProductTable";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="table" element={<ProductTable />}>
          <Route path="add" element={<AddProduct />} />
          <Route path="update" element={<UpdateProduct />} />
        </Route>
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
