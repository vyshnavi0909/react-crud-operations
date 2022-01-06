import React from "react";
import BackIcon from "../backIcon.svg";

export default function View(props) {
  //to toggle classes of modal
  const showHideClassName = props.show
    ? "view-modal display-block"
    : "view- modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="view-btn">
          <img src={BackIcon} alt="back" onClick={props.handleClose} />
          <span
            className="display-6"
            style={{ marginLeft: "10px" }}
            onClick={props.handleClose}
          >
            Back to Home
          </span>
        </button>
        <p className="view-items">
          <label>First Name:</label> <span>{props.userDetails.firstName}</span>
        </p>
        <p className="view-items">
          <label>Last Name:</label> <span>{props.userDetails.lastName}</span>
        </p>
        <p className="view-items">
          <label>Email Id:</label> <span>{props.userDetails.emailId}</span>
        </p>
        <p className="view-items">
          <label>Date of Birth:</label> <span>{props.userDetails.dob}</span>
        </p>
        <p className="view-items">
          <label>Mobile Number:</label>
          <span>{props.userDetails.mobileNumber}</span>
        </p>
      </section>
    </div>
  );
}
