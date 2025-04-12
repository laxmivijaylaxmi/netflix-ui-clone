import React, { useState } from "react";
import { login, signup } from "../../FirBase";
import logo from "../../assets/logo.png"; 
import "./Login.css"
import  {ToastContainer ,toast} from  "react-toastify"

const Login = () => {
  const [show, setShow] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAction = async (e) => {
    e.preventDefault(); // Prevent form reload
    if (show === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="logo" className="login-logo" />
      <div className="login-form">
        <h1>{show}</h1>
        <form onSubmit={handleAction}>
          {show === "Sign Up" && (
            <input
              value={name}
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          )}

          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">{show}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {show === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setShow("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setShow("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
