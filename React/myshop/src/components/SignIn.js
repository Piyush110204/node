import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import WebApis from "./WebApis";
import Header from "./Header";

function SignIn() {
    let emailInput = useRef();
    let passwordInput = useRef();
    const handleSignIn = async () => {
        try {
            let email = emailInput.current.value;
            let password = passwordInput.current.value;
            let user = await axios.post(WebApis.signIn, { email, password })
            console.log(user.data.user);
            console.log(user.data.message);
            sessionStorage.setItem('user', JSON.stringify(user.data.user));
            navigate('/');
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    const navigate = useNavigate();

    return <>
        <Header />
        <div className="d-flex justify-content-center align-items-center py-5">
            <div className="px-3" style={{ width: "500px", height: "270px", border: "1px solid black", borderRadius: "20px" }}>
                <h3 className="text-center">Account</h3><hr />
                <input type="email" ref={emailInput} placeholder="Enter Your Email" className="form-control my-4" />
                <input type="password" ref={passwordInput} placeholder="Enter Your Password" className="form-control my-4" />
                <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                    <button onClick={handleSignIn} className="btn btn-info">Sign in</button>
                    <span onClick={() => navigate('/signUp')} style={{ color: "blue", textDecoration: 'underline', cursor: 'pointer' }}>Create account</span>
                </div>
            </div>
        </div>

    </>
}
export default SignIn;