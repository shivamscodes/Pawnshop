import './Main.css'

import { Link } from 'react-router-dom'

const Main = () => {
  return (
  
    <section className="templatemo-container section-shadow-bottom">
            <div className="container">
                <div className="row section-title-container">
                    <div className="col-lg-12 text-uppercase text-center">
                        <h2 className="section-title">Your Value 🔄 Our Priority</h2>
                        <div className="section-title-underline-blue"></div>
                        <hr className="section-title-underline"/>
                        <p className="small">Take a Look</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <h3 className="section-title-2 text-uppercase font-weight-300">  <b>Turn Valuables Into</b> <span className="blue-text">Instant Cash</span></h3>
                        <p>
  Need quick cash without the hassle? Our pawnshop offers a fast, secure, and transparent way to unlock the value of your assets. 
  From gold and jewelry to electronics and tools — we ensure you get the best possible price instantly.
  <br/><br/>
  Whether you're looking to sell items or take a short-term loan, our process is simple, fair, and designed for your convenience. 
  No lengthy paperwork, no hidden charges — just quick deals you can trust.
</p>

                       <ul className="gray-text ul-1">
  <li>⚡ Instant cash for gold, electronics, and valuables</li>
  <li>🔒 Safe, secure, and transparent transactions</li>
  <li>💰 Best market value with fair evaluation</li>
  <li>📄 Minimal paperwork & quick approvals</li>
</ul>


                           <Link className="btn-blue-gradient">SELL</Link> 
                        <Link className="btn-transparent">BUY</Link>
                    </div>
                    
                    <div className="col-lg-6 col-md-6">
                        <div className="carousel-container">
                            {/* <div className="crsl-items" data-navigation="navbtns">
                                <div className="crsl-wrap">
                                    <figure className="crsl-item"> */}
                                        {/* <img src="./assets/img/deal.jpeg" alt="Image" className="img-responsive img-thumbnail"/> */}
                                    
                                      <video 
                        className="img-responsive img-thumbnail"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    >
                        <source src="/assets/videos/homeVideo.mp4" type="video/mp4" />
                    </video>
                                    {/* </figure>
                                   
                                </div>
                            </div> */}
                        </div>   {/* carousel-container */}
                      
                    </div>
                </div>
                {/* end section Containt */}
            </div>
        </section>



  )
}

export default Main;
