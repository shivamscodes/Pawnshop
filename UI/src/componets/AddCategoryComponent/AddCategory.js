import { useState } from 'react'
import './AddCategory.css'

import axios from 'axios';
import { __categoryapiurl } from '../../API_URL';

import { toast } from "react-toastify";


const AddCategory = () => {

  const [output , setOutput] = useState("");
  const [catnm , setcatnm] = useState("");
  const [File , setFile] = useState(null);

  const handelChange = (e)=>{
    setFile(e.target.files[0]);
  }

  const handleSubmit = (e)=>{
   
    if(!catnm ){
      setOutput("category is  reqired");
      return;
    }

    if(!File){
       setOutput("File is  reqired");
      return;
    }

    const formdata = new FormData();
    formdata.append('catnm',catnm);
    formdata.append('caticon',File);
    axios.post(__categoryapiurl + "save", formdata,{
      'Content-Type' : 'multipart/form-data'
    }
    ).then((response)=>{
      console.log(response.data);
      // setOutput("Category added successfully");
      toast.success("Category added successfully");
    setcatnm("");
    setFile(null);   
    }).catch((error)=>{
     setOutput("Category not added successfully");
     toast.error("Category not added successfully")
  })
  }


  return (
    <section className="templatemo-container light-gray-bg section-shadow-bottom">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-uppercase text-center">
                        <h2 className="section-title">🎐 Add Category Here 🎐</h2>
                        <div className="section-title-underline-blue"></div>
                        <hr className="section-title-underline"/>
                    </div>
                </div> 

                 <div  className="form-wrapper">
                        <h3 className="section-title-2 text-uppercase font-weight-300">Enter the Details : </h3>
                        <form className="login-form">
                            <div className="tm-contact-form">
                           <font color="blue" >{ output }</font>
                                    <br/>
                                                                     
                                    <label>Category Name :</label>
                                    <input type="text" className="form-control" onChange={(e)=>setcatnm(e.target.value)} value={catnm} required/>
                                 <br/>
                                 <label>Category Icon :</label>
                                 <input type='file'className="form-control" onChange={handelChange} required/>
                                    <br/>
                               
                               
                                <button type="button"  onClick={handleSubmit}>Add category</button>

                            </div>
                        </form>
                    </div>

              
            </div>
        </section>


  )
}

export default AddCategory;
