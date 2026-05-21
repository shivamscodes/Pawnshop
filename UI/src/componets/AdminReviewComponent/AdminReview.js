import './AdminReview.css'

import {useEffect,useState} from "react"
import {Link, useParams} from "react-router-dom"
import axios from "axios"
import {__addproductapiurl} from "../../API_URL"

const AdminReview = () => {

const params = useParams()

const [productList,setProductlist] = useState([])
const [search, setSearch] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5; // you can change this

 const role = localStorage.getItem("role")

// ✅ BASE FILE URL (IMPORTANT CHANGE)


// const filteredData = productList.filter((item) =>
//   item.title.toLowerCase().includes(search.toLowerCase())
// );

const filteredData = productList.filter((item) => {
  const searchText = search.toLowerCase();

  return (
    item.title?.toLowerCase().includes(searchText) ||
    item.description?.toLowerCase().includes(searchText) ||
    item.expectation?.toLowerCase().includes(searchText) ||
    item.review?.toLowerCase().includes(searchText) ||
    item._id?.toString().includes(searchText)
  );
});


const indexOfLast = currentPage * itemsPerPage;
const indexOfFirst = indexOfLast - itemsPerPage;

const currentItems = filteredData.slice(indexOfFirst, indexOfLast);

const totalPages = Math.ceil(filteredData.length / itemsPerPage);

useEffect(()=>{

 

   // ✅ build params dynamically (visitor safe)
    // let requestParams = {
    //   catnm: params.catnm,
    //   subcatnm: params.subcatnm
    // }

    // // only send role/email if logged in
    // if (role) {
    //   requestParams.role = role
    //   requestParams.useremail = localStorage.getItem("email")
    // }

    let requestParams = {}

// If admin → fetch ALL products
if (role === "admin") {
  requestParams = {}   // no filter = all data
} 
else {
  // normal user → filter
  requestParams = {
    catnm: params.catnm,
    subcatnm: params.subcatnm,
    role: role,
    useremail: localStorage.getItem("email")
  }
}

axios.get(__addproductapiurl+"fetch",{

 params: requestParams
// }
})
.then((response)=>{
setProductlist(response.data.info )
})
.catch((error)=>{
console.log(error)
})

},[params.catnm, params.subcatnm, role])


const handleReviewChange = (_id, value) => {
  const updatedList = productList.map((item) =>
    item._id === _id ? { ...item, review: value } : item
  );
  setProductlist(updatedList);
};

const submitReview = (_id) => {
  const product = productList.find(p => p._id === _id);

  axios.patch(__addproductapiurl+"addreview", {
    _id: _id,
    review: product.review
  })
  .then(() => {
    alert("Review updated");
  })
  .catch(() => {
    alert("Error updating review");
  });
};


return(

<>
<section className="templatemo-container section-shadow-bottom">

<div className="container">

<div className="row section-title-container">
<div className="col-lg-12 text-uppercase text-center">

<h2 className="section-title">
Products For Review
</h2>

<div className="section-title-underline-blue"></div>
<hr className="section-title-underline"/>

</div>
</div>


        {/* Product Table */}
        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">

               <input
                 type="text"
                 placeholder="Search by ID, title, description, review..."
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="form-control"
                 style={{marginBottom:"20px" , width:"25vw"}}
               />

              <table className="product-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Expectation</th>
                    <th>Preview</th>
                    <th>Download</th>
                    <th>Review</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((row) => (
                    <tr key={row._id}>
                      <td>{row._id}</td>
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

                      {/* REVIEW INPUT */}
                      <td>
                        <textarea value={row.review || ""}
                          onChange={(e) => handleReviewChange(row._id, e.target.value)}
                          style={{ width: "250px", height: "100px" }}
                        />
                      </td>
                    
                      {/* SAVE BUTTON */}
                      <td>
                        <button
                          onClick={() => submitReview(row._id)}
                          className="btn-blue-gradient"
                        >
                          Save
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

                              <div style={{marginTop:"20px"}}>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      style={{
                        margin: "5px",
                        padding: "8px 12px",
                        background: currentPage === i + 1 ? "#1b434c" : "#ccc",
                        color: "white",
                        border: "none"
                      }}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
            </div>
          </div>
        </div>




</div>

</section>

</>

)

}

export default AdminReview
