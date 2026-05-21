// import './AdminHome.css'
// import { Link } from 'react-router-dom'
// const AdminHome = () => {
//   return (
  
//     <section className="templatemo-container section-shadow-bottom">
//             <div className="container">
//                 <div className="row section-title-container">
//                     <div className="col-lg-12 text-uppercase text-center">
//                         <h2 className="section-title">AdminHome Page</h2>
//                         <div className="section-title-underline-blue"></div>
//                         <hr className="section-title-underline"/>
//                         <p className="small">Take a Look</p>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-6 col-md-6">
//                         <h3 className="section-title-2 text-uppercase font-weight-300"><b>Sell</b> <span className="blue-text">Anything</span></h3>
//                         <p>We specialize in offering fast, reliable, and fair pawn services. Whether you're buying, selling, or looking to get a quick loan, we provide top value with no hassle. Our inventory is carefully selected to give you great deals on electronics, jewelry, tools, and more. We believe in transparency and honesty, ensuring every customer leaves satisfied with their experience.
//                        <br/>
//                     Looking for cash?
//                    <br/>
// Our pawn services are quick and straightforward. Just bring in your valuable items, and we'll make you a fair, competitive offer. With years of experience, we've built a reputation for being trustworthy and offering excellent customer service. Get the most value for your items today at great deals and fair loans come together.</p>
//                         <ul className="gray-text ul-1">
//                             <li>Trustworthy & Experienced - A reputation built on trust and great customer service.</li>
//                             <li>No Hassle - Simple process to get the cash you need or great deals on items.</li>
                                
//                         </ul>
//                            <Link className="btn-blue-gradient" to="/">SELL</Link> 
//                         <Link className="btn-transparent">BUY</Link>
//                     </div>
//                     <div className="col-lg-6 col-md-6">
//                         <div className="carousel-container">
//                             <div className="crsl-items" data-navigation="navbtns">
//                                 <div className="crsl-wrap">
//                                     <figure className="crsl-item">
//                                         <img src="./assets/img/deal.jpeg" alt="Image" className="img-responsive img-thumbnail"/>
//                                     </figure>
                                   
//                                 </div>
//                             </div>
//                         </div>   {/* carousel-container */}
                      
//                     </div>
//                 </div>
//                 {/* end section Containt */}
//             </div>
//         </section>



//   )
// }
// export default AdminHome;


import './AdminHome.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { __userapiurl ,__categoryapiurl, __subcategoryapiurl} from '../../API_URL'

