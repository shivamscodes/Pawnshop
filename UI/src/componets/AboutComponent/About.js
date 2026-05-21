import React from 'react'
import './About.css'

const About = () => {
  return (
   <section className="templatemo-container light-gray-bg section-shadow-bottom">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-uppercase text-center">
                        <h2 className="section-title">About Us💁🏾‍♂️🤝🏾</h2>
                        <div className="section-title-underline-blue"></div>
                        <hr className="section-title-underline"/>
                    </div>
                </div> {/* row */}
                <div className="row">
                    <div className="col-lg-5 col-md-5" >
                        <div className="tm-blocks-container effect1">
                            <div className="tm-block green-bg">
                                <a style={{fontSize : "30px"}} className="tm-block-link">BUY</a>
                            </div>
                            <div className="tm-block">
                                <img src="./assets/img/fav_logo.jpeg" alt="Image" className="img-responsive"/>
                            </div>
                            <div className="tm-block">
                                <img src="./assets/img/fav_logo.jpeg" alt="Image" className="img-responsive"/>
                            </div>
                            <div className="tm-block red-bg">
                                <a style={{fontSize : "30px"}} className="tm-block-link">🔄</a>
                            </div>
                            <div className="tm-block yellow-bg">
                                <a style={{fontSize : "30px"}} className="tm-block-link">SELL</a>
                            </div>
                            <div className="tm-block">
                                <img src="./assets/img/fav_logo.jpeg" alt="Image" className="img-responsive"/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-7 col-md-7">
                        <h3 className="section-title-2 text-uppercase font-weight-300"><b>Our</b> <span className="blue-text">Work</span></h3>
                        <p className="justify-text fade-in">
                           💼 Welcome to our Pawn Shop, your trusted destination for quick cash solutions and great value deals. We specialize in helping customers unlock the value of their assets by offering instant loans against valuables in a safe, secure, and hassle-free environment. Whether you are facing an urgent financial need or simply looking to sell unused items, we provide a smooth and reliable experience from start to finish.
            </p>

            <p className="justify-text fade-in delay-1">
              📦 <b>What We Deal In</b><br/>
              ✔ Gold & Jewelry 💍<br/>
              ✔ Electronics & Gadgets 📱<br/>
              ✔ Watches & Luxury Items ⌚<br/>
              ✔ Antiques & Collectibles 🏺
            </p>

            <p className="justify-text fade-in delay-2">
              🔍 <b>Why Choose Us?</b><br/>
              ✔ Fair and transparent pricing<br/>
              ✔ Expert evaluation of every item<br/>
              ✔ Trusted by hundreds of customers<br/>
              ✔ Friendly and professional service
            </p>

            <p className="justify-text fade-in delay-3">
              🛍️ <b>Buy Smart, Save More</b><br/>
              ✔ High-quality second-hand products<br/>
              ✔ Affordable prices 💸<br/>
              ✔ Tested and verified items<br/>
              ✔ Great deals every day
            </p>

            <p className="justify-text fade-in delay-4">
              🚀 Visit us today and turn your valuables into instant cash — quick, safe, and easy!
            </p>

            <p className="justify-text fade-in delay-5">
              ⚡ <b>Walk in with valuables — Walk out with CASH!</b>
            </p>
                       
                    </div> */}
                    <div className="col-lg-7 col-md-7">
  <h3 className="section-title-2 text-uppercase font-weight-300">
    <b>Our</b> <span className="blue-text">Work</span>
  </h3>

  <div className="row">

    <div className="col-md-6">
      <div className="info-card fade-in">
        <h5>💼 Overview</h5>
        <p>
          Welcome to our Pawn Shop, your trusted destination for quick cash solutions and great value deals.
        </p>
      </div>
    </div>

    <div className="col-md-6">
      <div className="info-card fade-in delay-1">
        <h5>📦 What We Deal In</h5>
        <p>
          ✔ Gold & Jewelry 💍<br/>
          ✔ Electronics 📱<br/>
          ✔ Watches ⌚<br/>
          ✔ Antiques 🏺
        </p>
      </div>
    </div>

    <div className="col-md-6">
      <div className="info-card fade-in delay-2">
        <h5>🔍 Why Choose Us</h5>
        <p>
          ✔ Transparent pricing 💯<br/>
          ✔ Expert evaluation 🔎<br/>
          ✔ Trusted service ⭐<br/>
          ✔ Friendly support 😊
        </p>
      </div>
    </div>

    <div className="col-md-6">
      <div className="info-card fade-in delay-3">
        <h5>🛍️ Buy Smart</h5>
        <p>
          ✔ Quality products ✅<br/>
          ✔ Affordable deals 💸<br/>
          ✔ Verified items 🔐<br/>
          ✔ Daily offers 🔥
        </p>
      </div>
    </div>

    <div className="col-md-6">
      <div className="info-card fade-in delay-4">
        <h5>💰 Instant Cash</h5>
        <p>
          ✔ Quick loans ⚡<br/>
          ✔ No paperwork ❌<br/>
          ✔ Secure process 🔒<br/>
          ✔ Fast approval 💵
        </p>
      </div>
    </div>

    <div className="col-md-6">
      <div className="info-card highlight-card fade-in delay-5">
        <h5>🚀 Final Step</h5>
        <p>
          Walk in with valuables and walk out with CASH instantly!
        </p>
      </div>
    </div>

  </div>
</div>
                </div>
            </div>
        </section>
  )
}

export default About;
