import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const linkStyle = {
        color: "white",
        textDecoration: "none"
    };
    function logout() {
        sessionStorage.clear();
        navigate('/');
    }
    return (
        <>
            <div className=" header container-fluid d-flex justify-content-around align-items-center ">
                <Link style={linkStyle} to="/">
                    Home
                </Link>
                <Link style={linkStyle} to="/">
                    Product
                </Link>

                {sessionStorage.getItem('user') ?
                    <>
                        <Link style={linkStyle} to="/cart">
                            Cart
                        </Link>
                        <span onClick={logout}>LogOut</span>
                    </> :
                    <Link style={linkStyle} to="/signin">
                        Sign In
                    </Link>
                }

            </div>
        </>
    );
}

export default Header;
