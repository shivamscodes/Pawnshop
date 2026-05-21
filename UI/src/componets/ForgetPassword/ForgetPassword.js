import './ForgetPassword.css';

import {  useState } from 'react'; 
import axios from 'axios';
import { __userapiurl , __resetpasswordurl} from '../../API_URL';
// import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const ForgetPassword = () => {

//    const navigate = useNavigate();
    const [output , setOutput] = useState();
    const [email , setEmail ] = useState();

     const handleSubmit=()=>{

        if(!email){
            setOutput("Email is required");
            return;
        }

    axios.get(__userapiurl+"fetch",{
        params:{"email":email}
    }).then((response)=>{
        axios.post(__resetpasswordurl,{"email":email}); 
           setOutput("Reset Link has been Sent To Your Mail");
           toast.success("rest link has send to your Mail")
           setEmail("");

    }).catch((error)=>{
        setOutput("Invalid Mail ID...")
    });
     }
  return (
    <>

     <section className="templatemo-container light-gray-bg section-shadow-bottom">
            <div className="container">
              
                 <div  className="form-wrapper">
                        <h3 className="section-title-2 text-uppercase font-weight-300">Enter the Details To Change Password</h3>
                        <form className="login-form">
                            <div className="tm-contact-form">
                           <font color="blue" >{ output }</font>
                                    <br/>
                                                                     
                                    <label>Enter Your Email:</label>
                                    <input type="email" className="form-control"   onChange={(e)=>setEmail(e.target.value)} value={email}/>
                                 <br/>
                               
                                <button type="button"  onClick={handleSubmit}>Send Mail</button>

                            </div>
                        </form>
                    </div>

              
            </div>
        </section>
    </>
  )
}


export default ForgetPassword;
