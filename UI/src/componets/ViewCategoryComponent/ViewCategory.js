import './ViewCategory.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { __categoryapiurl } from "../../API_URL";
import { Link } from "react-router-dom";



const ViewCategory = () => {

  const [catList, setCatList] = useState([]);

  useEffect(()=>{

    axios.get(__categoryapiurl + "fetch")
    .then((response)=>{
        setCatList(response.data.info);
    })
    .catch((error)=>{
        console.log(error);
    });

  },[]);

  return (
   <>
<section className="templatemo-container section-shadow-bottom">

<div className="container">

<div className="row section-title-container">
<div className="col-lg-12 text-uppercase text-center">

<h2 className="section-title">👁‍🗨👁‍🗨 View Categories 👁‍🗨👁‍🗨</h2>
<div className="section-title-underline-blue"></div>
<hr className="section-title-underline"/>

</div>
</div>


<div className="row">

{
catList.map((row)=>(
    
<div className="col-lg-4 col-md-6 col-sm-12" key={row._id}>

<div className="category-card">

<img 
src={`/assets/uploads/caticons/${row.caticonnm}`} 
alt={row.catnm}
/>

<h4>{row.catnm}</h4>

<Link to={`/viewsubcategory/${row.catnm}`} className="btn-blue-gradient">
View More
</Link>

</div>

</div>

))
}

</div>

</div>

</section>
  
   </>
  )
}

export default ViewCategory;
