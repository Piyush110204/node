import React, { useEffect, useState } from "react";
import Header from "./Header";
import WebApis from "./WebApis";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShowCart() {
    const navigate = useNavigate();
    let [cart, setCart] = useState([]);
    let [totalPrice,setTotalPrice] = useState(0);
    useEffect(() => {
        getCart();
    }, [])
    const calculateTotalPrice = (cart) => {
        let totalPrice = 0;
        for(let item of cart) {
            totalPrice += item.quantity * item.productId.price;
            console.log(item);
        };
        console.log(cart.length);
        setTotalPrice(totalPrice);
    }
    
    const getCart = async () => {
        try {
            let user = JSON.parse(sessionStorage.getItem('user'));
            console.log(user._id)
            const response = await axios.post(WebApis.getCart, { userId: user._id });
            setCart(response.data.cart[0].cartItems);
            calculateTotalPrice(response.data.cart[0].cartItems);
        } catch (error) {
            console.error("Err fetching cart data:", error);
        }
    }
    const producyQuantity = async (productId, quantity) => {
        try {
            let user = JSON.parse(sessionStorage.getItem('user'));
            console.log(productId);
            let response = await axios.post(WebApis.productQuantity, { productId, userId: user._id, quantity });
            const updatedCart = cart.map(item => {
                if (item.productId._id === productId) {
                    return { ...item, quantity: item.quantity + quantity };
                }
                return item;
            });
            setCart(updatedCart);
            response = await axios.post(WebApis.getCart, { userId: user._id });
            calculateTotalPrice(response.data.cart[0].cartItems);

        } catch (err) {
            console.log(err);
        }
    }
    return <>
        <Header />
        <div className="d-flex">
    <div className="container row row-cols-6 py-4  ">
        <div className="col py-4 border border-danger d-flex justify-content-center align-items-center" style={{ fontWeight: 'bold',borderRadius:'10px 0px 0px 0px' }}>S.No</div>
        <div className="col py-4 border border-danger d-flex justify-content-center align-items-center" style={{ fontWeight: 'bold' }}>Name</div>
        <div className="col py-4 border border-danger d-flex justify-content-center align-items-center" style={{ fontWeight: 'bold' }}>Price</div>
        <div className="col py-4 border border-danger d-flex justify-content-center align-items-center" style={{ fontWeight: 'bold' }}>Quantity</div>
        <div className="col py-4 border border-danger d-flex justify-content-center align-items-center" style={{ fontWeight: 'bold' }}>Total Price</div>
        <div className="col py-4 border border-danger d-flex justify-content-center align-items-center" style={{ fontWeight: 'bold',borderRadius:'0px 10px 0px 0px' }}>Image</div>
        {cart.map((product, index) => (
            product.quantity > 0 && (
                <React.Fragment key={product.productId._id}>
                    <div className="col py-2 border border-danger d-flex justify-content-center align-items-center">
                        <span>{index + 1}</span>
                    </div>
                    <div className="col py-2 border border-danger  d-flex justify-content-center align-items-center">
                        <span>{product.productId.title}</span>
                    </div>
                    <div className="col py-2 border border-danger  d-flex justify-content-center align-items-center">
                        <span>₹ {product.productId.price}</span>
                    </div>
                    <div className="col py-2 border border-danger  d-flex justify-content-center align-items-center">
                        <span>
                            <button style={{ fontWeight: 'bold' }} onClick={() => producyQuantity(product.productId._id, -1)} className="btn btn-danger">-</button>
                            <span className="px-2" style={{ display: 'inline-block' }}>{product.quantity}</span>
                            <button onClick={() => producyQuantity(product.productId._id, 1)} style={{ fontWeight: 'bold' }} className="btn btn-success">+</button>
                        </span>
                    </div>
                    <div className="col py-2 border border-danger  d-flex justify-content-center align-items-center">
                        <span>₹ {product.productId.price * product.quantity}</span>
                    </div>
                    <div className="col py-2 border border-danger  d-flex justify-content-center align-items-center">
                        <span><img src={product.productId.thumbnail} alt="" style={{ width: '80px', height: '80px',borderRadius:'50%' }} /></span>
                    </div>
                </React.Fragment>
            )
        ))}
    </div>
    <div className="py-4">
        <div style={{border:'1px solid grey',borderRadius:'10px'}} className="p-3">
            <p style={{ fontSize: '12px', color: 'blue' }}>Part of your order qualifies for FREE Delivery. Choose FREE Delivery option at checkout.</p>
            <h4>Total Product : {cart.filter((item)=>item.quantity>0).length}</h4>
            <h3>Total Price : <sapn className="text-success">₹  {totalPrice}</sapn></h3>
            <button className="btn btn-warning py-1 m-auto ">Procees To Pay</button>
        </div>
    </div>
</div>

    </>
}
export default ShowCart;