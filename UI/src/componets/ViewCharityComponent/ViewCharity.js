// import './ViewAddedProduct.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { __transactionapiurl } from '../../API_URL'

const ViewTransactions = () => {

  const [transactionList, setTransactionList] = useState([])

   // ✅ ADD THESE STATES (pagination)
  const [entries, setEntries] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

    axios.get(__transactionapiurl+"fetch") 
          .then((response) => {
        setTransactionList(response.data.details)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  const deleteTransaction = async (txnId) => {
  try {

    if (!window.confirm("Are you sure you want to delete?")) return;

    await axios.delete(__transactionapiurl + "delete", {
      data: { TxN_id: txnId }   // ✅ sending in body
    });

    // update UI
    setTransactionList(
      transactionList.filter((t) => t.TxN_id !== txnId)
    );

  } catch (error) {
    console.log(error);
  }
};

  // ✅ ADD TOTAL AMOUNT LOGIC
  const totalAmount = transactionList.reduce(
    (sum, t) => sum + Number(t.amount), 0
  );

  // ✅ ADD PAGINATION LOGIC
  const lastIndex = currentPage * entries;
  const firstIndex = lastIndex - entries;
  const currentData = transactionList.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(transactionList.length / entries);


  return (
    <>
      <section className="templatemo-container section-shadow-bottom">
        <div className="container">

          <div className="row section-title-container">
            <div className="col-lg-12 text-uppercase text-center">
              <h2 className="section-title">
                Transaction History💳
              </h2>
              <div className="section-title-underline-blue"></div>
              <hr className="section-title-underline" />
            </div>
          </div>

           {/* ✅ TOTAL + ENTRIES CONTROL (ADDED) */}
          <div style={{display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               marginBottom: "20px",
               padding: "12px 18px",
               background: "linear-gradient(135deg, #e3f2fd, #fce4ec)",
               borderRadius: "10px",
               boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
            <div style={{fontWeight: "bold",
                         fontSize: "18px",
                         color: "#2c3e50"}}>
              💰 Total Charity: ₹{totalAmount}
            </div>

            <div style={{
                 display: "flex",
                 alignItems: "center",
                 gap: "8px",
                 fontWeight: "500"
               }}>
              Show 
              <select onChange={(e) => setEntries(e.target.value)}  
                style={{
                       padding: "5px 10px",
                       borderRadius: "6px",
                       border: "1px solid #ccc",
                       backgroundColor: "#fff",
                       cursor: "pointer"
                     }}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              entries
            </div>
          </div>

          {/* Transaction Table */}
          <div className="row">
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="product-table">
                  <thead>
                    <tr>
                      <th>Transaction ID</th>
                      <th>User ID</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>

                    {
                      // transactionList.map((row, index) => (
                     currentData.map((row, index) => (
                     <tr key={index}>
                          <td>{row.TxN_id}</td>
                          <td>{row.userId}</td>
                          <td>₹ {row.amount}</td>
                          
                          <td>{new Date(row.info).toLocaleString()}</td>
                           <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => deleteTransaction(row.TxN_id)}>
                                Delete
                              </button>
                            </td>
                        </tr>
                     
                      ))
                      }
                  </tbody>

                </table>
              </div>
            </div>
          </div>

 {/* ✅ PAGINATION UI (ADDED) */}
          <div style={{ display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "25px",
  gap: "15px"}}>
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            style={{
      padding: "8px 15px",
      borderRadius: "6px",
      border: "none",
      backgroundColor: currentPage === 1 ? "#ccc" : "#3498db",
      color: "#fff",
      cursor: currentPage === 1 ? "not-allowed" : "pointer"
    }}
            >
              ⬅ Prev
            </button>

            <span style={{
    fontWeight: "600",
    color: "#2c3e50"
  }}>Page {currentPage} of {totalPages}</span>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
           style={{
      padding: "8px 15px",
      borderRadius: "6px",
      border: "none",
      backgroundColor: currentPage === totalPages ? "#ccc" : "#2ecc71",
      color: "#fff",
      cursor: currentPage === totalPages ? "not-allowed" : "pointer"
    }}
           >
              Next ➡
            </button>
          </div>

        </div>
      </section>
    </>
  )
}

export default ViewTransactions