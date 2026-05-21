import Auth from '../AuthComponent/Auth';
import Theme from '../DarkLightTheme/Theme';
import './Header.css'
import { useState, useEffect } from 'react'


const Header = () => {

    const [HeaderContent , setHeaderContent ] = useState();

     useEffect(()=>{
        setInterval(()=>{

        
    if(localStorage.getItem("role")==="admin")
    {
         
   setHeaderContent(
   <>
   <div className="header-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 site-name-container">
                        <img src="./assets/img/logo.png" alt="Site logo" className="site-logo"/>
                        <h1 className="site-name">Pawn Shop</h1>
                    </div>
                {/* <div className="mobile-menu-icon">
                        <i className="fa fa-bars"></i>
                    </div> */}

                                  
                </div>

                 <div>
                    <p style={{"color":"white", "fontSize":"bold"}}></p>
                 </div>
            </div>
        </div>
   </>
   )
     

    }else if(localStorage.getItem("role")==="user"){

        setHeaderContent(
            <>
            <div className="header-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 site-name-container">
                        <img src="./assets/img/logo.png" alt="Site logo" className="site-logo"/>
                        <h1 className="site-name">Pawn Shop</h1>
                    </div>
                              {/* <div className="mobile-menu-icon">
                        <i className="fa fa-bars"></i>
                    </div> */}
    
                </div>

                 <div>
                    <p style={{"color":"white", "fontSize":"bold"}}>Welcome to User panel</p>
                 </div>
            </div>
        </div>
            </>
        )
    }else{

        setHeaderContent(
        <>
       <div className="header-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 site-name-container">
                        <img src="./assets/img/logo.png" alt="Site logo" className="site-logo"/>
                        <h1 className="site-name">Pawn Shop</h1>
                    </div>
                    
                    {/* <div className="mobile-menu-icon">
                        <i className="fa fa-bars"></i>
                    </div> */}

                                  
                </div>
            </div>
        </div> 
   
        </>)
      
    }

    },10);
     },[]);

  return (

    <>
    <Auth/>
    <Theme/>
    {HeaderContent}
    </>
    
  )
}

export default Header
