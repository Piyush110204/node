import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { FaStar ,FaStarHalf} from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import starGenerate from "./GenerateRating";
function ShowProduct() {
    const location = useLocation()
    const product = location.state.product;
    const navigate=useNavigate();
    console.log(product);
    function swapImages(smallImageId) {
        let mainImage = document.getElementById("mainImage");
        let temp = mainImage.getAttribute('src');
        mainImage.setAttribute('src', smallImageId.getAttribute('src'))
        smallImageId.setAttribute('src', temp);
    }
    return <>
        <Header />
        <div className="container-fluid d-flex m-4" >
            <div>
                <img onDoubleClick={()=>navigate('/')} alt="" id="mainImage" src={product.thumbnail} style={{ height: "400px", width: "600px" }} />
                <br />
                {product.images.slice(0, 4).map((image, index) => (
                    <img alt="sdsas" key={index} onClick={(event) => swapImages(event.target)} className="py-3 ps-2" src={image} style={{ height: "150px", width: "150px" }} />
                ))}

            </div>
            <div className="ms-5 py-5">
                <h1>{product.title}</h1>
                <span style={{ fontSize: "20px" }}><b>Brand : {product.brand}</b><br />{product.description}</span>
                <br /><span style={{ fontSize: "24px", marginTop: "30px", display: "block", marginLeft: "0px" }}>₹ {product.price}</span>
                <del><span style={{ fontSize: "14px", display: "block", marginLeft: "0px" }}>
                    ₹ {Math.round(product.price * (1 + product.discountPercentage / 100) * 100) / 100}
                </span></del>
                <span className="my-2 d-block">
                    {starGenerate(product.rating)}
                </span>
                <span className="my-2 d-block">Category : {product.category}</span>
            </div>
        </div>
    </>
}
export default ShowProduct;