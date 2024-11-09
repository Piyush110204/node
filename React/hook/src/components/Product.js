import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

function Product(){
    const navigate=useNavigate();
    return <>   
     <div className="container-fluid">
        <Header/>
        <button onClick={()=>navigate("/")} className="btn btn-danger my-3">Home</button>
        <h1>Product Page</h1>
        <div className="container">
            <Link to=""><button className="btn btn-info">Recent Product</button></Link>
            <Link to="featured-product"><button className="btn btn-secondary ms-3">Featured Product</button></Link>
        </div>
    </div>
    <hr/>
    <Outlet/>
    </>

    
}
export default Product;