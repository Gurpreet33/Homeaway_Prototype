import React, { Component } from "react";
import { Redirect } from "react-router";
import maui from "../../images/hawaii.png";
import { Link } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";
import SweetAlert from "react-bootstrap-sweetalert";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Footer from "../Footer/footer";
import { logoutUser } from "../../actions/loginactions";
import { updateProfile } from "../../actions/profileActions";

class UpdateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email2: "",
      phone: "",
      gender: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      stat: "",
      zip: "",
      fbUrl: "",
      aboutMe: "",
      Alert: false
    };
  }

  handleFbUrl = e => {
    this.setState({
      fbUrl: e.target.value
    });
  };

  handleAboutMe = e => {
    this.setState({
      aboutMe: e.target.value
    });
  };

  handleEmail2 = e => {
    this.setState({
      email2: e.target.value
    });
  };

  handlePhone = e => {
    this.setState({
      phone: e.target.value
    });
  };

  handleGender = e => {
    this.setState({
      gender: e.target.value
    });
  };

  handleAddressLine1 = e => {
    this.setState({
      addressLine1: e.target.value
    });
  };

  handleAddressLine2 = e => {
    this.setState({
      addressLine2: e.target.value
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

  handleAboutMe = e => {
    this.setState({
      aboutMe: e.target.value
    });
  };

  handleLogout = e => {
    this.props.logoutUser();
  };

  handleSave = e => {
    e.preventDefault();
    const data = {
      email: this.props.user.email,
      email2: this.state.email2,
      phone: this.state.phone,
      gender: this.state.gender,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      city: this.state.city,
      state: this.state.stat,
      zip: this.state.zip,
      fbUrl: this.state.fbUrl,
      aboutMe: this.state.aboutMe
    };
    this.props.updateProfile(data, this.props.history);
  };

  render() {
    let footer = <Footer data={this.props.data} />;
    return (
      <React.Fragment>
        <div>
          <header
            className="ha-partner-nav-header ha-partner-nav-header-loaded theme-gt generic"
            style={{
              backgroundColor: "#f5f4f4"
            }}
          >
            <Link
              style={{ padding: "25px" }}
              className="ha-partner-logo-section"
              to="/ownerdashboard"
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
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ color: "Black", fontWeight: "300" }}
                  >
                    {this.props.user.name}
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <Link class="dropdown-item" role="menuitem" to="/mainpage">
                      List a property
                    </Link>
                    <Link
                      class="dropdown-item"
                      role="menuitem"
                      to="/ownerdashboard"
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
                      onClick={this.handleLogout}
                      className="dropdown-item"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                </div>
                <div className="divider" />
              </div>
            </div>
            <div />
          </header>
          <div className="heading">
            <p
              className="text-center"
              style={{
                fontWeight: "300",
                fontSize: "35px"
              }}
            >
              {this.props.user.name}
            </p>
          </div>
          <section
            className="login-block-update"
            style={{
              maxWidth: "650px",
              padding: "80px 30px 80px 110px",
              backgroundColor: "#eee"
            }}
          >
            <div className="container">
              <div class="row">
                <div class="col-md-6 login-sec">
                  <h3
                    style={{
                      fontWeight: "300",
                      width: "400px",
                      marginBottom: "40px",
                      textAlign: "center"
                    }}
                  >
                    Account Information
                  </h3>
                  <form class="login-form">
                    <div class="form-group" style={{ marginBottom: "40px" }}>
                      <input
                        type="email"
                        class="form-control mb-2 mr-sm-2"
                        placeholder="Alternate Email (Optional)"
                        onChange={this.handleEmail2}
                        style={{
                          height: "60px",
                          width: "400px",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div class="form-group" style={{ marginBottom: "40px" }}>
                      <input
                        type="text"
                        class="form-control mb-2 mr-sm-2"
                        placeholder="Phone (Include Country Code)"
                        onChange={this.handlePhone}
                        style={{
                          height: "60px",
                          width: "400px",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>

                    <div
                      className="form-group"
                      style={{ marginBottom: "40px" }}
                    >
                      <div className="form-group floating-label not-empty">
                        <div className="FormSelect__wrapper">
                          <label
                            style={{
                              fontSize: "16px",
                              color: "grey",
                              position: "absolute",
                              padding: "0 0 0 8px"
                            }}
                          >
                            Gender
                          </label>
                          <select
                            aria-label="Gender"
                            name="gender"
                            onChange={this.handleGender}
                            className="form-control FormSelect__select"
                            style={{
                              fontSize: "16px",
                              padding: "16px 0 16px",
                              height: "60px",
                              width: "400px"
                            }}
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="nottosay">Better not to say</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="form-group" style={{ marginBottom: "40px" }}>
                      <input
                        type="text"
                        class="form-control mb-2 mr-sm-2"
                        placeholder="Address Line 1"
                        onChange={this.handleAddressLine1}
                        style={{
                          height: "60px",
                          width: "400px",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div class="form-group" style={{ marginBottom: "40px" }}>
                      <input
                        type="text"
                        class="form-control mb-2 mr-sm-2"
                        placeholder="Address Line 2"
                        onChange={this.handleAddressLine2}
                        style={{
                          height: "60px",
                          width: "400px",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>

                    <div class="form-group" style={{ marginBottom: "40px" }}>
                      <input
                        type="text"
                        class="form-control mb-2 mr-sm-2"
                        placeholder="City"
                        onChange={this.handleCity}
                        style={{
                          height: "60px",
                          width: "400px",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div class="form-group" style={{ marginBottom: "40px" }}>
                      <div className="form-group floating-label not-empty">
                        <div className="FormSelect__wrapper">
                          <label
                            style={{
                              fontSize: "16px",
                              color: "grey",
                              position: "absolute",
                              padding: "0 0 0 10px"
                            }}
                          >
                            State
                          </label>
                          <select
                            aria-label="State"
                            name="stateProvince"
                            onChange={this.handleState}
                            class="form-control FormSelect__select"
                            style={{
                              height: "60px",
                              marginTop: "25px",
                              width: "400px"
                            }}
                          >
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                          </select>
                          <i
                            aria-hidden="true"
                            class="icon-chevron-down FormSelect__chevron"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group" style={{ marginBottom: "40px" }}>
                      <input
                        type="text"
                        class="form-control mb-2 mr-sm-2"
                        placeholder="Zip code"
                        onChange={this.handleZip}
                        style={{
                          height: "60px",
                          width: "400px",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div class="form-group" style={{ marginBottom: "40px" }}>
                      <input
                        type="text"
                        class="form-control mb-2 mr-sm-2"
                        placeholder="Facebook Url"
                        onChange={this.handleFbUrl}
                        style={{
                          height: "60px",
                          width: "400px",
                          border: "1px solid grey",
                          borderRadius: "30"
                        }}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ marginBottom: "40px" }}
                    >
                      <div className="form-group floating-label not-empty">
                        <div className="FormSelect__wrapper">
                          <textarea
                            style={{
                              height: "186px",
                              overflow: "auto",
                              width: "400px",
                              border: "1px solid grey",
                              borderRadius: "30"
                            }}
                            placeholder="About Me"
                            type="text"
                            className="form-control"
                            onChange={this.handleAboutMe}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <br />
                    <br />
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg btn-block form-control"
                      style={{
                        width: "400px",
                        borderRadius: "30px",
                        backgroundColor: "#da882c",
                        borderColor: "transparent"
                      }}
                      onClick={this.handleSave}
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {footer}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchEntries: state.homeReducer.searchEntries,
    storeSearchCriteria: state.homeReducer.storeSearchCriteria,
    user: state.loginOwnerReducer.user
  };
};

export default connect(
  mapStateToProps,
  { logoutUser, updateProfile }
)(withRouter(UpdateProfile));
