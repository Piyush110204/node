import Header from "./Header";

function Cart() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const cart = user.product;
    return <>
        <Header />
        <div className="container row row-cols-4 py-4">
            <div className="col py-4 border border-dark" style={{fontWeight:'bold'}}>S.No</div>
            <div className="col py-4 border border-dark" style={{fontWeight:'bold'}}>Name</div>
            <div className="col py-4 border border-dark" style={{fontWeight:'bold'}}>Price</div>
            <div className="col py-4 border border-dark" style={{fontWeight:'bold'}}>Image</div>
            {cart.map((product, index) => (<>
                <div className="col py-2 border border-dark" key={index}> {index + 1}</div>
                <div className="col py-2 border border-dark">{product.title}</div>
                <div className="col py-2 border border-dark">₹ {product.price}</div>
                <div className="col py-2 border border-dark"><img src={product.thumbnail} alt="" style={{width:'100px',height:'100px'}}/></div>
            </>))}
        </div>

    </>
}
export default Cart;