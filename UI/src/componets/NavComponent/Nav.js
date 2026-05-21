// import './Nav.css'

// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';


// function Nav(){
//       const [menuOpen, setMenuOpen] = useState(false);
//       const [NavContent , setNavContent ] = useState();
//      const [categoryDrop, setCategoryDrop] = useState(false);

//       useEffect(()=>{
//         // setInterval(()=>{
            
//             const role = localStorage.getItem("role");


//             // if(localStorage.getItem("role")==="admin")
//             if(role === "admin")
    
//             {
//                 setNavContent(<>
//                   <div className="header-bg">
//             <div className="container">
//                 <div className="row">
                                      
//                     <div className="col-lg-12 col-md-12 col-sm-12 templatemo-nav-container">
                     
//                      {/* Hamburger Icon */}
//             <div 
//               className="mobile-menu-icon" style={{border:"2px solid black", color: "white"}}
//             //   onClick={() => setMenuOpen(!menuOpen)}
//             onClick={() => setMenuOpen(prev => !prev)}
//             >
//               ☰
//             </div>

//                         {/* <nav className="templatemo-nav" style={{display: menuOpen ? "block" : ""}}>
//                          */}
//                          <nav className={`templatemo-nav ${menuOpen ? "show-menu" : ""}`}>
//                             <ul>
                
//                                <li><Link to="">Admin Home</Link></li>
//                                 <li><Link to="/manageusers">Manage Users</Link></li>
//                                 <li><Link to="/changepassword">Change password</Link></li>
//                                 <li><Link to="/editprofile">Edit profile</Link></li>
//                              {/*<li><Link to="/addcategory">Add Category</Link></li>
//                                 <li><Link to="/addsubcategory">Add SubCategory</Link></li>
//                              */}
//  <li className="dropdown">

// <a
//   href="#"
//   onClick={(e) => {
//     e.preventDefault();
//     setCategoryDrop(!categoryDrop);
//   }}
// >
//   Add Category ▼
// </a>

// {categoryDrop && (
//   <ul className="dropdown-menu">
//     <li><Link to="/addcategory">Add Category</Link></li>
//     <li><Link to="/addsubcategory">Add SubCategory</Link></li>
//   </ul>
// )}

// </li>
                                
//                                 <li><Link to="/viewcategory">View Products</Link></li>
//                                 <li><Link to="/logout">Logout</Link></li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         </div>
//                 </>)
            
//         // }else if(localStorage.getItem("role")==="user"){
// }else if(role === "user"){
//             setNavContent(<>
//              <div className="header-bg">
//             <div className="container">
//                 <div className="row">
                                      
//                     <div className="col-lg-12 col-md-12 col-sm-12 templatemo-nav-container">
                     
//                      {/* Hamburger Icon */}
//             <div 
//               className="mobile-menu-icon" style={{border:"2px solid black", color: "white"}}
//             //   onClick={() => setMenuOpen(!menuOpen)}
//             onClick={() => setMenuOpen(prev => !prev)}
//             >
//               ☰
//             </div>

//                         {/* <nav className="templatemo-nav" style={{display: menuOpen ? "block" : ""}}> */}
//                         <nav className={`templatemo-nav ${menuOpen ? "show-menu" : ""}`}>
//                             <ul>
                
//                                <li><Link to="">User Home</Link></li>
//                                  <li><Link to="/changepassword">Change password</Link></li>
//                                 <li><Link to="/editprofile">Edit profile</Link></li>
//                                 <li><Link to="/viewcategory">View Products</Link></li>
//                                 <li><Link to="/addproducts">Add Products</Link></li>
//                                 <li><Link to="/charity">Charity</Link></li>
//                                 <li><Link to="/logout">Logout</Link></li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         </div>
            
//             </>)
        
//     }else{

//         setNavContent(<>
        
//       <div className="header-bg">
//             <div className="container">
//                 <div className="row">
                                      
//                     <div className="col-lg-12 col-md-12 col-sm-12 templatemo-nav-container">
                     
//                      {/* Hamburger Icon */}
//             <div 
//               className="mobile-menu-icon" style={{border:"2px solid black", color: "white"}}
//             //   onClick={() => setMenuOpen(!menuOpen)}
//             onClick={() => setMenuOpen(prev => !prev)}
//             >
//               ☰
//             </div>

//                         {/* <nav className="templatemo-nav" style={{display: menuOpen ? "block" : ""}}> */}
//                             <nav className={`templatemo-nav ${menuOpen ? "show-menu" : ""}`}>
//                             <ul>
//                                 {/* <li><a className="active"><Link to="">Home</Link></a></li>
//                                 <li><a><Link to="/about">About</Link></a></li>
//                                 <li><a ><Link to="/contact">Contact</Link></a></li>
//                                 <li><a><Link to="/service">Service</Link></a></li>
//                                 <li><a> <Link to="/register">Register</Link></a></li>
//                                 <li><a> <Link to="/login">Login</Link></a></li> */}
                              
//                                <li><Link to="">Home</Link></li>
//                                 <li><Link to="/about">About</Link></li>
//                                 <li><Link to="/contact">Contact</Link></li>
//                                 <li><Link to="/service">Service</Link></li>
//                                  <li><Link to="/aiclient">AI Client</Link></li>
//                                 <li><Link to="/register">Register</Link></li>
//                                 <li><Link to="/login">Login</Link></li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         </>)
//     }

