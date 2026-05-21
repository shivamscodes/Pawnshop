import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <section className="templatemo-container light-gray-bg section-shadow-bottom">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-uppercase text-center">
                        <h2 className="section-title">Services📌</h2>
                        <div className="section-title-underline-blue"></div>
                        <hr className="section-title-underline"/>
                    </div>
                </div> {/* row */}
                <div className="row">
                    <div className="col-lg-5 col-md-5">
                        <div className="tm-blocks-container effect1">
                            <div className="tm-block green-bg">
                                <a style={{fontSize : "30px"}} className="tm-block-link">Buy</a>
                            </div>
                            <div className="tm-block">
                                <img src="./assets/img/fav_logo.jpeg" alt="Image" className="img-responsive"/>
                            </div>
                            <div className="tm-block">
                                <img src="./assets/img/fav_logo.jpeg" alt="Image" className="img-responsive"/>
                            </div>
                            <div className="tm-block red-bg">
                                <a style={{fontSize : "30px"}} className="tm-block-link">🔃</a>
                            </div>
                            <div className="tm-block yellow-bg">
                                <a style={{fontSize : "30px"}} className="tm-block-link">Sell</a>
                            </div>
                            <div className="tm-block">
                                <img src="./assets/img/fav_logo.jpeg" alt="Image" className="img-responsive"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <h3 className="section-title-2 text-uppercase font-weight-300"><b>Services</b> <span className="blue-text">Offered</span></h3>
                        <p className="justify-text">Our Pawn Shop offers a variety of services designed to help customers buy, sell, or get quick cash using their valuable items. We provide pawn loans where customers can receive instant cash by pledging items such as gold, jewelry, electronics, watches, and other valuables as collateral. In addition to pawn loans, we also buy items directly at fair market prices and offer a wide range of quality pre-owned products for sale at affordable rates. Our goal is to make every transaction simple, transparent, and secure while ensuring customers receive the best possible value for their items. With reliable service and honest evaluations, we strive to create a trusted place for all your buying, selling, and pawn needs.</p>
                        <p className="justify-text">
                           Our pawn shop provides reliable and convenient services for customers looking to buy, sell, or secure short-term loans using their valuable items. We specialize in evaluating items such as gold, jewelry, electronics, watches, and collectibles to offer fair prices and quick cash solutions. Customers can pawn their items and reclaim them later after repaying the loan, making it a flexible option for temporary financial needs. We also purchase items directly and offer a wide selection of quality second-hand products at reasonable prices. Our focus is on providing trustworthy service, transparent transactions, and a comfortable experience for every customer who visits our shop.
                        </p>
                     
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Service;