const AdminHome = () => {

  const [total,setTotal] = useState(0)
  const [active,setActive] = useState(0)
  const [inactive,setInactive] = useState(0)
  const [categoryCount, setCategoryCount] = useState(0)
const [subCategoryCount, setSubCategoryCount] = useState(0)

  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(__userapiurl+"fetch",{ params:{role:"user"} })
    .then(res=>{
      const users = res.data.info || []
      setTotal(users.length)
      setActive(users.filter(u=>u.status===1).length)
      setInactive(users.filter(u=>u.status===0).length)
    })
    .catch(console.log);


     // CATEGORIES COUNT
  axios.get(__categoryapiurl + "fetch")
  .then(res=>{
    const categories = res.data.info || []
    setCategoryCount(categories.length)
  })

  // SUBCATEGORIES COUNT
  axios.get(__subcategoryapiurl + "fetch")
  .then(res=>{
    const subcategories = res.data.info || []
    setSubCategoryCount(subcategories.length)
  })
  },[])

  

  // const handleLogout = ()=>{
  //   localStorage.clear()
  //   navigate('/login')
  // }

  return (
  
    <section className="templatemo-container section-shadow-bottom">
      <div className="container">

        {/* TITLE */}
        <div className="row section-title-container">
          <div className="col-lg-12 text-uppercase text-center">
            <h2 className="section-title"> Pawnshop Admin Dashboard 👨🏾‍💻🏪</h2>
            <div className="section-title-underline-blue"></div>
            <hr className="section-title-underline"/>
          </div>
        </div>

        {/* DASHBOARD CARDS */} 
        <div className="admin-home">

          <div className="dashboard-cards">

            {/* <div className="card blue" onClick={()=>navigate('/manageusers')}>
              <h3>Total Users</h3>
              <p>{total}</p>
            </div>

            <div className="card green" onClick={()=>navigate('/manageusers?status=active')}>
              <h3>Active Users</h3>
              <p>{active}</p>
            </div>

            <div className="card orange" onClick={()=>navigate('/manageusers?status=inactive')}>
              <h3>Inactive Users</h3>
              <p>{inactive}</p>
            </div>

            <div className="card purple" onClick={()=>navigate('/editprofile')}>
              <h3>Edit Profile</h3>
              <p>Open</p>
            </div> */}

<div className="card blue" onClick={()=>navigate('/manageusers')}>
    <div className="card-content">
      <h3>Total Users</h3>
      <p>{total}</p>
    </div>
  </div>

  <div className="card green" onClick={()=>navigate('/manageusers?status=active')}>
    <div className="card-content">
      <h3>Active Users</h3>
      <p>{active}</p>
    </div>
  </div>

  <div className="card orange" onClick={()=>navigate('/manageusers?status=inactive')}>
    <div className="card-content">
      <h3>Inactive Users</h3>
      <p>{inactive}</p>
    </div>
  </div>

  <div className="card purple" onClick={()=>navigate('/editprofile')}>
    <div className="card-content">
      <h3>Edit Profile</h3>
      <p>Manage</p>
    </div>
  </div>

  <div className="card orange" onClick={()=>navigate('/viewcategory')}>
  <div className="card-content">
    <h3>Total Categories</h3>
    <p>{categoryCount}</p>
  </div>
</div>

<div className="card purple" onClick={()=>navigate('/viewcategory')}>
  <div className="card-content">
    <h3>Total SubCategories</h3>
    <p>{subCategoryCount}</p>
  </div>
</div>
            {/* <div className="card teal" onClick={()=>navigate('/changepassword')}>
              <h3>Change Password</h3>
              <p>Secure</p>
            </div>

            <div className="card blue" onClick={()=>navigate('/manageusers')}>
              <h3>Manage Users</h3>
              <p>Open</p>
            </div> */}

          </div>

        </div>

<br/><br/><br/><br/>
        {/* EXISTING TEMPLATE CONTENT */}
        <div className="row" style={{marginTop:"50px"}}>
          <div className="col-lg-6 col-md-6">
            <h3 className="section-title-2 text-uppercase font-weight-300">
                <b>Pawnshop</b> <span className="blue-text">Admin Control</span>
            </h3>

              <p>
               Welcome to your centralized Pawnshop Admin Dashboard. This panel gives you full control over users, transactions, and daily operations. 
               Monitor system activity, manage customer accounts, and ensure smooth business performance — all in one place.
               <br/><br/>
               Stay updated with real-time insights, track active and inactive users, and maintain a secure and efficient environment 
               for handling pawn services. Your dashboard is designed to help you make faster decisions and manage your shop effortlessly.
             </p>
             
           <ul className="gray-text ul-1">
             <li>Complete control over customer accounts and system access</li>
             <li>Real-time tracking of active and inactive users</li>
             <li>Secure and reliable admin operations</li>
             <li>Fast navigation for managing platform features</li>
           </ul>

        
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="carousel-container">
              {/* <figure className="crsl-item">
                <img src="/assets/img/deal.jpeg" alt="Img" className="img-responsive img-thumbnail"/>
              </figure> */}

              <div className="video-container">
    <video 
      src="./assets/videos/service.mp4" 
      controls 
      autoPlay 
      loop 
      muted 
      className="video-responsive"
    >
      Your browser does not support the video tag.
    </video>
  </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default AdminHome;