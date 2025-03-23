import React from "react";
import PropTypes from "prop-types";
import {Link } from "react-router-dom"

export default function Navbar(props) {
  const handleBooking=()=>{
    document.title=`${props.title} - Booking`
  }
  const handleTerms=()=>{
   document.title=`${props.title} - Terms`
  }
  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/Home">
                Home
              </Link>
              <Link className="nav-link" onClick={handleBooking} to="/Booking">
                Booking
              </Link>
              <Link className="nav-link" to="/">
                Location
              </Link>
              <Link className="nav-link" onClick={handleTerms} to="/Terms">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = { title: PropTypes.string.isRequired };
