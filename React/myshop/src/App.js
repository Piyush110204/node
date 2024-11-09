import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ShowCart from "./components/ShowCart";
import ShowProduct from "./components/showProduct";

function App(){
  return <>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path='signUp' element={<SignUp/>}/>
     <Route path='signIn' element={<SignIn/>}/>
     <Route path='cart' element={<ShowCart/>}/>
     <Route path='show-product' element={<ShowProduct/>}/>
    </Routes>
  </>
}
export default App;