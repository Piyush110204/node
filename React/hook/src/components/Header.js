import { Link } from "react-router-dom";

function Header(){
    return <>
        <div className="header container-fluid d-flex justify-content-around align-items-center ">
            <Link to="/"><span>Home</span></Link>
            <Link to="/about"><span>About Us</span></Link>
            <Link to="/product"><span> Product </span></Link>
            <Link to="/feedback"><span>Feedback</span></Link>
        </div>
    </>
}
export default Header;