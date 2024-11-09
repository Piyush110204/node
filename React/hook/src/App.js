import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Product from "./components/Product";
import RecentProduct from "./components/RecentProduct";
import FeaturedProduct from "./components/FeaturedProduct";
import PageNotFound from "./components/pageNotFound";

export default function App(){
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}>
        <Route index element={<RecentProduct/>}/>
        <Route path="featured-product" element={<FeaturedProduct/>}/>
      </Route>
      <Route path="/feedback" element={<Feedback/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </>
}