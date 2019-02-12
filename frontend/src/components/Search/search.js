import React, { Component } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchButtonClick } from "../../actions/homeactions";
import Pagination from "../Pagination/pagination";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import { withRouter } from "react-router";
import { propertySelected } from "../../actions/travelerSearchActions";
import { logoutUser } from "../../actions/loginactions";
import Footer from "../Footer/footer";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: this.props.searchEntries,
      selectedProp: false,
      total: null,
      renderedProperty: [],
      place: this.props.storeSearchCriteria.place,
      arrive: this.props.storeSearchCriteria.arrive,
      depart: this.props.storeSearchCriteria.depart,
      guests: this.props.storeSearchCriteria.guests,
      page: 1,
      value: 2000,
      valueChangeFlag: false,
      priceFlag: false,
      itemsLeft: false,
      beds: 3,
      bedFlag: false
    };
  }

  handleChangeStart = () => {
    console.log("Change event started");
  };
  handleChangeStartBeds = () => {
    console.log("bedroom Change started");
  };

  handleChangeBeds = value => {
    this.setState({
      beds: value
    });
  };

  handleChangeCompleteBeds = () => {
    console.log("Entered in handle change complete for beds filter");
    this.setState({
      bedFlag: true
    });
  };

  handleChange = value => {
    this.setState({
      value: value,
      valueChangeFlag: true
    });
  };

  handleChangeComplete = () => {
    this.setState({
      priceFlag: true
    });
  };

  handlePlace = e => {
    this.setState({
      place: e.target.value
    });
  };

  handleArrive = e => {
    this.setState({
      arrive: e.target.value
    });
  };

  handleDepart = e => {
    this.setState({
      depart: e.target.value
    });
  };

  handleGuests = e => {
    this.setState({
      guests: e.target.value
    });
  };

  handleLogout = e => {
    this.props.logoutUser();
  };

  handleInboxTraveler = e => {
    this.props.history.push("/travelerInbox");
  };

  compare = (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  };

  compareBeds = (a, b) => {
    if (a.bedrooms < b.bedrooms) return -1;
    if (a.bedrooms > b.bedrooms) return 1;
    return 0;
  };

  handleSearch = e => {
    console.log("On click of search button on Search page");
    console.log("I am here");
    const data = {
      place: this.state.place,
      arrive: this.state.arrive,
      depart: this.state.depart,
      guests: this.state.guests
    };
    this.props.searchButtonClick(data, this.props.history);
  };

  handlePageChange = page => {
    let { searchEntries } = this.props;
    // if (this.state.priceFlag && this.state.valueChangeFlag) {
    //   properties = Object.keys(this.props.searchEntries)
    //     .map(property => this.props.searchEntries[property])
    //     .filter(property => property.price <= this.state.value);
    // } else {
    const properties = Object.keys(searchEntries).map(
      property => searchEntries[property]
    );

    const itemsLeft = true;
    const renderedProperty = properties.slice(
      (page - 1) * 5,
      (page - 1) * 5 + 5
    );
    console.log(renderedProperty);

    this.setState({ page, renderedProperty, itemsLeft });
  };

  handleSelectedProperty = prop => {
    const data = {
      id: prop._id
    };
    this.props.propertySelected(data, this.props.history);
  };

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.

  render() {
    let showproperty = null;
    let images = null;
    let footer = <Footer data={this.props.data} />;
    let properties = null;
    let { searchEntries } = this.props;

    const { page, renderedProperty } = this.state;

    properties = Object.keys(searchEntries)
      .map(property => searchEntries[property])
      .slice(0, 5);

    if (this.state.priceFlag) {
      properties = Object.keys(searchEntries)
        .map(property => searchEntries[property])
        .filter(property => property.price <= this.state.value)
        .slice(0, 5)
        .sort(this.compare);
    }

    if (this.state.bedFlag) {
      properties = Object.keys(searchEntries)
        .map(property => searchEntries[property])
        .filter(property => property.bedrooms <= this.state.beds)
        .slice(0, 5)
        .sort(this.compareBeds);
    }

    const propertiesTotal = Object.keys(properties).map(
      property => properties[property]
    );

    this.state.total = propertiesTotal.length;

    let finalProperty =
      renderedProperty.length !== 0 ? renderedProperty : properties;

    showproperty = finalProperty.map(prop => {
      images = prop.photos.split(",");
      return (
        <div>
          <br />
          <div>
            <a
              onClick={() => {
                this.handleSelectedProperty(prop);
              }}
            >
              <div class="row" style={{ backgroundColor: "#eee" }}>
                <div class="col-md-6 banner-sec">
                  <div class="card" style={{ backgroundColor: "white" }}>
                    <img
                      class="card-img"
                      src={"uploads/" + images[0]}
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
                      <span
                        style={{ fontSize: "18px", fontFamily: "sans-serif" }}
                      >
                        {prop.propertyType}
                      </span>
                    </div>
                    <div className="col-md-4">
                      <span
                        style={{ fontSize: "18px", fontFamily: "sans-serif" }}
                      >
                        {prop.bedrooms} Bedrooms
                      </span>
                    </div>
                    <div className="col-md-4">
                      <span
                        style={{ fontSize: "18px", fontFamily: "sans-serif" }}
                      >
                        {prop.bathrooms} Bathrooms
                      </span>
                    </div>
                  </div>
                  <br />

                  <br />
                  <div class="col-md-12 login-sec">
                    <h2
                      style={{
                        fontWeight: "450",
                        fontSize: "22px",
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
            </a>
          </div>
          <br />
          <br />
        </div>
      );
    });

    return (
      <React.Fragment>
        <div>
          <header
            className="ha-partner-nav-header ha-partner-nav-header-loaded theme-gt generic"
            style={{
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
                    <Link class="dropdown-item" role="menuitem" to="/mainpage">
                      List a property
                    </Link>
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
          <div className="search-div">
            <form class="form-inline">
              <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <img src="/images/marker2.png" />
                  </div>
                </div>
                <input
                  type="text"
                  size="auto"
                  autoFocus
                  class="myInput"
                  placeholder="Where do you want to go?"
                  onChange={this.handlePlace}
                  value={this.state.place}
                  style={{
                    height: "56px",
                    width: "300px",
                    border: "1px solid grey",
                    borderRadius: "30"
                  }}
                />
              </div>
              <input
                type="date"
                class="form-control mb-2 mr-sm-2"
                placeholder="Arrive"
                onChange={this.handleArrive}
                value={this.state.arrive}
                style={{
                  height: "56px",
                  width: "200px",
                  border: "1px solid grey",
                  borderRadius: "30"
                }}
              />

              <input
                type="date"
                class="form-control mb-2 mr-sm-2"
                placeholder="Depart"
                value={this.state.depart}
                style={{
                  height: "56px",
                  width: "200px",
                  border: "1px solid grey",
                  borderRadius: "30"
                }}
                onChange={this.handleDepart}
              />

              <input
                type="text"
                class="form-control mb-2 mr-sm-2"
                placeholder="Guests"
                onChange={this.handleGuests}
                value={this.state.guests}
                style={{
                  height: "56px",
                  width: "200px",
                  border: "1px solid grey",
                  borderRadius: "30"
                }}
              />

              <button
                // type="submit"
                class="btn btn-primary btn-outline-light mb-2 btn-lg"
                onClick={this.handleSearch}
                dataLoadingAnimation="true"
                dataEffect="ripple"
                style={{
                  height: "56px",
                  width: "160px",
                  border: "1px solid grey",
                  borderRadius: "30px",
                  backgroundColor: "#da882c",
                  borderColor: "#da882c"
                }}
              >
                Search
              </button>
            </form>
          </div>
          <br />

          {/* <button
            class="btn btn-secondary"
            data-toggle="modal"
            data-target="#exampleModal3"
            position="relative"
            style={{
              margin: "center",

              verticalAlign: "middle",
              display: "inline-block",
              textAlign: "center",
              height: "56px",
              width: "160px",
              backgroundColor: "rgba(0,0,.15,.38)",
              borderColor: "transparent",
              borderRadius: "100px",
              marginLeft: "50px"
            }}
          >
            <font
              color="white"
              style={{
                fontSize: "15px",
                fontFamily: "Lato,Arial,Helvetica Neue"
              }}
              className="myFontNav"
            >
              Price Filter
            </font>
          </button> */}
          {/* <div
            class="modal fade"
            id="exampleModal3"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModal3Label"
            aria-hidden="true"
            position="relative"
          >
            <div
              class="modal-dialog modal-dialog-centered"
              role="document"
              style={{ position: "relative" }}
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModal3Label">
                    Price per Night
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  
                </div>
              </div>
            </div>
          </div> */}
          <div
            className="row"
            style={{
              marginLeft: "550px"
            }}
          >
            <div className="slider">
              <label
                style={{
                  fontSize: "16px",
                  color: "grey",
                  position: "relative"
                }}
              >
                Price Filter
              </label>
              <Slider
                min={0}
                max={2000}
                value={this.state.value}
                onChangeStart={this.handleChangeStart}
                onChange={this.handleChange}
                onChangeComplete={this.handleChangeComplete}
                // onChangeComplete={this.handleChangeComplete}
              />
              <div className="value">{this.state.value}</div>
            </div>

            {/* <button
            class="btn btn-secondary"
            data-toggle="modal"
            data-target="#exampleModa14"
            position="relative"
            style={{
              margin: "center",

              verticalAlign: "middle",
              display: "inline-block",
              textAlign: "center",
              height: "56px",
              width: "160px",
              backgroundColor: "rgba(0,0,.15,.38)",
              borderColor: "transparent",
              borderRadius: "100px",
              marginLeft: "50px"
            }}
          >
            <font
              color="white"
              style={{
                fontSize: "15px",
                fontFamily: "Lato,Arial,Helvetica Neue"
              }}
              className="myFontNav"
            >
              Bedroom Filter
            </font>
          </button> */}
            {/* <div
            class="modal fade"
            id="#exampleModal4"
            role="dialog"
            aria-labelledby="exampleModal4Label"
            aria-hidden="true"
            position="relative"
          >
            <div
              class="modal-dialog modal-dialog-centered"
              role="document"
              style={{ position: "relative" }}
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModal4Label">
                    Bedrooms
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  
                </div>
              </div>
            </div>
          </div> */}
            <div className="divider" />
            <div className="divider" />
            <div className="divider" />
            <div className="divider" />
            <div className="slider">
              <label
                style={{
                  fontSize: "16px",
                  color: "grey",
                  position: "relative"
                }}
              >
                Bedroom Filter
              </label>
              <Slider
                min={0}
                max={15}
                value={this.state.beds}
                onChangeStart={this.handleChangeStartBeds}
                onChange={this.handleChangeBeds}
                onChangeComplete={this.handleChangeCompleteBeds}
                // onChangeComplete={this.handleChangeComplete}
              />
              <div className="bedvalue">{this.state.beds}</div>
            </div>
          </div>

          <section className="login-block search">
            {showproperty}

            <div className="container" />
          </section>
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
    searchEntries: state.homeReducer.searchEntries,
    storeSearchCriteria: state.homeReducer.storeSearchCriteria,
    user: state.loginOwnerReducer.user
  };
};

export default connect(
  mapStateToProps,
  { searchButtonClick, propertySelected, logoutUser }
)(withRouter(Search));
