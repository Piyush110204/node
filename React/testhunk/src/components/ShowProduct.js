import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./ProductSlice";
import starGenerate from "./GenerateRating";
import Header from "./Header";
function ShowProduct() {
    const { productList, isLoading, error } = useSelector((store) => store.product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct());
    }, [])
    return <>
        <Header />
        {console.log(productList)}
        {isLoading ? <>
            <>
                <div className="d-flex justify-content-center align-items-center" style={{height:'100vh',width:"100%"}}>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                </div>
            </>
        </> :
            <div className="container-fluid row row-cols-4 m-0 p-0" id="product" >
                {productList.map((product, index) => <div key={index} className="col my-3 bg-light p-2 text-center" style={{ border: "1px solid grey" }}>
                    <img alt="" src={product.thumbnail} className="img-fluid" style={{ height: "300px", width: "300px" }} />
                    <h4 className="pt-2">{product.title}</h4>
                    <span>Price : ₹{product.price}</span><br />
                    <span className="my-2 d-block">
                        {starGenerate(product.rating)}
                    </span>
                    {/* <button onClick={() => removeProduct(index)} className="btn btn-outline-danger">Delete</button> */}
                    <button className="btn btn-outline-success" >Add To Cart</button>
                </div>)}
            </div>
        }
    </>
}
export default ShowProduct;