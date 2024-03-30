import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>  
        <Route path="/" element={<ProductListing />} /> 
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route>404 Not found</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
