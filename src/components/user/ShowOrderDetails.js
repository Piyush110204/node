import axios from "axios";
import { useEffect, useState } from "react";
import Api from "../WebApi/Api";

function ShowOrderDetails() {
    let [user, setUser] = useState({});
    let [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem('user-details')));
        getOrderDetails();
    }, []);

    const getOrderDetails = async () => {
        try {
            let response = await axios.post(Api.getOrderDetails, { userId: JSON.parse(sessionStorage.getItem('user-details'))._id });
            setOrderDetails(response.data.orders);
            console.log(response.data.orders)
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="container">
            {orderDetails.map((order, index) => {
                // Format the order date
                const orderDate = new Date(order.orderDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                });

                return (
                    <>
                        <h4 className="my-3">Order Date: {orderDate}</h4>
                        <table key={index} className="table my-5 table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">S.no</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.products.map((product, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{product.product.title}</td>
                                            <td>{product.product.price}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.quantity * product.product.price}</td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <th scope="col" className="ps-4 " colSpan="4">Total Price</th>
                                    <th colSpan="1">{order.totalAmount}</th>
                                </tr>
                            </tbody>
                        </table>
                    </>
                );
            })}
        </div>


    );
}

export default ShowOrderDetails;
