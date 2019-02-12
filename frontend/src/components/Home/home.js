import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import NavBar from "../NavBar/navbar";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import DatePicker from "react-datepicker";
import image5 from "../../images/image2.jpg";
import mapmarker from "../../images/marker2.png";
import la from "../../images/la.png";
import sanfran from "../../images/sanfran.jpg";
import seattle from "../../images/seattle.png";
import nyc from "../../images/nyc.png";
import miami from "../../images/miami.jpg";
import maui from "../../images/hawaii.png";
import home_img from "../../images/home_img.jpg";
import lasvegas from "../../images/lasvegas.png";
import TravelHistory from "../../components/Search/travelhistory";
import PlacesAutocomplete from "react-places-autocomplete";
import Footer from "../Footer/footer";
import SweetAlert from "react-bootstrap-sweetalert";
import TravelerDashboard from "../Search/travelerdashboard";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/loginactions";
import { searchButtonClick } from "../../actions/homeactions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      place: "",
      arrive: null,
      depart: null,
      guests: null,
      Flag: false,
      propdetails: [],
      error: false,
      flagList: false
    };

    this.handlePlace = this.handlePlace.bind(this);
    this.handleArrive = this.handleArrive.bind(this);
    this.handleDepart = this.handleDepart.bind(this);
    this.handleGuests = this.handleGuests.bind(this);
  }

  handlePlace = e => {
    this.setState({
      place: e.target.value
    });
  };

  handleArrive = e => {
    this.setState({
      arrive: e.target.value
    });
    console.log("kguggkkg");
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

  handleList = e => {
    if (this.props.user.type === "owner") {
      this.props.history.push("/ownerdashboard");
    } else {
      this.props.history.push("/loginowner");
    }
  };

  handleDashboardTravel = e => {
    this.props.history.push("/travelerdashboard");
  };

  handleDashboardOwner = e => {
    this.props.history.push("/ownerdashboard");
  };

  handleInboxTraveler = e => {
    this.props.history.push("/travelerInbox");
  };

  handleInboxOwner = e => {
    this.props.history.push("/ownerInbox");
  };

  onConfirm = e => {
    window.location.reload(1);
  };

  handleSearch = e => {
    e.preventDefault();
    if (this.props.Flag) {
      console.log("I am here in if of handle search");
      let data = {
        place: this.state.place,
        arrive: this.state.arrive,
        depart: this.state.depart,
        guests: this.state.guests
      };
      this.props.searchButtonClick(data, this.props.history);
    } else {
      window.alert("Login or signup to proceed with the search");
      this.props.history.push("/logintraveller");
    }
  };

  render() {
    let alerttravel = null;
    let er = null;
    let footer = <Footer data={this.props.data} />;
    let travelhistory = null;

    if (this.state.error) {
      er = (
        <SweetAlert
          title="An error occured while communicating with server"
          onConfirm={this.onConfirm}
        />
      );
    }

    let nav1 = (
      <li className="nav-item">
        <div class="dropdown">
          <a
            class="btn btn-secondary dropdown-toggle"
            // type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{
              color: "white",
              fontSize: "18px"
            }}
          >
            Login
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <Link to="/logintraveller" class="dropdown-item" role="menuitem">
              Traveller login
            </Link>
            <Link to="/loginowner" class="dropdown-item" role="menuitem">
              Owner Login
            </Link>
          </div>
        </div>
      </li>
    );

    if (this.props.user.type === "traveler") {
      console.log("button click traveler dashboard");
      nav1 = (
        <li className="nav-item">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.props.user.name}
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button
                class="dropdown-item"
                role="menuitem"
                onClick={this.handleDashboardTravel}
              >
                Dashboard
              </button>
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
        </li>
      );
      travelhistory = <TravelHistory data={this.props.data} />;
    } else if (this.props.user.type === "owner") {
      nav1 = (
        <li className="nav-item">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.props.user.name}
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button
                class="dropdown-item"
                role="menuitem"
                onClick={this.handleDashboardOwner}
              >
                Dashboard
              </button>
              <button
                onClick={this.handleInboxOwner}
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
        </li>
      );
    }

    return (
      <React.Fragment>
        {er}

        <div className="cont1">
          <div className="cont2">
            <nav className="navbar transparent navbar-expand-md navbar-outline-light navbar-trans navbar-light bg-transparent fixed-top">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/Home">
                  <font
                    color="white"
                    style={{ fontSize: "34px" }}
                    className="myFontNav"
                  >
                    HomeAway{" "}
                  </font>
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
                <div
                  class="collpase navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="nav navbar-nav ml-auto">
                    <div className="divider" />

                    {nav1}

                    <div className="divider" />
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        onClick={this.handleList}
                        style={{
                          height: "56px",
                          width: "230px",
                          border: "1px solid grey",
                          borderRadius: "30px",
                          backgroundColor: "white",
                          borderColor: "#0067db",
                          marginRight: "-10px"
                        }}
                      >
                        <font
                          color="#0067db"
                          style={{
                            fontSize: "15px",
                            fontFamily: "Lato,Arial,Helvetica Neue"
                          }}
                          className="myFontNav"
                        >
                          List your property{" "}
                        </font>
                      </button>
                    </li>
                    <div className="divider" />
                    <li className="nav-item">
                      <a>
                        <div data-toggle="dropdown" className="btn">
                          <img
                            src="images/homeawayicon2.png"
                            role="button"
                            style={{
                              height: "95px",
                              marginTop: "-25px",
                              marginLeft: "-10px",
                              width: "100px",
                              position: "relative",
                              display: "inline-block"
                            }}
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div id="slides" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="homeImage"
                  src="images/home_img.jpg"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    width: "100%",
                    height: "630px"
                  }}
                />
                <div className="carousel-caption myway col-md-16">
                  <h2 className="myh2">Book beach houses, cabins, </h2>
                  <h2 className="myh2">condos and more, worldwide</h2>
                  <form class="form-inline">
                    <div class="input-group mb-2 mr-sm-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <img src={mapmarker} />
                        </div>
                      </div>
                      <input
                        type="text"
                        class="myInput"
                        placeholder="Where do you want to go?"
                        onChange={this.handlePlace}
                        style={{
                          height: "56px",
                          width: "300px",
                          border: "1px solid transparent",
                          borderRadius: "4px"
                        }}
                      />
                    </div>
                    <input
                      type="date"
                      class="form-control mb-2 mr-sm-2"
                      placeholder="Arrive"
                      onChange={this.handleArrive}
                      style={{
                        height: "56px",
                        width: "190px",
                        border: "1px solid grey",
                        borderRadius: "30"
                      }}
                    />

                    <input
                      type="date"
                      class="form-control mb-2 mr-sm-2"
                      placeholder="Depart"
                      onChange={this.handleDepart}
                      style={{
                        height: "56px",
                        width: "190px",
                        border: "1px solid grey",
                        borderRadius: "30"
                      }}
                    />

                    <input
                      type="number"
                      class="form-control mb-2 mr-sm-2"
                      placeholder="Guests"
                      onChange={this.handleGuests}
                      style={{
                        height: "56px",
                        width: "150px",
                        border: "1px solid grey",
                        borderRadius: "30"
                      }}
                    />

                    <button
                      type="submit"
                      data-loading-text="..."
                      class="btn btn-primary btn-outline-light mb-2 btn-lg"
                      onClick={this.handleSearch}
                      style={{
                        height: "56px",
                        width: "150px",
                        border: "1px solid grey",
                        borderRadius: "30px",
                        backgroundColor: "#0067db",
                        borderColor: "#0067db"
                      }}
                    >
                      Search
                    </button>
                  </form>

                  <div className="container-fluid">
                    <div className="row" style={{ marginTop: "170px" }}>
                      <div
                        className="col-md-4"
                        style={{ marginLeft: "-120px" }}
                      >
                        <span
                          style={{
                            fontSize: "22px",
                            fontWeight: "500",
                            fontFamily: "sans-serif"
                          }}
                        >
                          Your vacation starts here
                        </span>
                        <div className="col-md-12">
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "200",
                              fontFamily: "sans-serif"
                            }}
                          >
                            Choose a rental from the world's best selection
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <span
                          style={{
                            fontSize: "22px",
                            fontWeight: "500",
                            fontFamily: "sans-serif"
                          }}
                        >
                          Book and stay with confidence
                        </span>
                        <div className="col-md-12">
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "200",
                              fontFamily: "sans-serif"
                            }}
                          >
                            Secure payments,peace of mind
                          </span>
                        </div>
                      </div>
                      <div
                        className="col-md-4"
                        style={{
                          fontSize: "22px",
                          fontWeight: "500",
                          fontFamily: "sans-serif"
                        }}
                      >
                        <span>Your vacation your way</span>
                        <div className="col-md-12">
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "200",
                              fontFamily: "sans-serif"
                            }}
                          >
                            More space,more privacy,no compromises
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="carousel-caption">
                  <div className="row">
                    <div className="col-sm-4" style={{ width: "300px" }}>
                      <span style={{ fontSize: "22px" }}>
                        Your whole vacation starts here
                      </span>
                      <span style={{ fontSize: "14px" }}>
                        Choose a rental from the world's best selection
                      </span>
                    </div>
                    <div className="col-md-4">
                      <span>Your whole vacation starts here</span>
                    </div>
                    <div className="col-md-4">
                      <span>Your whole vacation starts here</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-md-12">{travelhistory}</div>
          </div>

          <section className="container pt-3">
            <div className="row">
              <div className="col-lg-12">
                <h3>Popular this week</h3>
                <p className="text-left text-muted">
                  Explore trending destinations
                </p>
              </div>
            </div>
          </section>

          <section
            className="carousel slider"
            data-ride="carousel"
            id="cardsCarousel"
          >
            <div className="container">
              <div className="row">
                <div className="col-12 text-right mb-4">
                  <a
                    className="btn btn-outline-secondary prev"
                    href="#"
                    title="Left"
                  >
                    <i className="fa fa-lg fa-chevron-left" />
                  </a>
                  <a
                    className="btn btn-outline-secondary next"
                    href="#"
                    title="Right"
                  >
                    <i className="fa fa-lg fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="container pt-0 mt-2 carousel-inner">
              <div className="row row-equal carousel-item active mt-0">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-img-top card-img-top-250">
                      <img className="img-fluid" src={lasvegas} alt="pic1" />
                    </div>
                    <div className="card-block pt-2 mr-4">
                      <div className="card-title">
                        <h3>Las Vegas</h3>
                      </div>
                      <div className="card-text">
                        <p className="text-muted">Nevada</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-img-top card-img-top-250">
                      <img className="img-fluid" src={maui} alt="pic2" />
                    </div>
                    <div className="card-block pt-2 mr-4">
                      <div className="card-title">
                        <h3>Maui</h3>
                      </div>
                      <div className="card-text">
                        <p className="text-muted">Hawaii</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-img-top card-img-top-250">
                      <img className="img-fluid" src={seattle} alt="pic1" />
                    </div>
                    <div className="card-block pt-2 mr-4">
                      <div className="card-title">
                        <h3>Seattle</h3>
                      </div>
                      <div className="card-text">
                        <p className="text-muted">Washington</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-equal carousel-item mt-0">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-img-top card-img-top-250">
                      <img className="img-fluid" src={lasvegas} alt="pic1" />
                    </div>
                    <div className="card-block pt-2 mr-4">
                      <div className="card-title">
                        <h3>Las Vegas</h3>
                      </div>
                      <div className="card-text">
                        <p className="text-muted">Nevada</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-img-top card-img-top-250">
                      <img className="img-fluid" src={maui} alt="pic2" />
                    </div>
                    <div className="card-block pt-2 mr-4">
                      <div className="card-title">
                        <h3>Maui</h3>
                      </div>
                      <div className="card-text">
                        <p className="text-muted">Hawaii</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-img-top card-img-top-250">
                      <img className="img-fluid" src={seattle} alt="pic1" />
                    </div>
                    <div className="card-block pt-2 mr-4">
                      <div className="card-title">
                        <h3>Seattle</h3>
                      </div>
                      <div className="card-text">
                        <p className="text-muted">Washington</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          <div>
            <a>
              <div
                className="listpropimage"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  overflow: "hidden",
                  width: "100%",
                  height: "680px"
                }}
              >
                <div
                  className="jumbotron"
                  style={{
                    backgroundColor: "transparent",

                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "60px",
                    marginTop: "200px",
                    maxWidth: "595px",
                    textAlign: "center",
                    position: "relative",
                    fontSize: "1.5rem",
                    lineHeight: "2rem"
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "Lato,Arial,Helvetica Neue,sans-serif",
                      fontWeight: "-90",

                      color: "white"
                    }}
                  >
                    List your property on HomeAway and open your door to rental
                    income.
                  </h2>
                  <br />
                  <br />
                  <button
                    className="nav-link active bt-lg"
                    onClick={this.handleList}
                    style={{
                      margin: "center ",
                      position: "relative",
                      verticalAlign: "middle",
                      display: "inline-block",
                      textAlign: "center",
                      height: "56px",
                      width: "230px",
                      backgroundColor: "rgba(0,0,0,.65)",
                      borderColor: "transparent",
                      borderRadius: "100px"
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
                      List your property{" "}
                    </font>
                  </button>
                </div>
              </div>
            </a>
          </div>
          <br />
          {footer}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    HomeFlag: state.homeReducer.HomeFlag,
    user: state.loginOwnerReducer.user,
    Flag: state.loginOwnerReducer.Flag,
    ListFlag: state.homeReducer.ListFlag
  };
};

export default connect(
  mapStateToProps,
  { searchButtonClick, logoutUser }
)(withRouter(Home));
