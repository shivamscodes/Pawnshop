// import { Navigate , useParams } from 'react-router-dom';
// import { useState , useEffect } from 'react';
// import axios from 'axios';

// function Payment()
// {
//     const params = useParams(); 
    	
//     useEffect(()=>{
//     	console.log("UserId : ",params.uid);
//     	console.log("Amount : ",params.amt);
//     },[]);

//     return(
//         <div>
//             <Navigate to='/success' />
//         </div>
//     )
// }

// export default Payment;


import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Payment() {

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User Email:", params.uid);
    console.log("Amount:", params.amt);

    // ⏳ small delay to show UI before redirect
    const timeoutId = setTimeout(() => {
      navigate('/success', {
  state: {
    email: params.uid,
    amount: params.amt
  }
    });
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [navigate, params.amt, params.uid]);

  return (
    <section className="templatemo-container light-gray-bg section-shadow-bottom">

      <div className="container">

        {/* Title */}
        <div className="row section-title-container">
          <div className="col-lg-12 text-uppercase text-center">
            <h2 className="section-title">
              Payment Processing ⏳
            </h2>
            <div className="section-title-underline-blue"></div>
            <hr className="section-title-underline"/>
          </div>
        </div>

        {/* Box */}
        <div className="form-wrapper text-center">

          <h3 className="section-title-2 text-uppercase font-weight-300">
            Please wait...
          </h3>

          <p className="gray-text">
            We are verifying your payment.
          </p>

          <br/>

          <p>
            <strong>Email:</strong> {params.uid}
          </p>

          <p>
            <strong>Amount Paid:</strong> ₹{params.amt}
          </p>

          <br/>

          <div className="spinner-border text-primary" role="status"></div>

        </div>

      </div>
    </section>
  );
}

export default Payment;
