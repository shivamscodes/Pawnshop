// import { useNavigate} from 'react-router-dom';
// import './Success.css';

// function Success() {

//   const navigate = useNavigate();

 
//   return (
//   <>  
//   <div id="tooplate_content">

// <div class="content_box content_box_last">
//       <h2> Payment completed</h2>
//       <h3>Charity Done Successfully....</h3>
// </div>

// <div class="cleaner"></div>
// </div>
//   </>
//   );
// }

// export default Success;




import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';
import axios from 'axios';
import { __transactionapiurl } from '../../API_URL';
import { toast } from "react-toastify";

function Success() {

  const navigate = useNavigate();
  const location = useLocation();

  const { email, amount } = location.state || {};

  // useEffect(()=>{
    

    const saveTransaction = async ()=>{
      if(!email || !amount){
      return;
    }

      try{
        const response = await axios.post(__transactionapiurl+"save", {
          userId : email,
          amount : amount
        });
         console.log("Transaction Saved:", response.data);
        toast.success("Transaction saved successfully ✅");
      }
     catch(error){
       console.error("Error saving transaction:", error);
        toast.error("Failed to save transaction ❌");
     }

    };

    

  // },[email,amount]);

  return (
    <section className="templatemo-container light-gray-bg section-shadow-bottom">

      <div className="container">

        {/* Title */}
        <div className="row section-title-container">
          <div className="col-lg-12 text-uppercase text-center">
            <h2 className="section-title">
              Payment Successful 🎉
            </h2>
            <div className="section-title-underline-blue"></div>
            <hr className="section-title-underline"/>
          </div>
        </div>

        {/* Success Box */}
        <div className="form-wrapper text-center">

          <h3 className="section-title-2 text-uppercase font-weight-300">
            Thank You for Your Donation 💙
          </h3>

          <p className="gray-text">
            Your contribution makes a difference!
          </p>

          <br/>

          <p><strong>Email:</strong> {email}</p>
          <p><strong>Amount Paid:</strong> ₹{amount}</p>
  
          <br/>
          <button 
            className="btn-blue-gradient"
            onClick={saveTransaction}
          >
            Save Transaction 💾
          </button>

          <br/><br/>

          <button 
            className="btn-blue-gradient"
            onClick={() => navigate('/charity')}
          >
            Go to Home
          </button>

        </div>

      </div>
    </section>
  );
}

export default Success;
