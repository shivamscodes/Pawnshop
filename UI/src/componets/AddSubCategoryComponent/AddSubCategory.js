import { useEffect, useState } from 'react'
import './AddSubCategory.css'
import axios from 'axios';

import { __categoryapiurl, __subcategoryapiurl } from '../../API_URL';

import { toast } from "react-toastify";


const AddSubCategory= () => {

    const [output , setOutput] = useState("");
    const [catnm , setcatnm] = useState("");
    const [subcatnm , setsubcatnm] = useState("");
    const [File , setFile] = useState(null);
    const [cList , setCategoryList] = useState([]);


    useEffect(()=>{
        axios.get(__categoryapiurl+"fetch").then((response)=>{
           setCategoryList(response.data.info);
        }).catch((error)=>{
          console.log(error);
        })
    },[])


    const handelChange = (e)=>{
        setFile(e.target.files[0]);
    }

    const handleSubmit =(e)=>{
        if(!catnm ){
            setOutput("category is required");
            return;
        }


        if( !subcatnm ){
            setOutput("subcategory is required");
            return;
        }


        if( !File ){
            setOutput("file is required");
            return;
        }

        const formdata = new FormData();
        formdata.append('catnm',catnm);
        formdata.append('subcatnm',subcatnm);
        formdata.append('caticon',File);

        axios.post(__subcategoryapiurl+"save",formdata,{
            headers:{
                'Content-Type' : 'multipart/form-data'
            }
        }).then((response)=>{
            setOutput("subCategory add successfully");
            setcatnm("");
            setFile(null);
            setsubcatnm("");
            toast.success("subCategory add successfully")
        })
        .catch((error)=>{
            setOutput("subcategory not addded successfully ");
            toast.error("subCategory not add ")

        })
    }

  return (
  
     <section className="templatemo-container light-gray-bg section-shadow-bottom">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-uppercase text-center">
                        <h2 className="section-title"> 🧧🎠 Add SubCategory Here 🎠🧧</h2>
                        <div className="section-title-underline-blue"></div>
                        <hr className="section-title-underline"/>
                    </div>
                </div> 

                 <div className="form-wrapper">
                        <h3 className="section-title-2 text-uppercase font-weight-300">Enter the Details :</h3>
                        <form className="login-form">
                            <div className="tm-contact-form">
                           <font color="blue" >{ output }</font>
                                    <br/>

                                     <label>Category Name : </label>
                                    
                                    <select onChange={e=>setcatnm(e.target.value)} value={catnm} required>
                                        <option>select category</option>
                                        {
                                            cList.map((row)=>(
                                               <option> {row.catnm}</option>
                                            ))
                                        }
                                    </select>
                                 <br/> <br/>
                                                                     
                                    <label>SubCategory Name :</label>
                                    <input type="text" className="form-control" onChange={(e)=>setsubcatnm(e.target.value)} value={subcatnm} required/>
                                 <br/>
                                 <label>SubCategory Icon :</label>
                                 <input type='file'className="form-control" onChange={handelChange} required/>
                                    <br/>
                               
                               
                                <button type="button"  onClick={handleSubmit}>Add subcategory</button>

                            </div>
                        </form>
                    </div>

              
            </div>
        </section>



  )
}

export default AddSubCategory
;
