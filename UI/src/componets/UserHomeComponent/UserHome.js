import './UserHome.css'

import { Link } from 'react-router-dom'

const UserHome = () => {
  return (
  
    <section className="templatemo-container section-shadow-bottom">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-uppercase text-center">
                        <h2 className="section-title">UserHome Page</h2>
                        <div className="section-title-underline-blue"></div>
                        <hr className="section-title-underline"/>
                                    <p className="small">Discover Quick Cash, Great Deals & Trusted Pawn Services</p>
                    </div>
                </div>


                {/* <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <h3 className="section-title-2 text-uppercase font-weight-300"><b>Sell</b> <span className="blue-text">Anything</span></h3>
                        <p>We specialize in offering fast, reliable, and fair pawn services. Whether you're buying, selling, or looking to get a quick loan, we provide top value with no hassle. Our inventory is carefully selected to give you great deals on electronics, jewelry, tools, and more. We believe in transparency and honesty, ensuring every customer leaves satisfied with their experience.
                       <br/>
                    Looking for cash?
                   <br/>
Our pawn services are quick and straightforward. Just bring in your valuable items, and we'll make you a fair, competitive offer. With years of experience, we've built a reputation for being trustworthy and offering excellent customer service. Get the most value for your items today at great deals and fair loans come together.</p>
                        <ul className="gray-text ul-1">
                            <li>Trustworthy & Experienced - A reputation built on trust and great customer service.</li>
                            <li>No Hassle - Simple process to get the cash you need or great deals on items.</li>
                                
                        </ul>
                           <Link className="btn-blue-gradient" to="/">SELL</Link> 
                        <Link className="btn-transparent">BUY</Link>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="carousel-container">
                            <div className="crsl-items" data-navigation="navbtns">
                                <div className="crsl-wrap">
                                    <figure className="crsl-item">
                                        <img src="./assets/img/deal.jpeg" alt="Img" className="img-responsive img-thumbnail"/>
                                    </figure>
                                   
                                </div>
                            </div>
                        </div>  
                      
                    </div>
                </div> */}
            
 {/* Main Row */}
        <div className="row">
          {/* LEFT - Image / Carousel */}
         {/* LEFT - Video */}
<div className="col-lg-6 col-md-6">
  <div className="video-container">
    <video 
      src="./assets/videos/customer.mp4" 
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

          {/* RIGHT - Feature Cards */}
          <div className="col-lg-6 col-md-6">
            {/* Card 1 */}
            <div className="user-card fade-in mb-4">
              <h5>💰 Sell Your Items</h5>
              <p>Bring in your gold, jewelry, electronics, or collectibles and get instant cash. Fast, fair, and secure evaluations every time.</p>
              <ul>
                <li>✔ Quick & Reliable</li>
                <li>✔ Fair Pricing</li>
                <li>✔ Trusted & Transparent</li>
              </ul>
              <Link className="btn-blue-gradient" >SELL</Link>
            </div>
            <br/>

            {/* Card 2 */}
            <div className="user-card fade-in delay-1 mb-4">
              <h5>🛍️ Buy Smart</h5>
              <p>Explore a wide range of high-quality second-hand items at affordable prices. From electronics to watches, there’s something for everyone.</p>
              <ul>
                <li>✔ Affordable Deals</li>
                <li>✔ Verified Products</li>
                <li>✔ Great Offers Daily</li>
              </ul>
              <Link className="btn-transparent" >BUY</Link>
            </div>

           

        
          </div>
        </div>

            </div>
        </section>



  )
}

export default UserHome;
