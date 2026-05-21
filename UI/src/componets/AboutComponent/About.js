import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="templatemo-container light-gray-bg section-shadow-bottom">
      <div className="container">
        <div className="row section-title-container">
          <div className="col-lg-12 text-uppercase text-center">
            <h2 className="section-title">About Us</h2>
            <div className="section-title-underline-blue"></div>
            <hr className="section-title-underline" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="tm-blocks-container effect1">
              <div className="tm-block green-bg">
                <span style={{ fontSize: "30px" }} className="tm-block-link">
                  BUY
                </span>
              </div>
              <div className="tm-block">
                <img
                  src="./assets/img/fav_logo.jpeg"
                  alt="Pawnshop logo"
                  className="img-responsive"
                />
              </div>
              <div className="tm-block">
                <img
                  src="./assets/img/fav_logo.jpeg"
                  alt="Pawnshop logo"
                  className="img-responsive"
                />
              </div>
              <div className="tm-block red-bg">
                <span style={{ fontSize: "30px" }} className="tm-block-link">
                  SWAP
                </span>
              </div>
              <div className="tm-block yellow-bg">
                <span style={{ fontSize: "30px" }} className="tm-block-link">
                  SELL
                </span>
              </div>
              <div className="tm-block">
                <img
                  src="./assets/img/fav_logo.jpeg"
                  alt="Pawnshop logo"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-7">
            <h3 className="section-title-2 text-uppercase font-weight-300">
              <b>Our</b> <span className="blue-text">Work</span>
            </h3>

            <div className="row">
              <div className="col-md-6">
                <div className="info-card fade-in">
                  <h5>Overview</h5>
                  <p>
                    Welcome to our Pawn Shop, your trusted destination for quick
                    cash solutions and value-driven deals.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-card fade-in delay-1">
                  <h5>What We Deal In</h5>
                  <p>
                    Gold and jewelry
                    <br />
                    Electronics
                    <br />
                    Watches
                    <br />
                    Antiques
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-card fade-in delay-2">
                  <h5>Why Choose Us</h5>
                  <p>
                    Transparent pricing
                    <br />
                    Expert evaluation
                    <br />
                    Trusted service
                    <br />
                    Friendly support
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-card fade-in delay-3">
                  <h5>Buy Smart</h5>
                  <p>
                    Quality products
                    <br />
                    Affordable deals
                    <br />
                    Verified items
                    <br />
                    Daily offers
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-card fade-in delay-4">
                  <h5>Instant Cash</h5>
                  <p>
                    Quick loans
                    <br />
                    Less paperwork
                    <br />
                    Secure process
                    <br />
                    Fast approval
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-card highlight-card fade-in delay-5">
                  <h5>Final Step</h5>
                  <p>Walk in with valuables and walk out with cash instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
