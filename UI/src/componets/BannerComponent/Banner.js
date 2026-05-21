import './Banner.css'

import { useState , useEffect } from 'react';

const Banner = () => {

    const [BannerContent , setBannerContent] = useState();

    useEffect(()=>{
      setInterval(()=>
      {
      if(localStorage.getItem("token")!=undefined){
        setBannerContent(<> </>)
      }else{
        setBannerContent(
          <>
           <div className="header-img"></div>
       
        <div className="welcome-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-wrapper">
                            <h2 className="welcome-title text-uppercase">Welcome To Our Site</h2>
                            <img src="./assets/img/welcome-divider-lines.png" alt="Welcome divider" className="welcome-divider-lines-img"/>
                            <p className="welcome-description">Great deals, fast cash, and trusted service. Whether you're buying, selling, or pawning, we're here to give you the best value.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </>
        )
      }



      },10)
    },[])


  return (
 <>
   {BannerContent}
     
</>
  )
}

export default Banner;
