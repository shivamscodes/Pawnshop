import { useEffect, useState } from "react";
import axios from "axios";
import { __userapiurl } from "../../API_URL";
import { useNavigate } from "react-router-dom";

function Manageusers() {
  const navigate = useNavigate();

  const [users, setUserDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${__userapiurl}fetch`, {
        params: { role: "user" },
      })
      .then((response) => {
        setUserDetails(response.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const manageuserstatus = (_id, status) => {
    if (status === "active") {
      const data = { condition_obj: { _id }, content_obj: { status: 1 } };

      axios.patch(`${__userapiurl}update`, data).then(() => {
        alert("user profile activated successfully....");
        navigate("/manageusers");
      });
      return;
    }

    if (status === "inactive") {
      const data = { condition_obj: { _id }, content_obj: { status: 0 } };

      axios.patch(`${__userapiurl}update`, data).then(() => {
        alert("user profile in-activted successfully....");
        navigate("/manageusers");
      });
      return;
    }

    const data = { data: { _id } };
    axios.delete(`${__userapiurl}delete`, data).then(() => {
      alert("user profile deleted successfully....");
      navigate("/manageusers");
    });
  };

  return (
    <>
      <div>
        <section className="templatemo-container section-shadow-bottom">
          <div className="container">
            <center>
              <h2>View and Manage Users Details</h2>
            </center>
            <br />
            <br />
            <table className="user-table">
              <tr>
                <th>RegisterID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>City</th>
                <th>Gender</th>
                <th>Info</th>
                <th>Status</th>
                <th>Action</th>
                <th>Delete User</th>
              </tr>

              {users.map((row) => (
                <tr key={row._id}>
                  <td>{row._id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.mobile}</td>
                  <td>{row.address}</td>
                  <td>{row.city}</td>
                  <td>{row.gender}</td>
                  <td>{row.info}</td>
                  <td>{row.status ? <font color="green">Active</font> : <font color="red">InActive</font>}</td>

                  <td>
                    {row.status ? (
                      <font onClick={() => manageuserstatus(row._id, "inactive")} color="blue">
                        ChangeStatus
                      </font>
                    ) : (
                      <font onClick={() => manageuserstatus(row._id, "active")} color="blue">
                        ChangeStatus
                      </font>
                    )}
                  </td>

                  <td>
                    <font color="red" onClick={() => manageuserstatus(row._id, "delete")}>
                      Delete
                    </font>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default Manageusers;
