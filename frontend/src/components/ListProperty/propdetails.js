import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import birdhouse from "../../images/homeawayicon.png";
import sanfran from "../../images/sanfran.png";
import bedicon from "../../images/bedicon.png";

var sectionStyle = {
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  overflow: "hidden",
  width: "100%",
  height: "600px"
};

class PropDetails extends Component {
  state = {};
  render() {
    return (
      <div className="eran-content-wrapper">
        {/* <header id="homeaway-header" className="header-bg-fluid">
            <div className="header-search-bg header-search-bg-inverse">
              <div className="navbar navbar-header-search-bg">
                <div className="navbar-inner flex-container">
                  <Link to="/home" className="header-logo">
                    <img
                      src={logo}
                      className="img-responsive logo-img"
                      role="presentation"
                    />
                  </Link>

                  <div className="header-search-bg-flex-spacer" />
                  <div className="flex-item header-search-bg-links navbar-collapse nav-collapse slide slide-menu-bg need-help">
                    "Need help?"
                    <a href="#" className="link">
                      Email us
                    </a>
                  </div>
                  <div className="hidden-xs header-search-bg-birdhouse-container">
                    <img
                      src={birdhouse}
                      role="presentation"
                      className="birdimage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </header> */}

        <div className="cont2">
          <nav className="navbar transparent navbar-expand-md navbar-outline-light navbar-trans navbar-light bg-transparent fixed-top">
            <div className="container-fluid">
              <Link to="/home" className="header-logo">
                <img
                  src={logo}
                  className="img-responsive logo-img"
                  role="presentation"
                />
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
                      <font color="black">Need help? </font>
                    </a>
                  </li>
                  <div className="divider" />
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <font color="black">Email us </font>
                    </a>
                  </li>
                  <div className="divider" />
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <img
                        src={birdhouse}
                        role="presentation"
                        className="birdimage"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <div className="earn-bce-image dim-and-focus">
            <img src={sanfran} style={sectionStyle} />
            <div className="earn-container dim-and-focus-active dim-and-focus-container">
              <div>
                <div className="fade-overlay-enter-done">
                  <div
                    id="dimmingOverlayContainer"
                    className="fade-overlay-enter-done"
                  />
                </div>
              </div>
              <div className="earn-content-grouping content-widget-view no-sleeps">
                <div className="earn-app-header widhet-test no-sleeps">
                  <h1 className="header">How much could you earn?</h1>
                </div>
                <div>
                  <div className="earn-content dim-and-focus no-sleeps page-crossfade-enter-done">
                    <div className="property-details-outer-wrapper">
                      <div className="property-details-wrapper variant-wrapper nos-sleeps">
                        <a
                          name="earn-content-input-anchor"
                          id="earn-content-input-anchor"
                        />
                        <div className="property-details">
                          <div className="headline variant-headline no-sleeps">
                            Let's start with the basics
                          </div>
                          <div className="property-details-body variant-body no-sleeps">
                            <div
                              className="odometer-input no-sleeps"
                              id="bedrooms-input"
                            >
                              <div className="odometer-input-inside">
                                <div className="odometer-input-label">
                                  <img
                                    className="odometer-input-label-icon"
                                    src={bedicon}
                                  />
                                  <div className="odometer-input-label-text">
                                    Bedrooms
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="earn-image dim-and-focus" />
          </div>
        </div>
      </div>
    );
  }
}

export default PropDetails;
