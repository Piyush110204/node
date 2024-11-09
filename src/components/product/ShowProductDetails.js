import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import starGenerate from "./GenerateRating";
import '../style/productDetails.css'

function ShowProductDetails() {
    const location = useLocation();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setProduct(location.state.product);
    }, [])
    return <>
        {product &&
            <div className="container my-5">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">

                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img src={'http://localhost:3000/images/' + product.imageURL} /></div>
                                </div>


                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{product.title}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        {starGenerate(product.rating)}
                                    </div>
                                    <span className="review-no">41 reviews</span>
                                </div>
                                <p className="product-description">{product.description}</p>
                                <h4 className="price">current price : <span>₹ {product.price}</span></h4>
                                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                <h5 className="sizes">Category :
                                    {product.category && <span className="size" data-toggle="tooltip" style={{ fontSize: '20px', fontWeight: '500' }} title="small">{product.category.name}</span>}
                                </h5>
                                <div className="action">
                                    <button className="add-to-cart btn btn-default my-2 me-4" type="button">add to cart</button>
                                    <button className="like btn btn-default" type="button">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <h4>Comment .... </h4>
                    <textarea id='comment' className="form-control border border-secondary"></textarea>
                </div>
                <button className="btn btn-secondary">Sumbit</button>
            </div>
        }
    </>
}
export default ShowProductDetails;