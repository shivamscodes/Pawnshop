import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
//   <section className="templatemo-container light-gray-bg section-shadow-bottom">
//             <div className="container">
//                 <div className="row section-title-container">
//                     <div className="col-lg-12 text-uppercase text-center">
//                         <h2 className="section-title">Contact Us</h2>
//                         <div className="section-title-underline-blue"></div>
//                         <hr className="section-title-underline"/>
//                     </div>
//                 </div> {/* row */}
//                 <div className="row">
//                     <div className="col-lg-5 col-md-5">
//                         <div className="tm-blocks-container effect1">
//                             <div className="tm-block green-bg">
//                                 <a href="#" className="tm-block-link">Technologies</a>
//                             </div>
//                             <div className="tm-block">
//                                 <img src="../assets/img/fav_logo.jpeg" alt="Image" className="img-responsive"/>
//                             </div>
//                             <div className="tm-block">
//                                 <img src="./assets/img/fav_logo.jpeg" alt="Image" className="img-responsive"/>
//                             </div>
//                             <div className="tm-block red-bg">
//                                 <a href="#" className="tm-block-link">Vision</a>
//                             </div>
//                             <div className="tm-block yellow-bg">
//                                 <a href="#" className="tm-block-link">Awards</a>
//                             </div>
//                             <div className="tm-block">
//                                 <img src="./assets/img/fav_logo.jpeg" alt="Image" className="img-responsive"/>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-7 col-md-7">
//                         <h3 className="section-title-2 text-uppercase font-weight-300"><b>Our</b> <span className="blue-text">Contact</span></h3>
//                         <p className="justify-text">ur Pawn Shop is always ready to assist you with any questions regarding buying, selling, or pawn loans. If you need more information about our services or want to inquire about a specific item, feel free to contact us. You can visit our store, call us, or send us a message through the contact form on this page. Our team is committed to providing quick responses and helpful support to ensure you have the best experience with our services. We look forward to helping you with secure transactions and reliable assistance whenever you need it.</p>
//                         <p className="justify-text">
//                             Address: 123 Market Street, indore
//                             <br/>
//                              Phone: +91 XXXXX XXXXX
//                              <br/>
//                                Email: pawnshop@email.com
// <br/>
//                              Business Hours: Monday – Saturday, 9:00 AM – 8:00 PM
//                              <br/>
//                         </p>
                       
//                     </div>
//                 </div>
//             </div>
//         </section>

 <section className="templatemo-container light-gray-bg section-shadow-bottom">
      <div className="container">

        {/* Title */}
        <div className="row section-title-container">
          <div className="col-lg-12 text-uppercase text-center">
            <h2 className="section-title">Contact Us ☎</h2>
            <div className="section-title-underline-blue"></div>
            <hr className="section-title-underline"/>
          </div>
        </div>

        {/* Top Section */}
        <div className="row">

          {/* LEFT - Contact Info */}
          <div className="col-lg-5 col-md-5">
            <div className="contact-info-box">

              <h3>📍 Our Address</h3>
              <p>
                123 Market Street,<br/>
                Indore, Madhya Pradesh
              </p>

              <h4>📞 Phone</h4>
              <p>+91 93339 94449</p>

              <h4>📧 Email</h4>
              <p>pawnshop@email.com</p>

              <h4>⏰ Business Hours</h4>
              <p>
                Monday – Saturday<br/>
                9:00 AM – 8:00 PM
              </p>

              <h4>💬 Why Contact Us?</h4>
              <p>
                ✔ Quick loan inquiries 💰<br/>
                ✔ Sell or exchange items 🔄<br/>
                ✔ Product availability 🛍️<br/>
                ✔ Friendly support 🤝
              </p>

            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div className="col-lg-7 col-md-7">
            <div className="contact-form-box">

              <h3 className="section-title-2 text-uppercase font-weight-300">
                <b>Send</b> <span className="blue-text">Message</span>
              </h3>

              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-control" required />
                </div>

                <div className="form-group">
                  <input type="email" placeholder="Your Email" className="form-control" required />
                </div>

                <div className="form-group">
                  <input type="text" placeholder="Contact Number" className="form-control" required />
                </div>

                <div className="form-group">
                  <textarea placeholder="Your Address / Message" className="form-control" rows="4"></textarea>
                </div>

                <button type="button" className="btn btn-primary submit-btn">
                  🚀 Send Message
                </button>
              </form>

            </div>
          </div>
        </div>

        <br/><br/><br/>

        {/* MAP SECTION */}
        <div className="row">
          <div className="col-lg-12">
            <div className="map-container">
              <iframe
                title="Pawn Shop Location"
                src="https://maps.google.com/maps?q=indore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  
  )
}

export default Contact;
