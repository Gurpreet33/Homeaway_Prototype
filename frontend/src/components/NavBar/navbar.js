import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

let imgurl = "../../images/image4.jpg";

class NavBar extends Component {
  state = {};
  render() {
    let redi = null;
    if (true) redi = <Redirect to="/home" />;
    return (
      <React.Fragment>
        <div className="cont2">
          <nav className="navbar transparent navbar-expand-md navbar-outline-light navbar-trans navbar-light bg-dark fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/Home">
                <font color="white">HomeAway </font>
              </Link>

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" />
              </button>
              <div class="collpase navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <font color="white">Country </font>
                    </a>
                  </li>
                  <div className="divider" />
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <font color="white">Trip Boards </font>
                    </a>
                  </li>
                  <div className="divider" />
                  <li className="nav-item">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-secondary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Login
                      </button>
                      <div class="dropdown-menu dropdown-menu-right">
                        <Link
                          to="/logintraveller"
                          class="dropdown-item"
                          role="menuitem"
                        >
                          Traveller login
                        </Link>
                        <Link
                          to="/loginowner"
                          class="dropdown-item"
                          role="menuitem"
                        >
                          Owner Login
                        </Link>
                      </div>
                    </div>
                    {/* <Link className="nav-link active" to="/loginowner">
                      <font color="white">Login </font>
                    </Link> */}
                  </li>
                  <div className="divider" />
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <font color="white">Messages </font>
                    </a>
                  </li>
                  <div className="divider" />
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <font color="white">Help </font>
                    </a>
                  </li>
                  <div className="divider" />
                  <li className="nav-item">
                    <Link className="nav-link active" to="/mainpage">
                      <font color="white">List your property </font>
                    </Link>
                  </li>
                  <div className="divider" />
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <font color="white">About </font>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {redi}
      </React.Fragment>
    );
  }
}

export default NavBar;
