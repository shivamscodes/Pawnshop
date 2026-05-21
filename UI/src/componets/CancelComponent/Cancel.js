// import './Cancel.css';

// function Cancel() {
//   return (
//   <>  
//   <div id="tooplate_content">

// <div class="content_box content_box_last">
//       <h2> Payment failed</h2>
//       <h3>Please try again....</h3>
// </div>

// <div class="cleaner"></div>
// </div>
//   </>
//   );
// }

// export default Cancel;




import { useNavigate } from 'react-router-dom';
import './Cancel.css';

function Cancel() {

  const navigate = useNavigate();

  return (
    <section className="templatemo-container light-gray-bg section-shadow-bottom">

      <div className="container">

        {/* Title */}
        <div className="row section-title-container">
          <div className="col-lg-12 text-uppercase text-center">
            <h2 className="section-title text-danger">
              Payment Failed ❌
            </h2>
            <div className="section-title-underline-blue"></div>
            <hr className="section-title-underline"/>
          </div>
        </div>

        {/* Cancel Box */}
        <div className="form-wrapper text-center">

          <h3 className="section-title-2 text-uppercase font-weight-300">
            Something went wrong
          </h3>

          <p className="gray-text">
            Your payment was not completed. Please try again.
          </p>

          <br/>

          {/* Buttons */}
          <button 
            className="btn-blue-gradient"
            onClick={() => navigate('/charity')}
          >
            Try Again
          </button>

          <br/><br/>

         

        </div>

      </div>
    </section>
  );
}

export default Cancel;