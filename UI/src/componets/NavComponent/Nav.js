import "./Nav.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem("role"));
    };

    window.addEventListener("storage", handleStorageChange);

    const intervalId = setInterval(() => {
      const currentRole = localStorage.getItem("role");

      if (currentRole !== role) {
        setRole(currentRole);
      }
    }, 500);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(intervalId);
    };
  }, [role]);

  return (
    <div className="header-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 templatemo-nav-container">
            <div
              className="mobile-menu-icon"
              style={{ border: "2px solid black", color: "white" }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Menu
            </div>

            <nav className={`templatemo-nav ${menuOpen ? "show-menu" : ""}`}>
              <ul>
                {role === "admin" && (
                  <>
                    <li>
                      <Link to="/admin">Admin Home</Link>
                    </li>
                    <li>
                      <Link to="/manageusers">Manage Users</Link>
                    </li>

                    <li className="dropdown">
                      <button type="button" className="dropbtn">
                        Settings
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/changepassword">Change Password</Link>
                        </li>
                        <li>
                          <Link to="/editprofile">Edit Profile</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <button type="button" className="dropbtn">
                        Add Category
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/addcategory">Add Category</Link>
                        </li>
                        <li>
                          <Link to="/addsubcategory">Add SubCategory</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/productreview">Review Products</Link>
                    </li>
                    <li>
                      <Link to="/transaction">View Charity</Link>
                    </li>
                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                  </>
                )}

                {role === "user" && (
                  <>
                    <li>
                      <Link to="/user">User Home</Link>
                    </li>
                    <li>
                      <Link to="/changepassword">Change Password</Link>
                    </li>
                    <li>
                      <Link to="/editprofile">Edit Profile</Link>
                    </li>
                    <li>
                      <Link to="/viewcategory">View Products</Link>
                    </li>
                    <li>
                      <Link to="/addproducts">Add Products</Link>
                    </li>
                    <li>
                      <Link to="/charity">Charity</Link>
                    </li>
                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                  </>
                )}

                {!role && (
                  <>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/service">Service</Link>
                    </li>
                    <li>
                      <Link to="/viewcategory">Browse Products</Link>
                    </li>
                    <li>
                      <Link to="/aiclient">AI Client</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
