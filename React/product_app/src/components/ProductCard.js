import { useNavigate } from "react-router-dom";
import Header from "./Header";
import starGenerate from "./GenerateRating";
function ProductCard({removeProduct,productList,addToCart}) {
    const navigate=useNavigate();
    function showProduct(product){
        navigate(`show-product`,{state:{product}});
    }
    
    return <>
    <Header/>
        <div className="container-fluid row row-cols-4 m-0 p-0" id="product" >
            {productList.map((product, index) => <div key={index} className="col my-3 bg-light p-2 text-center" style={{ border: "1px solid grey" }}>
                <img  onClick={()=>showProduct(product)} alt="" src={product.thumbnail} className="img-fluid" style={{ height: "300px", width: "300px" }} />
                <h4 className="pt-2">{product.title}</h4>
                <span>Price : ₹{product.price}</span><br />
                <span className="my-2 d-block">
                    {starGenerate(product.rating)}
                </span>
                {/* <button onClick={() => removeProduct(index)} className="btn btn-outline-danger">Delete</button> */}
                <button onClick={()=>addToCart(product)} className="btn btn-outline-success">Add To Cart</button>
            </div>)}
        </div>
    </>

}
export default ProductCard;