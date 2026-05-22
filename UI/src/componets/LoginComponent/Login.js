import "./Login.css";

import { useEffect, useState } from "react";
import axios from "axios";

import { __userapiurl } from "../../API_URL";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [output, setOutput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let newCaptcha = "";

    for (let i = 0; i < 6; i += 1) {
      newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setCaptcha(newCaptcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = () => {
    if (!email) {
      setOutput("email is required");
      return;
    }

    if (!password) {
      setOutput("password is required");
      return;
    }

    if (!userCaptcha) {
      setOutput("captcha is required");
      return;
    }

    if (userCaptcha !== captcha) {
      setOutput("Invalid Captcha");
      return;
    }

    const userDetails = { email, password };

    axios
      .post(`${__userapiurl}login`, userDetails)
      .then((response) => {
        const user = response.data.info;

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", user.name);
        localStorage.setItem("email", user.email);
        localStorage.setItem("mobile", user.mobile);
        localStorage.setItem("address", user.address);
        localStorage.setItem("city", user.city);
        localStorage.setItem("gender", user.gender);
        localStorage.setItem("info", user.info);
        localStorage.setItem("role", user.role);

        if (user.role === "admin") {
          navigate("/admin");
          toast.success("Welcome Admin");
          return;
        }

        navigate("/user");
        toast.success("Welcome User");
      })
      .catch((error) => {
        const message = error?.response?.data?.message || "Invalid User";
        setOutput(message);
        toast.error(message);
        setEmail("");
        setPassword("");
        setUserCaptcha("");
        generateCaptcha();
      });
  };

  return (
    <section className="templatemo-container light-gray-bg section-shadow-bottom">
      <div className="container">
        <div className="row section-title-container">
          <div className="col-lg-12 text-uppercase text-center">
            <h2 className="section-title">Login Here</h2>
            <div className="section-title-underline-blue"></div>
            <hr className="section-title-underline" />
          </div>
        </div>

        <div className="form-wrapper">
          <h3 className="section-title-2 text-uppercase font-weight-300">Enter the Details</h3>
          <form className="login-form">
            <div className="tm-contact-form">
              <font color="blue">{output}</font>
              <br />

              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <br />

              <label>Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              <br />
              <label>
                <input
                  type="checkbox"
                  onChange={() => setShowPassword(!showPassword)}
                />{" "}
                Show Password
              </label>
              <br />
              <br />

              <font color="blue">
                <Link to="/forgetpassword">Forget Password</Link>
              </font>

              <br />
              <br />

              <div className="captcha-container">
                <label>Captcha:</label>

                <div className="captcha-box">{captcha}</div>

                <input
                  type="text"
                  className="captcha-input"
                  placeholder="Enter Captcha"
                  onChange={(event) => setUserCaptcha(event.target.value)}
                  value={userCaptcha}
                />

                <button
                  type="button"
                  className="captcha-refresh"
                  onClick={generateCaptcha}
                >
                  Refresh
                </button>
              </div>

              <br />
              <br />
              <br />
              <center>
                <button style={{ width: "160px" }} type="button" onClick={handleSubmit}>
                  Login
                </button>
              </center>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
