import './ViewSubCategorys.css'

import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import {__subcategoryapiurl} from "../../API_URL"

import { Link } from "react-router-dom";


const ViewSubCategorys = () => {
    //  const {catnm} = useParams()

    const params = useParams();
    const [subcatlist,setSubcatlist] = useState([])

    useEffect(()=>{

    //     axios.get(__subcategoryapiurl+"fetch?catnm="+catnm)
    //     .then((response)=>{
            
    //         if(response.data.status)
    //             setSubcatlist(response.data.info)

    //     }).catch((error)=>{
    //         console.log(error)
    //     })

    axios.get(__subcategoryapiurl+"fetch",{
      params : {"catnm" : params.catnm}  
    }).then((response)=>{
     setSubcatlist(response.data.info);
    }).catch((error)=>{
     console.log(error);
    });

    },[params.catnm])


  return (

    <section className="templatemo-container section-shadow-bottom">

<div className="container">

<div className="row section-title-container">
<div className="col-lg-12 text-uppercase text-center">

<h2 className="section-title"> ⏩🛒SubCategories &gt;&gt; {params.catnm}</h2>
<div className="section-title-underline-blue"></div>
<hr className="section-title-underline"/>

</div>
</div>


<div className="row">

{
subcatlist.map((row)=>(

<div className="col-lg-4 col-md-6 col-sm-12" key={row._id}>

<div className="category-card">

<img 
src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} 
alt={row.subcatnm}
/>

<h4>{row.subcatnm}</h4>

<Link to={`/viewaddedproduct/${params.catnm}/${row.subcatnm}`} className="btn-blue-gradient">
View Details
</Link>

</div>

</div>

))
}

</div>

</div>

</section>


  )
}

export default ViewSubCategorys
