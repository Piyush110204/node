import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { Route, Routes, json, useNavigate } from "react-router-dom";
import ShowProduct from "./components/ShowProduct";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Logout from "./components/Logout";
function App() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100")
      .then((result) => {
        console.log(result.data.products);
        setProductList(result.data.products)
      }).catch((error) => {
        setErrorMessage(error);
        console.log(errorMessage);
      })
  }, [])

  function addToCart(productData) {
    if (sessionStorage.getItem('user')) {
      let user = JSON.parse(sessionStorage.getItem('user'));
      console.log(user);
      if (user.product.find((product)=>product.id==productData.id)) {
        alert("Product already added");
      } else {
        user.product.push(productData);
        let localusers=JSON.parse(localStorage.getItem('users'));
        let index=localusers.findIndex((userlocal)=>userlocal.email==user.email);
        localusers[index]=user;
        localStorage.setItem('users',JSON.stringify(localusers))
        sessionStorage.setItem('user', JSON.stringify(user));
        alert("Product added");
      }
    }
    else{
      alert("Firstly Login");
      navigate('/signin');
    }
  }
  function removeProduct(index) {
    productList.splice(index, 1);
    setProductList([...productList]);
  }
  return <>
    <Routes>
      <Route path="/" element={<ProductCard removeProduct={removeProduct} productList={productList} addToCart={addToCart} />} />
      <Route path="/show-product" element={<ShowProduct />} />
      <Route path="/signin" element={<Account />} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  </>
}
export default App;