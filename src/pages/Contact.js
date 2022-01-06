import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dataToStorage = (data) => {
    let list = localStorage.getItem("userMessages")
      ? JSON.parse(localStorage.getItem("userMessages"))
      : [];
    list.push(data);
    localStorage.setItem("userMessages", JSON.stringify(list));
  };


  const handleChange = (e) => {
    let name = e.target.name;
    switch (name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        console.log("invalid");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      emailID: email,
      message: message,
    };
    dataToStorage(data);
    navigate("/")
  };

  return (
    <div className="container">
      <form className="contact-form">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter your message below:
          </label>
          <textarea
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
