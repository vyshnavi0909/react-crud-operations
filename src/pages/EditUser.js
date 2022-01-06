import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditUser() {
  let location = useLocation(); //get index from location
  let navigate = useNavigate(); // to go to home page 
  
  const index = location.state.index;
  const list = localStorage.getItem("usersList")
    ? JSON.parse(localStorage.getItem("usersList"))
    : [];
  const key = list[index]; 
  
  const [fName, setFirstName] = useState(key.firstName);
  const [lName, setLastName] = useState(key.lastName);
  const [email, setEmail] = useState(key.emailId);
  const [mobileNumber, setMobileNumber] = useState(key.mobileNumber);
  const [dob, setDOB] = useState(key.dob);

  //to set user details object
  const userDetails = () => {
    return {
      firstName: fName.charAt(0).toUpperCase() + fName.slice(1),
      lastName: lName.charAt(0).toUpperCase() + lName.slice(1),
      emailId: email,
      mobileNumber: mobileNumber,
      dob: dob,
    };
  };

  //to store data in local storage
  const dataToStorage = (data) => {
    list[index] = data;
    localStorage.setItem("usersList", JSON.stringify(list));
  };

  //to handle inputs on changed
  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "dob":
        setDOB(value);
        break;
      case "mobileNumber":
        setMobileNumber(value);
        break;
      default:
        console.log("invalid");
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let data = userDetails();
    console.log(data);
    dataToStorage(data);
    navigate("/");
  };

  return (
    <div className="container add-user">
      <form className="form">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            defaultValue={fName}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            defaultValue={lName}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            defaultValue={email}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            name="dob"
            defaultValue={dob}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            defaultValue={mobileNumber}
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary submit"
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
