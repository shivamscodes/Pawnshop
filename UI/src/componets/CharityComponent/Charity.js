import './Charity.css';
import axios from 'axios';
import { __paymentapiurl } from '../../API_URL';
import { useState } from 'react';


function Charity() {


  const [amount, setAmount] = useState("");
  const email = localStorage.getItem("email"); // get user email


  const MakeCharity=async()=>{

     if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }


    const response=await axios.post(__paymentapiurl,{amount,email});
    window.open(response.data.url);
    //console.log(response);
  };

  return (
    <>
     <section className="templatemo-container light-gray-bg section-shadow-bottom">
      
      <div className="container">

        {/* Title Section */}
        <div className="row section-title-container">
          <div className="col-lg-12 text-uppercase text-center">
            <h2 className="section-title">
              Support For a Cause 💙
            </h2>
            <div className="section-title-underline-blue"></div>
            <hr className="section-title-underline"/>
          </div>
        </div>

        {/* Charity Box */}
        <div className="form-wrapper text-center">

          <h3 className="section-title-2 text-uppercase font-weight-300">
            Make a Donation
          </h3>

          <p className="gray-text">
            Your small contribution can make a big difference.
          </p>
          <br/>

          <input
            type="number"
            className="form-control"
            placeholder="Enter Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
                <br/>

          <button 
            className="btn-blue-gradient"
            onClick={MakeCharity}
          >
            Donate
          </button>

        </div>

      </div>
    </section>
    </>
  );
}

export default Charity;


