import React, { useEffect, useState } from 'react'
import './AddProduct.css'
import axios from 'axios';
import { __addproductapiurl, __categoryapiurl, __subcategoryapiurl } from '../../API_URL';
// import { useParams } from 'react-router-dom';

import { toast } from "react-toastify";


const AddProduct = () => {

    // const params = useParams();


    const [output , setOutput] = useState("")
    const [Title , setTitle] = useState("");
    const [catnm , setCatnm] = useState("");
    const [SubCatnm , setSubCatnm] = useState("");
    const [ProDesc , setProDesc] = useState("");
    const [file , setfile] = useState(null);
    const [expec , setExpec] = useState("");

    const [catList , setCatList] = useState([]);
    const [subcatList , setSubCatList] = useState([]);
    
    //category
    useEffect(()=>{
    axios.get(__categoryapiurl+"fetch").then((response)=>{
       setCatList(response.data.info);
    }).catch((error)=>{
        console.log(error);
    })
    },[])

    
    //subcategory
    useEffect(()=>{
       
        if(catnm !== ""){

            //  axios.get(__subcategoryapiurl+"fetch",{
            //     params : {"catnm" : params.catnm}
            //  }).then((response)=>{
            //     setSubCatList(response.data.info);
            //  }).catch((error)=>{
            //     console.log(error);
            //  })

 axios.get(__subcategoryapiurl+"fetch?catnm="+catnm)
             .then((response)=>{
                setSubCatList(response.data.info);
             }).catch((error)=>{
                console.log(error);
             })
        }
    },[catnm]);
    



    const handelChange = (e)=>{
    
        const selectedFile = e.target.files[0];

        if(selectedFile.type === "application/pdf"){
            setfile(selectedFile);
        }else{
            setOutput("Only pdf file required");
            e.target.value = "";
            setfile(null);
        }
    }

    
    const handelSubmit = ()=>{

        if(Title===""){
            setOutput("Title is required");
            return;
        }

        if(catnm===""){
            setOutput("category is required");
        return;
        }

        if(SubCatnm===""){
            setOutput("Subcategory is required");
       return;
        }

        if(ProDesc===""){
            setOutput("Product descrition is required");
        return;
        }

        if(expec===""){
            setOutput("add your expecation");
        return;
        }

     
        let formdata = new FormData();
        
        formdata.append("title",Title);
        formdata.append("catnm", catnm)
        formdata.append("subcatnm", SubCatnm);
       formdata.append("description", ProDesc);
       formdata.append("doc",file);
       formdata.append("expectation",expec);
       formdata.append("useremail",localStorage.getItem("email"))

       axios.post(__addproductapiurl+"save",formdata,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
       }).then((response)=>{
          setOutput("product added successfully");
          setTitle("");
          setCatnm("");
          setSubCatnm("");
          setProDesc("");
          setfile(null);
          setExpec("");
          toast.success("product added successfully");
       }).catch((error)=>{
        console.log(error);
        toast.error("product not added");
       })

    }

  return (
   <>
    <section className="templatemo-container light-gray-bg section-shadow-bottom">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-uppercase text-center">
                        <h2 className="section-title"> 🛒 Add Products 🛒</h2>
                        <div className="section-title-underline-blue"></div>
                        <hr className="section-title-underline"/>
                    </div>
                </div>
            <div className="form-wrapper">
                        <h3 class="section-title-2 text-uppercase font-weight-300">Enter the Product Details : </h3>
                        <form className="login-form">
                            <div class="tm-contact-form">
                           <font color="blue" >{ output }</font>
                                    <br/><br/>


                                    <label>Title :</label>
                                    <input type="text" class="form-control" onChange={(e)=>setTitle(e.target.value)} value={Title}/>
                                   <br/>
                                
                               
                                    <label>Category Name :</label>
                                    <select className="form-control" onChange={e=>setCatnm(e.target.value)}  value={catnm}>
                                <option>Select Category</option>
                                {catList.map((row)=>(
                                    <option >{row.catnm}</option>
                                ))}
                                
                                </select>
                                 <br/>

                                 <label>SubCategory Name :</label>
                                    <select className="form-control" onChange={e=>setSubCatnm(e.target.value)} value={SubCatnm}>
                                <option>Select Category</option>
                                {subcatList.map((row)=>(
                                    <option>{row.subcatnm}</option>
                                ))}
                                
                                </select>
                                 <br/>



                                <label>Product Description :</label>
                                <textarea type="text" className="form-control" onChange={e=>setProDesc(e.target.value)} value={ProDesc}></textarea>
                                <br/>

                                
                               
                                <label> Product Description File :</label>
                                 <input type='file'className="form-control" onChange={handelChange} required/>
                                    <br/>
                                
                                <label>Expectation :</label>
                              Sell <input type="radio" name='expectation' onChange={e=>setExpec(e.target.value)} value="sell" />
                               &nbsp;&nbsp;&nbsp;&nbsp;
                              suggession <input type="radio" name='expectation' onChange={e=>setExpec(e.target.value)} value="preview" />
                              <br/>  <br/> <br/>

                                <button type="button"  onClick={handelSubmit}>Add Product</button>

                            </div>
                        </form>
                    </div>

                
            </div> 
        </section>
   </>
  )
}

export default AddProduct
