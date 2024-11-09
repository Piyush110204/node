import React from "react";
import { Link, useNavigate} from "react-router-dom";

function Header() {
    const linkStyle = {
        color: "white",
        textDecoration: "none",
        cursor:'pointer'
    };
    const navigate=useNavigate();
    return (
        <>
            <div className=" header container-fluid d-flex justify-content-around align-items-center ">
                <Link style={linkStyle} to="/">
                    Home
                </Link>
                <Link style={linkStyle} to="/">
                    Product
                </Link>
                {sessionStorage.getItem('user') ?<><Link style={linkStyle} to='/cart'>Cart</Link><span onClick={()=>{
                    sessionStorage.clear();
                    navigate('/');
                }} style={linkStyle}>Log Out</span></> :<>
                <Link style={linkStyle} to='/signIn'>
                    SignIn
                </Link>
                <Link style={linkStyle} to='/signUp'>
                    SignUp
                </Link>
                </>}

            </div>
        </>
    );
}

export default Header;
