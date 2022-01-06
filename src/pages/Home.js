import React, { useState } from "react";
import { Link } from "react-router-dom";
import View from "../components/View";
import "../App.css"

export default function Home() {
  const [open, setOpen] = useState(false); //to control view modal
  const [userDetails, setUserDetails] = useState();
  const list = localStorage.getItem("usersList")
    ? JSON.parse(localStorage.getItem("usersList"))
    : [];

  //to handle deleting a user
  const handleDeleteFunction = (e, key) => {
    let index = list.indexOf(key);
    list.splice(index, 1);
    localStorage.setItem("usersList", JSON.stringify(list));
    window.location.reload();
  };

  //to handle view modal
  const handleView = (e, key) => {
    console.log("om")
    setUserDetails(key);
    setOpen(true);
  };

  //to handle closing view modal
  const handleCloseView = () => {
    setOpen(false)
  }

  return (
    <div className="container">
      <h1>Users List</h1>
      <table
        className="table table-light table-hover"
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Id</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.length
            ? list.map((key, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{key.firstName}</td>
                    <td>{key.lastName}</td>
                    <td>{key.emailId}</td>
                    <td>{key.mobileNumber}</td>
                    <td>
                      <button
                        className="btn btn-outline-secondary btn-icons"
                        onClick={(e) => handleView(e, key)}
                      >
                        <img
                          src="https://img.icons8.com/ios-glyphs/24/000000/visible--v1.png"
                          alt="view"
                        />
                      </button>
                      <Link
                        className="btn btn-outline-secondary btn-icons"
                        to="/user/edit"
                        state={{ index }}
                      >
                        <img
                          src="https://img.icons8.com/material-rounded/24/000000/edit--v1.png"
                          alt="edit"
                        />
                      </Link>
                      <button
                        className="btn btn-outline-secondary btn-icons"
                        onClick={(e) => handleDeleteFunction(e, key)}
                      >
                        <img
                          src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png"
                          alt="delete"
                        />
                      </button>
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>

      {open ? <View userDetails={userDetails} show={open} handleClose={handleCloseView}/> : ""}
    </div>
  );
}
