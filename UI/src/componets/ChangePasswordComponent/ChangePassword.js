import { useState } from 'react'
import axios from 'axios';

import { __userapiurl } from '../../API_URL';

import { useNavigate } from "react-router-dom"




const ChangePassword = () => {

      const navigate = useNavigate();

       
          const [output , setOutput] = useState("");
          const [oldPassword , setOldPassword ] = useState();
          const [newPassword , setNewPassword ] = useState();
          const [confirmPassword , setConfirmPassword ] = useState();

     
    //       const handelSubmit= ()=>{
 
    //         if(!oldPassword || !newPassword || !confirmPassword){
    //             setOutput("ALL fields required");
    //             return ;
    //         }

    //         if(newPassword !== confirmPassword){
    //          setOutput("New password is not matching with confirm password");
    //          return ;
    //         }

    //         const email = localStorage.getItem("email");

    //         const data = {"email": email, "oldPassword": oldPassword , "newPassword": newPassword};

    //         axios.patch(__userapiurl+"changepassword", data).then((response)=>{
    //             setOutput("Password changed successfully");

    //   setOldPassword("");
    //   setNewPassword("");
    //   setConfirmPassword("");

    //   setTimeout(()=>{
    //     navigate("/login");
    //   },1000);
    //         }).catch((error)=>{
    //   setOutput("Old password is incorrect");
    // });


    const handelSubmit = async () => {

  if(!oldPassword ){
    setOutput("Old Password required");
    return;
  }


  if( !newPassword){
    setOutput("New Password required");
    return;
  }

  if(!confirmPassword){
    setOutput("Confirm Password required");
    return;
  }

  if(newPassword !== confirmPassword){
    setOutput("New password is not matching with confirm password");
    return;
  }

  const email = localStorage.getItem("email");

  try {

    // 🔹 Step 1: Verify old password using fetch API
    const verifyUser = await axios.get(__userapiurl + "fetch", {
      params: { email: email, password: oldPassword }
    });

    if(verifyUser.data.status){

      const user = {
        condition_obj: { email: email },
        content_obj: { password: newPassword }
      };

      // 🔹 Step 2: Update password using existing update API
      await axios.patch(__userapiurl + "update", user);

      setOutput("Password changed successfully");

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");

      setTimeout(()=>{
        navigate("/login");
      },1000);

    }

  } catch (error) {
    setOutput("Old password is incorrect");
  }

};

          


  return (
    <section className="templatemo-container light-gray-bg section-shadow-bottom">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-uppercase text-center">
                        <h2 className="section-title">Change Password Here 🔗</h2>
                        <div className="section-title-underline-blue"></div>
                        <hr className="section-title-underline"/>
                    </div>
                </div> 

                 <div  className="form-wrapper">
                        <h3 className="section-title-2 text-uppercase font-weight-300">Enter the Details</h3>
                        <form className="login-form">
                            <div className="tm-contact-form">
                           <font color="blue" >{ output }</font>
                                    <br/>
                                                                     
                                    <label>Old Password:</label>
                                    <input type="password" className="form-control" onChange={(e)=>setOldPassword(e.target.value)} value={oldPassword} />
                                 <br/>
                                 <label>New Password:</label>
                                 <input type='password'className="form-control" onChange={(e)=>setNewPassword(e.target.value)} value={newPassword} />
                                    <br/>

                                      <label>Confirm Password:</label>
                                 <input type='password'className="form-control" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} />
                                    <br/>
                               
                                <button type="button" onClick={handelSubmit}>Change Password</button>

                            </div>
                        </form>
                    </div>

              
            </div>
        </section>
  )

}



export default ChangePassword;
