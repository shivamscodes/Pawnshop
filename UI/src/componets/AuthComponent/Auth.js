import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Auth(){

    const navigate = useNavigate();

    useEffect(()=>{

        var path = window.location.pathname;

        if(path==="/admin" || path==="/manageusers" || path==="/changepassword" || path==="/editprofile"|| path==="/addcategory"|| path==="/addsubcategory"|| path==="/viewcategory"  || path==="/forgetpassword" || path==="/resetpassword/:email" )
            {
            if(!localStorage.getItem("token") || localStorage.getItem("role")!=="admin"){
                navigate("/Login");
            }
           }
        else if(path==="/user" || path==="/addproducts" || path==="/charity" || path==="/logout"  )
            {
            if(!localStorage.getItem("token") || localStorage.getItem("role")!=="user"){
                navigate("/login");
            }
            
            else{
                if( localStorage.getItem("role")==="admin"){
                  navigate("/admin");
                } else if( localStorage.getItem("role")==="user"){
                navigate("/user");
                }else {
                navigate(path);
                }
        }
    
            }
    },[navigate]);

    return(
        <></>
    )
}

export default Auth;
