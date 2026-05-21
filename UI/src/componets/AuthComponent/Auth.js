import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    const adminOnlyPaths = [
      "/admin",
      "/manageusers",
      "/addcategory",
      "/addsubcategory",
      "/productreview",
      "/transaction",
    ];

    const authenticatedUserPaths = [
      "/changepassword",
      "/editprofile",
      "/logout",
    ];

    const userOnlyPaths = ["/user", "/addproducts", "/charity"];

    if (adminOnlyPaths.includes(path)) {
      if (!token || role !== "admin") {
        navigate("/login");
      }
      return;
    }

    if (userOnlyPaths.includes(path)) {
      if (!token || role !== "user") {
        navigate("/login");
      }
      return;
    }

    if (authenticatedUserPaths.includes(path)) {
      if (!token) {
        navigate("/login");
      }
    }
  }, [navigate]);

  return <></>;
}

export default Auth;
