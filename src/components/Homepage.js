import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FcPlus } from "react-icons/fc";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <div className="Homepage">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <h1 style={{ color: "whitesmoke" }}>SCRIPS APP</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/watchlist">
                  Watchlist
                  <FcPlus size="30px" style={{ marginLeft: "3px" }} />
                  <span className="sr-only"></span>
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search Stocks"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-danger my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="table-stocks"></div>
      </div>
    </>
  );
};

export default Homepage;
