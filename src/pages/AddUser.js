import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser() {

  const navigate = useNavigate()

  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDOB] = useState("");

  //to set user details object
  const userDetails = () => {
    return {
      firstName: fName,
      lastName: lName,
      emailId: email,
      mobileNumber: mobileNumber,
      dob: dob,
    };
  };

  //to store data in local storage
  const dataToStorage = (data) => {
    let list = localStorage.getItem("usersList")
      ? JSON.parse(localStorage.getItem("usersList"))
      : [];
    list.push(data);
    localStorage.setItem("usersList", JSON.stringify(list));
    console.log(list);
  };

  //to handle inputs on change
  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "firstName":
        value = value.charAt(0).toUpperCase() + value.slice(1)
        console.log(value)
        setFirstName(value);
        break;
      case "lastName":
        value = value.charAt(0).toUpperCase() + value.slice(1)
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
    dataToStorage(data);
    navigate("/")
  };

  return (
    <div className="container add-user">
      <h1 className="display-3 ">Add New User</h1>
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
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="btn btn-primary submit" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
