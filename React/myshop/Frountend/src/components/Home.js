import axios from "axios";
import Header from "./Header";
import Api from "./WebApis"
import { useEffect, useState } from "react";
import starGenerate from "./GenerateRating";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Home(){
  const [productList,setProductList] = useState([]);
    useEffect(()=>{
      fatchProduct();
    },[]);
    const fatchProduct= async()=>{
       try{
           let product = await axios.get(Api.getAllProduct);
           setProductList(product.data.result);
       }
       catch(err){
          console.log(err);
       }
    }
    const navigate=useNavigate();
    function showProduct(product){
        navigate(`show-product`,{state:{product}});
    }
    const addToCart=async (productId)=>{
      let user=JSON.parse(sessionStorage.getItem('user'));
      if(!user)
      toast.success('Firstly Login');
      else{
        let userId=user._id;
      let response=await axios.post(Api.addToCart,{userId,productId});
      toast.success(response.data.message);
      }
    }
    return <>
        <Header />
        <ToastContainer/>
        <div className="container-fluid row row-cols-4 m-0 p-0" id="product" >
            {productList.map((product, index) => <div key={index} className="col my-3 bg-light p-2 text-center" style={{ border: "1px solid grey" }}>
                <img onClick={()=>showProduct(product)} alt="" src={product.thumbnail} className="img-fluid" style={{ height: "300px", width: "300px" }} />
                <h4 className="pt-2">{product.title}</h4>
                <span>Price : ₹{product.price}</span><br />
                <span className="my-2 d-block">
                    {starGenerate(product.rating)}
                </span>
                {/* <button onClick={() => removeProduct(index)} className="btn btn-outline-danger">Delete</button> */}
                <button className="btn btn-outline-success" onClick={()=>addToCart(product._id)}>Add To Cart</button>
            </div>)}
        </div>
    </>
}
export default Home;