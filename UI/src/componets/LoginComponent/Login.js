import'./Login.css'

import { useState , useEffect} from 'react'
import axios from 'axios';

import { __userapiurl } from '../../API_URL';

import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';

import { toast } from "react-toastify";


const Login = () => {
       
    const navigate = useNavigate();

    
      const [output , setOutput] = useState();
     const [email ,setEmail] = useState();
    const [password, setPassword] = useState();
   const [showPassword, setShowPassword] = useState(false);



    // captcha states
    const [captcha, setCaptcha] = useState("");
    const [userCaptcha, setUserCaptcha] = useState("");



    // captcha generator
    const generateCaptcha = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let newCaptcha = "";

        for (let i = 0; i < 6; i++) {
            newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        setCaptcha(newCaptcha);
    };


    // generate captcha on page load
    useEffect(()=>{
        generateCaptcha();
    },[]);


    const handleSubmit=()=>{

       if(!email){
        setOutput("email is required");
        return;
       } 

       if(!password){
        setOutput("password is required");
        return;
       }
     
          // captcha validation
          if(!userCaptcha){
            setOutput("captcha is required ");
            return;
          }
         if(userCaptcha !== captcha){
            setOutput("Invalid Captcha");
            return;
        }


     const userDetails={"email":email, "password":password};
    //  console.log(userDetails);

     axios.post(__userapiurl+"login", userDetails).then((response)=>{
    //   setOutput("user login successfull");
    // console.log(response);
     
    const user = response.data.info;

    localStorage.setItem("token",response.data.token);
    localStorage.setItem("name", user.name);
    localStorage.setItem("email", user.email);
    localStorage.setItem("mobile", user.mobile);
    localStorage.setItem("address", user.address);
    localStorage.setItem("city", user.city);
    localStorage.setItem("gender", user.gender);
    localStorage.setItem("info", user.info);
    localStorage.setItem("role", user.role);


    if(user.role === "admin"){
    navigate("/admin")
    toast.success("Welcome Admin");
  
     }else{
        navigate("/user");
        toast.success("Welcome User");
    }



     }).catch(()=>{
        toast.error("Invalid User ❌");
    //   setOutput("invalid User");
      setEmail("");
      setPassword("");
      generateCaptcha();

     });

     };



  return (
    <section className="templatemo-container light-gray-bg section-shadow-bottom">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-uppercase text-center">
                        <h2 className="section-title">Login Here 😊</h2>
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
                                                                     
                                    <label>Email:</label>
                                    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email} />
                                 <br/>
                                 {/* <label>Password:</label>
                                 <input type='password'className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} />
                                    <br/> */}

                                    
                                    <label>Password:</label>
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password} />
                          <br/>
                          <label>
                            <input
                              type="checkbox"
                              onChange={()=>setShowPassword(!showPassword)}
                            /> Show Password
                          </label>
                          <br/><br/>

                         <font color="blue"><Link to="/forgetpassword">Forget Password</Link></font>


                               <br/><br/>


                        {/* CAPTCHA SECTION
                        <label>Captcha:</label>
                        <div style={{
                            background:"#eee",
                            padding:"10px",
                            fontSize:"22px",
                            letterSpacing:"5px",
                            fontWeight:"bold",
                            width:"160px",
                            textAlign:"center",
                            border:"1px solid gray"
                        }}>
                            {captcha}
                        </div>
                        <br/>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Captcha"
                            onChange={(e)=>setUserCaptcha(e.target.value)}/>
                        <br/>
                        <button type="button" onClick={generateCaptcha}>
                            Refresh Captcha 
                        </button> */}


                  <div className="captcha-container">

<label>Captcha:</label>

<div className="captcha-box">
  {captcha}
</div>

<input
  type="text"
  className="captcha-input"
  placeholder="Enter Captcha"
  onChange={(e)=>setUserCaptcha(e.target.value)}
/>

<button
  type="button"
  className="captcha-refresh"
  onClick={generateCaptcha}
>
Refresh🔃
</button>
</div>

                                    <br/><br/><br/>
                    <center>  <button style={{width : "160px"}} type="button"  onClick={handleSubmit}>Login</button></center>

                            </div>
                        </form>
                    </div>

              
            </div>
        </section>
  )
}

export default Login;
