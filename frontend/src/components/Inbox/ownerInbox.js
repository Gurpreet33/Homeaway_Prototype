import React, { Component } from "react";
import { Redirect } from "react-router";
import maui from "../../images/hawaii.png";
import { Link } from "react-router-dom";
import axios from "axios";
import sendIcon from "../../images/send_icon.png";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/loginactions";
import Footer from "../Footer/footer";
import {
  replyToTraveler,
  getTravelerMessage
} from "../../actions/messageActions";

class OwnerInbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      reply: ""
    };
  }

  handleMessageInput = e => {
    this.setState({
      reply: e.target.value
    });
  };

  handleLogout = e => {
    this.props.logoutUser();
  };

  handleSendMessageButton = (travelerEmail, propertyHeadline) => {
    console.log(travelerEmail, propertyHeadline);
    const data = {
      reply: this.state.reply,
      ownerEmail: this.props.user.email,
      travelerEmail: travelerEmail,
      propertyHeadline: propertyHeadline
    };
    console.log(data);
    this.props.replyToTraveler(data, this.props.history);
  };

  componentWillMount() {
    const data = {
      email: this.props.user.email
    };
    this.props.getTravelerMessage(data);
  }

  render() {
    const { trInfo } = this.props;
    let footer = <Footer data={this.props.data} />;
    let temail = null;
    let pheadline = null;
    console.log(Object.keys(this.props.trInfo));

    const trav = Object.keys(this.props.trInfo).map(
      tr => this.props.trInfo[tr]
    );

    console.log("msg from tr", trav);
    let showInbox = trav.map(message => {
      temail = message.travelerEmail;
      pheadline = message.propertyHeadline;
      return (
        <div>
          <div class="row">
            <div class="col-md-6 login-sec">
              <div style={{ marginBottom: "40px" }}>
                <label
                  style={{
                    fontSize: "18px",
                    color: "grey",
                    position: "relative",
                    width: "400px"
                  }}
                >
                  Message from traveler: {message.travelerEmail} for your{" "}
                  {message.propertyType} {message.propertyHeadline}
                </label>
                <div>
                  <textarea
                    value={message.msgFromTraveler}
                    style={{
                      height: "60px",
                      width: "400px",
                      border: "1px solid grey",
                      borderRadius: "30"
                    }}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <button
                  type="submit"
                  data-toggle="modal"
                  data-target="#exampleModal4"
                  position="relative"
                  class="btn btn-primary btn-outline-light mb-2 btn-lg"
                  style={{
                    height: "56px",
                    width: "400px",
                    border: "1px solid grey",
                    borderRadius: "30px",
                    backgroundColor: "#0067db",
                    borderColor: "#0067db",
                    marginLeft: "-17px"
                  }}
                >
                  Reply to Traveler
                </button>
                <div
                  class="modal fade"
                  id="exampleModal4"
                  tabindex="-1"
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
                          Send Message to Traveler
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
                        <div className="row">
                          <input
                            type="text"
                            autofocus
                            placeholder="Enter message..."
                            onChange={this.handleMessageInput}
                            class="form-control mb-2 mr-sm-2"
                            style={{
                              height: "56px",
                              width: "420px",
                              border: "1px solid grey",
                              borderRadius: "30"
                            }}
                          />
                          <div>
                            <a
                              style={{
                                cursor: "pointer"
                              }}
                              onClick={() =>
                                this.handleSendMessageButton(temail, pheadline)
                              }
                            >
                              <img
                                src={sendIcon}
                                style={{
                                  width: "55px",
                                  height: "57px"
                                }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr />
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
              Inbox
            </p>
          </div>
          <section
            className="login-block-update"
            style={{
              maxWidth: "650px",
              padding: "80px 30px 80px 110px",
              backgroundColor: "#f1f1f1"
            }}
          >
            <div className="container">{showInbox}</div>
          </section>
          {footer}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginOwnerReducer.user,
    trInfo: state.messageReducer.trInfo
    // modifiedProperties: state.travelerSearchReducer.modifiedProperties
  };
};

export default connect(
  mapStateToProps,
  { replyToTraveler, getTravelerMessage, logoutUser }
)(withRouter(OwnerInbox));
