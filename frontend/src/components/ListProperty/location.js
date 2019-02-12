import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import cookie from "react-cookies";
import listbullet from "../../images/listbullet.png";
import { withRouter } from "react-router-dom";
import ConfirmListing from "./availabilityPricing";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/loginactions";
import { locationEntries } from "../../actions/listPropertyActions";
import Footer from "../Footer/footer";

class LocaTion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flagNext: false,
      address: this.props.LocationEntries.address,
      building: this.props.LocationEntries.building,
      city: this.props.LocationEntries.city,
      stat: this.props.LocationEntries.stat,
      zip: this.props.LocationEntries.zip
    };
  }

  handleAddress = e => {
    this.setState({
      address: e.target.value
    });
  };

  handleBuilding = e => {
    this.setState({
      building: e.target.value
    });
  };

  handleCity = e => {
    this.setState({
      city: e.target.value
    });
  };

  handleState = e => {
    this.setState({
      stat: e.target.value
    });
  };

  handleZip = e => {
    this.setState({
      zip: e.target.value
    });
  };

  handleNext = e => {
    console.log("I am in handle next of location page");
    const data = {
      address: this.state.address,
      building: this.state.building,
      city: this.state.city,
      stat: this.state.stat,
      zip: this.state.zip
    };
    this.props.locationEntries(data, this.props.history);
  };

  handleLogout = e => {
    this.props.logoutUser();
  };

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.

  render() {
    let footer = <Footer data={this.props.data} />;
    return (
      <React.Fragment>
        <div>
          <div className="ha-partner-nav-header-impersonation-hidden" />
          <div />
          <header
            className="ha-partner-nav-header ha-partner-nav-header-loaded theme-gt generic"
            style={{
              paddingTop: "0px",
              marginTop: "0px",
              backgroundColor: "#f5f4f4"
            }}
          >
            <Link
              style={{ padding: "25px" }}
              className="ha-partner-logo-section"
              to="/mainpage"
            >
              <img
                src="http://csvcus.homeaway.com/rsrcs/cdn-logos/2.10.6/bce/moniker/homeaway_us/logo-bceheader.svg"
                className="ha-partner-logo"
              />
            </Link>
            <div
              className="ha-partner-header-section ha-partner-nav-app-switcher ha-partner-nav-app-switcher-closed"
              style={{
                float: "right",
                marginRight: "20px",
                paddingLeft: "15px",
                paddingTop: "7px"
              }}
            >
              <div className="ha-partner-nav-app-switcher-closed-icon">
                <div className="nav-app-switcher-closed-icon-grid">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                  >
                    <g fill="currentColor">
                      <rect x="1" y="1" width="4" height="4" />
                      <rect x="9" y="1" width="4" height="4" />
                      <rect x="17" y="1" width="4" height="4" />
                      <rect x="1" y="9" width="4" height="4" />
                      <rect x="9" y="9" width="4" height="4" />
                      <rect x="17" y="9" width="4" height="4" />
                      <rect x="1" y="17" width="4" height="4" />
                      <rect x="9" y="17" width="4" height="4" />
                      <rect x="17" y="17" width="4" height="4" />
                    </g>
                  </svg>
                </div>
                <div className="ha-partner-nav-app-switcher-closed-icon-close">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                  />
                </div>
              </div>
            </div>

            <div className="ha-partner-header-section ha-partner-nav-cart-empty">
              <a className="ha-part-nav-cart">
                <i className="ha-partner-nav-cart-icon" />
              </a>
            </div>
            <div
              class="ha-partner-notification-center-container "
              style={{ padding: "15px" }}
            >
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 20 22"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="#353E44"
                  stroke-width="1.55"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="square"
                  transform="translate(-1310.000000, -19.000000)"
                >
                  <g transform="translate(1312.000000, 14.000000)">
                    <g transform="translate(0.000000, 6.000000)">
                      <path d="M10.9090909,17.2727273 C10.9090909,18.8181818 9.72727273,20 8.18181818,20 C6.63636364,20 5.45454545,18.8181818 5.45454545,17.2727273" />
                      <path d="M14.5454545,10.9090909 C14.5454545,8.63636364 14.5454545,6.36363636 14.5454545,6.36363636 C14.5454545,2.81818182 11.7272727,0 8.18181818,0 C4.63636364,0 1.81818182,2.81818182 1.81818182,6.36363636 C1.81818182,6.36363636 1.81818182,8.63636364 1.81818182,10.9090909 C1.81818182,14.5454545 0,17.2727273 0,17.2727273 L16.3636364,17.2727273 C16.3636364,17.2727273 14.5454545,14.5454545 14.5454545,10.9090909 Z" />
                    </g>
                  </g>
                </g>
              </svg>
              <div class="ha-partner-notification-center-list-container collapsed">
                <div class="notification-center-list-item-container">
                  <div class="notification-center-list-item-title" />
                  <div class="notification-center-list-item-notification-text">
                    No new notifications
                  </div>
                </div>
              </div>
            </div>
            <div className="ha-partner-nav-account ha-partner-nav-account-collapsed ha-partner-header-section">
              <div className="ha-partner-nav-account-header">
                <svg
                  className="ha-partner-default-user-avatar"
                  width="81px"
                  height="81px"
                  viewBox="0 0 81 81"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="MVP"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g transform="translate(-4.000000,-4.000000)">
                      <g transform="translate(4.000000,4.000000)">
                        <g>
                          <mask id="mask-2" fill="black">
                            <circle cx="40.5" cy="40.5" r="40.5" />
                          </mask>
                          <circle cx="40.5" cy="40.5" r="40.5" fill="#353E4" />
                          <path
                            d="M48.776466,28.3505709 C48.9673306,24.1982998 45.331637,20.9508492 41.0825823,20.9508492 C36.8326011,20.9508492 33.145022,24.2262096 33.3886987,28.3505709 C33.4368781,29.1797646 34.242957,33.2834185 34.242957,33.2834185 C34.9082037,36.846881 37.3051301,39.861149 41.0825823,39.861149 C44.8591081,39.861149 47.2087816,36.8927973 47.9212812,33.2834185 C47.9212812,33.2834185 48.7384783,29.180665 48.776466,28.3505709"
                            fill="black"
                            opacity="0.824898098"
                            mask="url(#mask-2)"
                          />
                          <path
                            d="M57.5226562,54.4043077 C57.5226562,54.4043077 50.2762854,56.7685453 40.7302734,56.7685453 C31.1842615,56.7685453 23.9378906,54.4043077 23.9378906,54.4043077 L24.7439695,47.94722 C25.082152,45.8368723 26.8545989,44.5125031 28.7938208,44.0749481 L40.7302734,41.7971411 L52.6602404,44.0614433 C54.6328173,44.5422137 56.3774684,45.8071618 56.7156509,47.9364162 L57.5226562,54.4043077 Z"
                            fill="black"
                            opacity="0.824898098"
                            mask="url(#mask-2)"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    // type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "350"
                    }}
                  >
                    {this.props.user.name}
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <Link
                      to="/ownerdashboard"
                      class="dropdown-item"
                      role="menuitem"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/updateprofile"
                      class="dropdown-item"
                      role="menuitem"
                    >
                      Update Profile
                    </Link>
                    <button
                      class="dropdown-item"
                      role="menuitem"
                      onClick={this.handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>

                <div className="ha-partner-nav-account-title" />
              </div>
            </div>
            <div />
          </header>
          <div className="checklist-container" style={{ marginTop: "50px" }}>
            <div />
            <div
              className="row"
              style={{ marginLeft: "-22px", marginRight: "-15px" }}
            >
              <div
                className="col-md-12"
                style={{
                  width: "100%",
                  float: "left",
                  position: "relative",
                  minHeight: "1px",
                  paddingLeft: "15px",
                  paddingRight: "15px"
                }}
              >
                <div className="checklist-progress-bar-container">
                  <div className="checklist-progress-bar">
                    <div className="progress-message">
                      <div id="message-text">Progress</div>
                    </div>
                    <div className="progress-image">
                      <div className="bar done" />
                      <div
                        className="bar not-done"
                        style={{
                          width: "100%",
                          left: "0%",
                          borderRadius: "10px"
                        }}
                      />
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="row content-with-nav">
                <div className="nav-container col-md-3">
                  <div id="checklist-nav-container">
                    <div className="dash-checklist-container nav-dash nav-dash-bce">
                      <ul className="nav-list">
                        <p
                          className="dash-checklist-item selected"
                          data-automation-class="summary"
                          style={{ fontSize: "22px", fontWeight: "400" }}
                        >
                          <Link
                            className="selected dash-checklist-step-header"
                            style={{ color: "black" }}
                            to="/mainpage"
                          >
                            <div className="dash-checklist-status checklist-status" />
                            <div className="dash-checklist-label">Welcome</div>
                          </Link>
                        </p>
                        <li
                          className="dash-checklist-item"
                          data-automation-class="location"
                          style={{
                            paddingTop: "5px",
                            paddingBottom: "42px",
                            listStyleImage: { listbullet }
                          }}
                        >
                          <span>
                            <Link
                              to="/location"
                              className="dash-checklist-label"
                              style={{ color: "black" }}
                            >
                              Location
                            </Link>
                          </span>
                        </li>
                        <li
                          className="dash-checklist-item"
                          data-automation-class="details"
                          style={{ paddingBottom: "42px" }}
                        >
                          <span>
                            <Link
                              to="/details"
                              className="dash-checklist-label"
                              style={{ color: "black" }}
                            >
                              Details
                            </Link>
                          </span>
                        </li>
                        <li
                          className="dash-checklist-item"
                          data-automation-class="bookingOptions"
                          style={{ paddingBottom: "42px" }}
                        >
                          <span>
                            <Link
                              to="/bookingoptions"
                              className="dash-checklist-label"
                              style={{ color: "black" }}
                            >
                              Booking Options
                            </Link>
                          </span>
                        </li>
                        <li
                          className="dash-checklist-item"
                          data-automation-class="photos"
                          style={{ paddingBottom: "42px" }}
                        >
                          <span>
                            <Link
                              to="/photos"
                              className="dash-checklist-label"
                              style={{ color: "black" }}
                            >
                              Photos
                            </Link>
                          </span>
                        </li>
                        <li
                          className="dash-checklist-item"
                          data-automation-class="availabilityPricing"
                          style={{ paddingBottom: "42px" }}
                        >
                          <span>
                            <Link
                              to="/availabilityPricing"
                              className="dash-checklist-label"
                              style={{ color: "black" }}
                            >
                              Availability & Pricing
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 checklist-content">
                  <div className="checklist-page">
                    <div className="nav-container col-md-3">
                      <div className="col-md-7 content-panel-container">
                        <div className="panel-body">
                          <div>
                            <section className="login-location">
                              <div className="container">
                                <div class="row">
                                  <div class="col-md-6 login-sec">
                                    <h3
                                      class="myh3"
                                      style={{
                                        fontFamily:
                                          "Lato,Arial,Helvetica Neue,sans-serif",
                                        width: "300px"
                                      }}
                                    >
                                      Verify your location.
                                    </h3>
                                    <form class="login-form">
                                      <div class="form-group">
                                        <div className="form-group floating-label not-empty">
                                          <div className="FormSelect__wrapper">
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="Street Address"
                                              required
                                              style={{ marginTop: "25px" }}
                                              onChange={this.handleAddress}
                                              value={this.state.address}
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-group">
                                        <div className="form-group floating-label not-empty">
                                          <div className="FormSelect__wrapper">
                                            <input
                                              type="text"
                                              class="form-control"
                                              style={{ marginTop: "25px" }}
                                              placeholder="Unit, Suite, Building etc."
                                              onChange={this.handleBuilding}
                                              value={this.state.building}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <div className="form-group floating-label not-empty">
                                          <div className="FormSelect__wrapper">
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="City"
                                              required
                                              style={{ marginTop: "25px" }}
                                              onChange={this.handleCity}
                                              value={this.state.city}
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div class="form-group" />
                                      <div className="form-group floating-label not-empty">
                                        <div className="FormSelect__wrapper">
                                          <select
                                            aria-label="State"
                                            name="stateProvince"
                                            onChange={this.handleState}
                                            class="form-control FormSelect__select"
                                            style={{
                                              height: "50px",
                                              marginTop: "25px"
                                            }}
                                            value={this.state.stat}
                                          >
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>

                                            <option value="CA">
                                              California
                                            </option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">
                                              Connecticut
                                            </option>
                                            <option value="DE">Delaware</option>
                                            <option value="DC">
                                              District of Columbia
                                            </option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">
                                              Louisiana
                                            </option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">
                                              Massachusetts
                                            </option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">
                                              Minnesota
                                            </option>
                                            <option value="MS">
                                              Mississippi
                                            </option>
                                            <option value="MO">Missouri</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NV">Nevada</option>
                                            <option value="NH">
                                              New Hampshire
                                            </option>
                                            <option value="NJ">
                                              New Jersey
                                            </option>
                                            <option value="NM">
                                              New Mexico
                                            </option>
                                            <option value="NY">New York</option>
                                            <option value="NC">
                                              North Carolina
                                            </option>
                                            <option value="ND">
                                              North Dakota
                                            </option>
                                            <option value="OH">Ohio</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">
                                              Pennsylvania
                                            </option>
                                            <option value="RI">
                                              Rhode Island
                                            </option>
                                            <option value="SC">
                                              South Carolina
                                            </option>
                                            <option value="SD">
                                              South Dakota
                                            </option>
                                            <option value="TN">
                                              Tennessee
                                            </option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">
                                              Washington
                                            </option>
                                            <option value="WV">
                                              West Virginia
                                            </option>
                                            <option value="WI">
                                              Wisconsin
                                            </option>
                                            <option value="WY">Wyoming</option>
                                          </select>
                                          <i
                                            aria-hidden="true"
                                            class="icon-chevron-down FormSelect__chevron"
                                          />
                                        </div>
                                      </div>

                                      <div class="form-group">
                                        <div className="form-group floating-label not-empty">
                                          <div className="FormSelect__wrapper">
                                            <input
                                              type="number"
                                              style={{ marginTop: "25px" }}
                                              class="form-control"
                                              placeholder="Zip Code"
                                              required
                                              onChange={this.handleZip}
                                              value={this.state.zip}
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <br />
                                      <br />
                                      <div className="checklist-buttons">
                                        <div>
                                          <button
                                            className="btn btn-primary continue-button"
                                            onClick={this.handleNext}
                                          >
                                            <span>Next</span>
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {footer}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginOwnerReducer.user,
    isAuthenticated: state.ownerdashboardReducer.isAuthenticated,
    LocationEntries: state.listPropertyReducer.LocationEntries,
    LocationFlag: state.listPropertyReducer.LocationFlag
  };
};

export default connect(
  mapStateToProps,
  { locationEntries, logoutUser }
)(withRouter(LocaTion));
