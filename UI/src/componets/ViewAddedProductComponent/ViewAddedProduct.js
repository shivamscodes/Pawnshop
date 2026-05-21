import './ViewAddedProduct.css'

import {useEffect,useState} from "react"
import {Link, useParams} from "react-router-dom"
import axios from "axios"
import {__addproductapiurl} from "../../API_URL"

const ViewUserProducts = () => {

const params = useParams()

const [productList,setProductlist] = useState([])

 const role = localStorage.getItem("role")

// ✅ BASE FILE URL (IMPORTANT CHANGE)


useEffect(()=>{

 

   // ✅ build params dynamically (visitor safe)
    let requestParams = {
      catnm: params.catnm,
      subcatnm: params.subcatnm
    }

    // only send role/email if logged in
    if (role) {
      requestParams.role = role
      requestParams.useremail = localStorage.getItem("email")
    }

axios.get(__addproductapiurl+"fetch",{
// params:{
// catnm:params.catnm,
// subcatnm:params.subcatnm,
// role:localStorage.getItem("role"),
// useremail:localStorage.getItem("email")
 params: requestParams
// }
})
.then((response)=>{
setProductlist(response.data.info)
})
.catch((error)=>{
console.log(error)
})

},[params.catnm, params.subcatnm, role])

return(

<>
<section className="templatemo-container section-shadow-bottom">

<div className="container">

<div className="row section-title-container">
<div className="col-lg-12 text-uppercase text-center">

<h2 className="section-title">
Products &gt;&gt; {params.catnm} &gt;&gt; {params.subcatnm}
</h2>

<div className="section-title-underline-blue"></div>
<hr className="section-title-underline"/>

</div>
</div>


{/* <div className="row">

{
productList.map((row)=>(

<div className="col-lg-4 col-md-6 col-sm-12" key={row._id}>

<div className="category-card">

<h4>{row.title}</h4>

<p><b>Description :</b> {row.description}</p>

<p><b>Expectation :</b> {row.expectation}</p>


<a
href={`/assets/uploads/addproductfiles/${row.filename}`}
target="_blank"
rel="noopener noreferrer"
className="btn-blue-gradient"
>
Preview PDF 👁️
</a>

<br/>
<a
href={`/assets/uploads/addproductfiles/${row.filename}`}
className="btn-blue-gradient"
download
>
Download PDF📄
</a>

</div>

</div>

))
}

</div> */}

{/* Product Table */}
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="product-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Expectation</th>
                    <th>Preview</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((row) => (
                    <tr key={row._id}>
                      <td>{row.title}</td>
                      <td>{row.description}</td>
                      <td>{row.expectation}</td>
                      <td>
                        <a 
                          href={`/assets/uploads/addproductfiles/${row.filename}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-blue-gradient"
                        >
                          👁️ Preview
                        </a>
                      </td>
                      <td>
                        <a 
                          href={`/assets/uploads/addproductfiles/${row.filename}`}
                          className="btn-blue-gradient"
                          download
                        >
                          📄 Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
         

        {/* Product Table */}
        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="product-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Expectation</th>
                    <th>Preview</th>
                    <th>Download</th>
                    <th>Review</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((row) => (
                    <tr key={row._id}>
                      <td>{row.title}</td>
                      <td>{row.description}</td>
                      <td>{row.expectation}</td>
                      <td>
                        {role ? (
                        <a 
                          href={`/assets/uploads/addproductfiles/${row.filename}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-blue-gradient"
                        >
                          👁️ Preview
                        </a>
                         ) : (
                      <Link to="/login" style={{color:"red"}}>Login Required</Link>
                         )}
                      </td>
                      <td>
                         {role ? (
                        <a 
                          href={`/assets/uploads/addproductfiles/${row.filename}`}
                          className="btn-blue-gradient"
                          download
                        >
                          📄 Download
                        </a>
                        ) : (
                          <Link to="/login" style={{color:"red"}}>Login Required</Link>
                        )}
                      </td>

                      <td>
                        <textarea
                          value={row.review || "No review yet"}
                          readOnly
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>




</div>

</section>

</>

)

}

export default ViewUserProducts
