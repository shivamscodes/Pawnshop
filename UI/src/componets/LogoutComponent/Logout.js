import "./Logout.css"

import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


const Logout = () => {

  const navigate = useNavigate();
  const showConfirm = true;

  const handleYes = () => {

     localStorage.removeItem("token");
    localStorage.removeItem("_id");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("mobile");
    localStorage.removeItem("address");
    localStorage.removeItem("city");
    localStorage.removeItem("gender");
    localStorage.removeItem("role");
    localStorage.removeItem("info");
      navigate("/login");
    // localStorage.clear();
   toast.success("Logout Successfully");

  };

  const handleNo = () => {

    navigate(-1);

  };

  
    return (
   
 
      <>
      {showConfirm && (
        <div style={{
          position:"fixed",
          top:"0",
          left:"0",
          width:"100%",
          height:"100%",
          background:"rgba(0,0,0,0.5)",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>

          <div style={{
            background:"white",
            padding:"30px",
            borderRadius:"10px",
            textAlign:"center"
          }}>

            <h3>Do you want to logout?</h3>

            <button onClick={handleYes} style={{margin:"10px"}}>
              Yes
            </button>

            <button onClick={handleNo} style={{margin:"10px"}}>
              No
            </button>

          </div>

        </div>
      )}
      {/* <Navigate to='/login'/> */}

    </>
    

    
  )
}

export default Logout
