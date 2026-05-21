import './ResetPassword.css';

import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios';
import { __userapiurl } from '../../API_URL';


const ResetPassword = () => {

    const params = useParams();

    const [output , setOutput] = useState();  
    const [password , setPassword] =useState();
    const [confirmPassword , setConfirmPassword] = useState();


    const handleSubmit = (e) =>{
      


        if(password === "" ){
            setOutput("password fields  is required");
            return;
        }

        
        if( confirmPassword === ""){
            setOutput("confirmpassword fields is required");
            return;
        }
        
        if(password !== confirmPassword){
            setOutput("Password and confirm password not matching check again");
            return;
        }

        axios.patch(__userapiurl + "update",{
           "condition_obj" : {"email" : params.email }, 
           "content_obj": {"password" : password}
        }).then((result)=>{
           if(result.data.status === true){
            setOutput("Password changed successfully. Redirecting...");
            window.location.href = "/login";
           }
           else{
            setOutput("error in reseting password");
           }
        })
        .catch(()=>{
            setOutput("Error Updating Password")
        })
    }

return (


// <section className="templatemo-container light-gray-bg section-shadow-bottom">
//             <div className="container">
//  <div className="row section-title-container">
//                     <div className="col-lg-12 text-uppercase text-center">
//                         <h2 className="section-title">Reset Password Here</h2>
//                         <div className="section-title-underline-blue"></div>
//                         <hr className="section-title-underline"/>
//                     </div>
//                 </div> 
//                 <div className="form-wrapper">
//                     <h3 className="section-title-2 text-uppercase font-weight-300">
//                         Enter The Password
//                     </h3>
//                   <form className="login-form">
//                      <div className="tm-contact-form">
//                     <font color="blue">{output}</font>
//                     <br/><br/>

//                     <label>New Password:</label>
//                     <input 
//                         type="password"
//                         className="form-control"
//                         onChange={(e)=>setPassword(e.target.value)}
//                         value={password}
//                     />

//                     <br/>

//                     <label>Confirm Password:</label>
//                     <input 
//                         type="password"
//                         className="form-control"
//                         onChange={(e)=>setConfirmPassword(e.target.value)}
//                         value={confirmPassword}
//                     />

//                     <br/>

//                     <button type="button" onClick={handleSubmit}>
//                         Change Password
//                     </button>

//                 </div>
//                 </form>
//                 </div>
//             </div>
//         </section>

        <section className="rp-container">
  <div className="rp-inner">
    
    <div className="rp-title-box">
      <h2 className="rp-main-title">Reset Password Here</h2>
      <div className="rp-underline-blue"></div>
      <hr className="rp-underline"/>
    </div>

    <div className="rp-form-wrapper">
      <h3 className="rp-sub-title">
        Enter The Password
      </h3>

      <form className="rp-form">
        <div className="rp-contact-form">

          <span className="rp-output">{output}</span>
          <br/><br/>

          <label>New Password:</label>
          <input
            type="password"
            className="rp-input"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />

          <br/>

          <label>Confirm Password:</label>
          <input
            type="password"
            className="rp-input"
            onChange={(e)=>setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />

          <br/>

          <button type="button" onClick={handleSubmit} className="rp-btn">
            Change Password
          </button>

        </div>
      </form>
    </div>

  </div>
</section>


)
}

export default ResetPassword