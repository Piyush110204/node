import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Api from "./WebApis"
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function SignUp() {
    let navigate = useNavigate();
    let emailInput = useRef();
    let usernameInput = useRef();
    let passwordInput = useRef();
    let contactInput = useRef();
    const handleSignUp = async () => {
        let username = usernameInput.current.value;
        let email = emailInput.current.value;
        let password = passwordInput.current.value;
        let contact = contactInput.current.value;
        try {
            let response = await axios.post(Api.signUp, { username, email, password, contact });
            if (response.data.result) {
                alert("Account Created");
                navigate('/signIn');
            }
            else {
                toast.error(response.data.message)
                navigate('/signUp')
            }
        }
        catch (err) {
            toast.error(err.response.data.message);
            navigate('/signUp')
        }
    }

    return <>
    <Header/>
    <ToastContainer/>
        <div className="d-flex justify-content-center align-items-center py-5">
            <div className="px-3" style={{ width: "500px", height: "370px", border: "1px solid black", borderRadius: "20px" }}>
                <h3 className="text-center">Account</h3><hr />
                <input type="email" ref={emailInput} placeholder="Enter Your Email" className="form-control my-4" />
                <input type="text" ref={usernameInput} placeholder="Enter Your Username" className="form-control my-4" />
                <input type="contact" ref={contactInput} placeholder="Enter Your Contact" className="form-control my-4" />
                <input type="password" ref={passwordInput} placeholder="Enter Your Password" className="form-control my-4" />
                <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                    <button className="btn btn-success" onClick={handleSignUp}>Sign up</button>
                    <span onClick={() => navigate('/signIn')} style={{ color: "blue", textDecoration: 'underline', cursor: 'pointer' }}>Already Have an account</span>
                </div>
            </div>
        </div>
    </>
}
export default SignUp;