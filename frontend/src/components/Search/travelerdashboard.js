import React, { Component } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { travelerDashboard } from "../../actions/travelerDashboardActions";
import Pagination from "../Pagination/pagination";
import { withRouter } from "react-router";
import { logoutUser } from "../../actions/loginactions";
import Footer from "../Footer/footer";

class TravelerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      authFlag: false,
      propdetails: [],
      total: "",
      renderedProperty: [],
      page: 1
    };
  }

  handlePageChange = page => {
    const properties = Object.keys(this.props.dashProperties).map(
      property => this.props.dashProperties[property]
    );
    const itemsLeft = true;
    const renderedProperty = properties.slice(
      (page - 1) * 5,
      (page - 1) * 5 + 5
    );
    console.log(renderedProperty);

    this.setState({ page, renderedProperty, itemsLeft });
  };

  handleLogout = e => {
    this.props.logoutUser();
  };

  handleInboxTraveler = e => {
    this.props.history.push("/travelerInbox");
  };

  componentDidMount() {
    const data = {
      email: this.props.user.email
    };
    this.props.travelerDashboard(data, this.props.history);
  }

  render() {
    const { page, total, renderedProperty } = this.state;
    let footer = <Footer data={this.props.data} />;
    const { user } = this.props;
    let image = null;
    let diff = null;
    let arrDate = null;
    let depDate = null;

    const properties = Object.keys(this.props.dashProperties)
      .map(property => this.props.dashProperties[property])
      .slice(0, 5);

    const propertiesTotal = Object.keys(this.props.dashProperties).map(
      property => this.props.dashProperties[property]
    );

    this.state.total = propertiesTotal.length;

    let finalProperty =
      this.state.renderedProperty.length !== 0
        ? this.state.renderedProperty
        : properties;

    let showproperty = finalProperty.map(prop => {
      image = prop.photos.split(",");
      arrDate = new Date(prop.arrivalDate);
      depDate = new Date(prop.departureDate);
      diff = Math.abs(depDate.getDay() - arrDate.getDay());
      return (
        <div>
          <br />
          <div class="row" style={{ backgroundColor: "#eee" }}>
            <div class="col-md-6 banner-sec">
              <div class="card">
                <img
                  class="card-img"
                  src={"uploads/" + image[0]}
                  alt="Card image"
                />
              </div>
            </div>
            <div class="col-md-6 login-sec">
              <h2
                style={{
                  fontWeight: "550",
                  fontSize: "30px",
                  fontFamily: "Courier New"
                }}
              >
                {prop.headline}
              </h2>

              <div className="row">
                <div className="col-md-4">
                  <span style={{ fontSize: "18px", fontFamily: "sans-serif" }}>
                    {prop.propertyType}
                  </span>
                </div>
                <div className="col-md-4">
                  <span style={{ fontSize: "18px", fontFamily: "sans-serif" }}>
                    {prop.bedrooms} Bedrooms
                  </span>
                </div>
                <div className="col-md-4">
                  <span style={{ fontSize: "18px", fontFamily: "sans-serif" }}>
                    {prop.bathrooms} Bathrooms
                  </span>
                </div>
              </div>
              <br />
              <div class="col-md-12 login-sec">
                <h2
                  style={{
                    fontWeight: "450",
                    fontSize: "20px",
                    fontFamily: "Courier New",
                    marginLeft: "-15px",
                    paddingBottom: "0px"
                  }}
                >
                  {diff} Days Vacation
                </h2>
              </div>
              <br />
              <div class="col-md-12 login-sec">
                <h2
                  style={{
                    fontWeight: "450",
                    fontSize: "20px",
                    fontFamily: "Courier New",
                    marginLeft: "-15px",
                    paddingBottom: "0px"
                  }}
                >
                  {prop.guests} Guests
                </h2>
              </div>
              <br />
              <div class="col-md-12 login-sec">
                <h2
                  style={{
                    fontWeight: "450",
                    fontSize: "20px",
                    fontFamily: "Courier New",
                    marginLeft: "-15px",
                    paddingBottom: "0px"
                  }}
                >
                  Price: ${prop.price}
                  /night
                </h2>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      );
    });

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
              backgroundColor: "#f7f6f6"
            }}
          >
            <Link
              style={{ padding: "25px" }}
              className="ha-partner-logo-section"
              to="/home"
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
                    <button
                      onClick={this.handleInboxTraveler}
                      className="dropdown-item"
                      role="menuitem"
                    >
                      Inbox
                    </button>

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
          <div>
            <h2
              style={{
                fontSize: "30px",
                fontFamily: "Comic Sans MS",
                textAlign: "center",
                fontWeight: "500",
                marginTop: "80px",
                marginBottom: "20px",
                position: "relative"
              }}
            >
              Recent Bookings
            </h2>
            <section className="login-block search">
              <div className="row">{showproperty}</div>
            </section>
          </div>
          <div>
            <Pagination
              margin={2}
              page={page}
              count={Math.ceil(this.state.total / 5)}
              onPageChange={this.handlePageChange}
            />
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
    dashProperties: state.travelerDashboardReducer.dashProperties
  };
};

export default connect(
  mapStateToProps,
  { travelerDashboard, logoutUser }
)(withRouter(TravelerDashboard));