//         // },10)
//       },[menuOpen, categoryDrop])




//     return(
//       <>
//       {NavContent}
//       </>
//     )
// };


// export default Nav;


import './Nav.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("role")); // state for role

  // useEffect to watch localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem("role")); // update state when role changes
    };

    // listen to storage events (in case role changes from another tab)
    window.addEventListener("storage", handleStorageChange);

    // optional: interval to check role changes in the same tab
    const interval = setInterval(() => {
      const currentRole = localStorage.getItem("role");
      if (currentRole !== role) {
        setRole(currentRole);
      }
    }, 500); // check every 0.5s

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, [role]);

  return (
    <div className="header-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 templatemo-nav-container">

            {/* hamburger */}
            <div
              className="mobile-menu-icon"
              style={{ border: "2px solid black", color: "white" }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </div>

            <nav className={`templatemo-nav ${menuOpen ? "show-menu" : ""}`}>
              <ul>

                {/* ADMIN MENU */}
                {role === "admin" && (
                  <>
                    <li><Link to="/admin">Admin Home</Link></li>
                    <li><Link to="/manageusers">Manage Users</Link></li>

                    <li className="dropdown">
                      <a className="dropbtn">Settings ▼</a>
                      <ul className="dropdown-menu">
                        <li><Link to="/changepassword">Change Password</Link></li>
                        <li><Link to="/editprofile">Edit Profile</Link></li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <a className="dropbtn">Add Category ▼</a>
                      <ul className="dropdown-menu">
                        <li><Link to="/addcategory">Add Category</Link></li>
                        <li><Link to="/addsubcategory">Add SubCategory</Link></li>
                      </ul>
                    </li>

                    <li><Link to="/productreview">Review Products</Link></li>
                    <li><Link to="/transaction">View Charity</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                  </>
                )}

                {/* USER MENU */}
                {role === "user" && (
                  <>
                    <li><Link to="/user">User Home</Link></li>
                    <li><Link to="/changepassword">Change password</Link></li>
                    <li><Link to="/editprofile">Edit profile</Link></li>
                    <li><Link to="/viewcategory">View Products</Link></li>
                    <li><Link to="/addproducts">Add Products</Link></li>
                    <li><Link to="/charity">Charity</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                  </>
                )}

                {/* GUEST MENU */}
                {!role && (
                  <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/viewcategory">Browse Products</Link></li>
                    <li><Link to="/aiclient">AI Client</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                  </>
                )}

              </ul>
            </nav>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

// import './Nav.css'
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// function Nav(){

// const [menuOpen,setMenuOpen] = useState(false);
// const [categoryDrop,setCategoryDrop] = useState(false);

// const role = localStorage.getItem("role");

// return(

// <div className="header-bg">
// <div className="container">
// <div className="row">

// <div className="col-lg-12 col-md-12 col-sm-12 templatemo-nav-container">

// {/* hamburger */}
// <div 
// className="mobile-menu-icon"
// style={{border:"2px solid black",color:"white"}}
// onClick={()=>setMenuOpen(!menuOpen)}
// >
// ☰
// </div>

// <nav className={`templatemo-nav ${menuOpen ? "show-menu":""}`}>

// <ul>

// {/* ADMIN MENU */}

// {role==="admin" && (
// <>

// <li><Link to="">Admin Home</Link></li>
// <li><Link to="/manageusers">Manage Users</Link></li>

// {/* 
// <li><Link to="/changepassword">Change password</Link></li>
// <li><Link to="/editprofile">Edit profile</Link></li> */}

// <li className="dropdown">
//   <a className="dropbtn">Settings ▼</a>

//   <ul className="dropdown-menu">
//     <li><Link to="/changepassword">Change Password</Link></li>
//     <li><Link to="/editprofile">Edit Profile</Link></li>
//   </ul>
// </li>



// <li className="dropdown">
//   <a className="dropbtn">Add Category ▼</a>

//   <ul className="dropdown-menu">
//     <li><Link to="/addcategory">Add Category</Link></li>
//     <li><Link to="/addsubcategory">Add SubCategory</Link></li>
//   </ul>
// </li>


// <li><Link to="/viewcategory">View Products</Link></li>
// <li><Link to="/logout">Logout</Link></li>

// </>
// )}

// {/* USER MENU */}

// {role==="user" && (

// <>

// <li><Link to="">User Home</Link></li>
// <li><Link to="/changepassword">Change password</Link></li>
// <li><Link to="/editprofile">Edit profile</Link></li>
// <li><Link to="/viewcategory">View Products</Link></li>
// <li><Link to="/addproducts">Add Products</Link></li>
// <li><Link to="/charity">Charity</Link></li>
// <li><Link to="/logout">Logout</Link></li>

// </>

// )}

// {/* GUEST MENU */}

// {!role && (

// <>

// <li><Link to="">Home</Link></li>
// <li><Link to="/about">About</Link></li>
// <li><Link to="/contact">Contact</Link></li>
// <li><Link to="/service">Service</Link></li>
// <li><Link to="/aiclient">AI Client</Link></li>
// <li><Link to="/register">Register</Link></li>
// <li><Link to="/login">Login</Link></li>

// </>

// )}

// </ul>

// </nav>

// </div>
// </div>
// </div>
// </div>

// )

// }

// export default Nav


