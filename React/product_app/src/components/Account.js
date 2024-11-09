import { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
function Account() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);
    const signIn = () => {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert("Sign in successful!");
            console.log(user);
            sessionStorage.setItem('user',JSON.stringify(user));
            navigate('/');
        } else {
            alert("User not found. Please sign up.");
            sessionStorage.clear();
        }
    };
    const signUp = () => {
        const user = users.some(user => user.email === email);
      
        if (user) {
          alert("User already exists");
        } else {
          const newUser = { email, password ,product : []};
          setUsers([...users, newUser]);
          localStorage.setItem("users", JSON.stringify([...users, newUser]));
          alert("sign up successful!");
          navigate('/signin');
        }
      };
      
    return <>
        <Header />
        <div className="d-flex justify-content-center align-items-center py-5">
            <div className="px-3" style={{ width: "500px", height: "270px", border: "1px solid black", borderRadius: "20px" }}>
                <h3 className="text-center">Account</h3><hr />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" className="form-control my-4" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" className="form-control my-4" />
                <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                    <button onClick={signIn} className="btn btn-info">Sign in</button>
                    <button onClick={signUp} className="btn btn-success">Sign up</button>
                </div>
            </div>
        </div>
    </>
}
export default Account;