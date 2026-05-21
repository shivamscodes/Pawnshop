import { useEffect, useState } from 'react'
import axios from 'axios';

import { __userapiurl } from '../../API_URL';

import { useNavigate } from 'react-router-dom';

import { toast } from "react-toastify";


const EditProfile = () => {

    const navigate = useNavigate();

    const [output , setOutput] = useState();
     const [name , setName] = useState();
     const [email ,setEmail] = useState();
    //  const [password, setPassword] = useState();
     const [mobile, setMobile] = useState();
     const [address , setAddress] = useState();
     const [city , setCity] = useState();
     const [gender , setGender] = useState();

     useEffect(()=>{
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        // setPassword(localStorage.getItem("password")); // only if stored
        setMobile(localStorage.getItem("mobile"));
        setAddress(localStorage.getItem("address"));
        setCity(localStorage.getItem("city"));
        setGender(localStorage.getItem("gender"));
     },[]);

     const handleSubmit=()=>{

        if(!name){
            setOutput("name is required");
            return;
        }
      
       
        if(!mobile){
            setOutput("Phone number is required");
            return;
        }
        
        if(!city){
            setOutput("city is required");
            return;
        }
        
        if(!address){
            setOutput("address is required");
            return;
        }

       const data = {"condition_obj": {"email": email} , "content_obj" : {"name" : name , "mobile" : mobile , "address" : address , "city" : city, "gender" : gender}};

        axios.patch(__userapiurl+"update", data).then(()=>{
            setOutput("profile updated successfully....");
             toast.success("Profile updated Successfully");
            setTimeout(()=>{
                navigate("/login")
            },1000)
            

        }).catch(()=>{
            setOutput("Profile updation failed.....");
            toast.error("Profile not updated ");
        });
     };

  return (

   <section className="templatemo-container light-gray-bg section-shadow-bottom">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-uppercase text-center">
                        <h2 className="section-title">Edit Your Profile ⚙🔩</h2>
                        <div className="section-title-underline-blue"></div>
                        <hr className="section-title-underline"/>
                    </div>
                </div>
            <div className="form-wrapper">
                        <h3 class="section-title-2 text-uppercase font-weight-300">Enter the Details : </h3>
                        <form className="login-form">
                            <div class="tm-contact-form">
                           <font color="blue" >{ output }</font>
                                    <br/><br/>


                                    <label>Name:</label>
                                    <input type="text" class="form-control" onChange={(e)=>setName(e.target.value)} value={name}/>
                                   <br/>
                                
                               
                                    <label>Email:</label>
                                    <input type="email" class="form-control"  value={email} disabled />
                                 <br/>


                                    <label>Mobile:</label>
                               <input type="text"class="form-control" onChange={(e)=>setMobile(e.target.value)} value={mobile} />
                                 <br/>

                                <label>Address:</label>
                                <textarea type="text" className="form-control" onChange={e=>setAddress(e.target.value)} value={address}></textarea>
                                <br/>
                                
                                <label>City:</label>
                                <select className="form-control" onChange={e=>setCity(e.target.value)} value={city}>
                                <option>Select City</option>
                                <option>Indore</option>
                                <option>Bhopal</option>
                                <option>Ujjain</option>  
                                </select>
                                <br/>
                                
                                <label>Gender:</label>
                              Male <input type="radio" name='gender' onChange={e=>setGender(e.target.value)} value="male" />
                               &nbsp;&nbsp;
                              Female <input type="radio" name='gender' onChange={e=>setGender(e.target.value)} value="female" />
                              <br/>  <br/> <br/>

                                <button type="button"  onClick={handleSubmit} >Update Profile</button>

                            </div>
                        </form>
                    </div>

                
            </div> 
        </section>
  )
}

export default EditProfile;
