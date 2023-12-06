import * as React from "react";
import { useState } from "react";
import axios from "axios";
// import CompanyListComponent from "./CompanyLis";
import { useNavigate } from "react-router-dom";

export default function CompanyRegister() {
  const [companyName, setCompanyName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/company/register",
        {
          companyName,
          ownerName,
          mobile,
          email,
          address: {
            street,
            city,
            state,
            zipCode
        }
        }
      );
      console.log("User registered:", response.data);
      navigate('/');
      // You can add further actions after successful registration (e.g., redirect)
      
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row vertical-center">
        <div >
        <h2 >Register Company</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Owner Name"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Contact Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label mt-3">
                Street
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => setStreet(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Pincode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>            
          </form>
        </div>
      </div>
    </div>
  );
}
