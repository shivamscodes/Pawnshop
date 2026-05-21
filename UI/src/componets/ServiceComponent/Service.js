import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <section className="templatemo-container light-gray-bg section-shadow-bottom">
      <div className="container">
        <div className="row section-title-container">
          <div className="col-lg-12 text-uppercase text-center">
            <h2 className="section-title">Services</h2>
            <div className="section-title-underline-blue"></div>
            <hr className="section-title-underline" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="tm-blocks-container effect1">
              <div className="tm-block green-bg">
                <span style={{ fontSize: "30px" }} className="tm-block-link">
                  Buy
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
                  Swap
                </span>
              </div>
              <div className="tm-block yellow-bg">
                <span style={{ fontSize: "30px" }} className="tm-block-link">
                  Sell
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
              <b>Services</b> <span className="blue-text">Offered</span>
            </h3>
            <p className="justify-text">
              Our Pawn Shop helps customers buy, sell, and unlock short-term
              cash using valuable items. We evaluate gold, jewelry,
              electronics, watches, and collectibles to provide fair offers and
              quick solutions.
            </p>
            <p className="justify-text">
              Customers can pawn items and reclaim them after repayment, sell
              items directly for market-based pricing, or browse quality
              second-hand products at accessible prices. We focus on
              transparency, safety, and dependable service in every
              transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
