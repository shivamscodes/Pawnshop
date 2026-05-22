import "./Register.css";
import { useState } from "react";
import axios from "axios";

import { __userapiurl } from "../../API_URL";

import { toast } from "react-toastify";

const Register = () => {
  const [output, setOutput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    if (!name) {
      setOutput("name is required");
      return;
    }

    if (!email) {
      setOutput("email is required");
      return;
    }

    if (!password) {
      setOutput("password is required");
      return;
    }

    if (!mobile) {
      setOutput("mobile is required");
      return;
    }

    if (!city) {
      setOutput("city is required");
      return;
    }

    if (!address) {
      setOutput("address is required");
      return;
    }

    if (!gender) {
      setOutput("gender is required");
      return;
    }

    const userDetails = {
      name,
      email,
      password,
      mobile,
      address,
      city,
      gender,
    };

    axios
      .post(`${__userapiurl}save`, userDetails)
      .then((response) => {
        setOutput(response.data.message || "registered successfully");
        toast.success("User registered successfully");

        setName("");
        setPassword("");
        setEmail("");
        setMobile("");
        setAddress("");
        setCity("");
        setGender("");
      })
      .catch((error) => {
        const message = error?.response?.data?.message || "User registration failed";
        setOutput(message);
        toast.error(message);
      });
  };

  return (
    <section className="templatemo-container light-gray-bg section-shadow-bottom">
      <div className="container">
        <div className="row section-title-container">
          <div className="col-lg-12 text-uppercase text-center">
            <h2 className="section-title">Register Here</h2>
            <div className="section-title-underline-blue"></div>
            <hr className="section-title-underline" />
          </div>
        </div>
        <div className="form-wrapper">
          <h3 className="section-title-2 text-uppercase font-weight-300">Enter the Details :</h3>
          <form className="login-form">
            <div className="tm-contact-form">
              <font color="blue">{output}</font>
              <br />
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
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
                type="password"
                className="form-control"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              <br />

              <label>Mobile:</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setMobile(event.target.value)}
                value={mobile}
              />
              <br />

              <label>Address:</label>
              <textarea
                className="form-control"
                onChange={(event) => setAddress(event.target.value)}
                value={address}
              ></textarea>
              <br />

              <label>City:</label>
              <select
                className="form-control"
                onChange={(event) => setCity(event.target.value)}
                value={city}
              >
                <option value="">Select City</option>
                <option value="Indore">Indore</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Ujjain">Ujjain</option>
              </select>
              <br />

              <label>Gender:</label>
              {" Male "}
              <input
                type="radio"
                name="gender"
                onChange={(event) => setGender(event.target.value)}
                value="male"
                checked={gender === "male"}
              />
              {"  "}
              {"Female "}
              <input
                type="radio"
                name="gender"
                onChange={(event) => setGender(event.target.value)}
                value="female"
                checked={gender === "female"}
              />
              <br />
              <br />
              <br />

              <button type="button" onClick={handleSubmit}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
