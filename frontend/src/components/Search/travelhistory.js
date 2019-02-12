import React, { Component } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { travelerDashboard } from "../../actions/travelerDashboardActions";

class TravelHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      authFlag: false,
      propdetails: []
    };
  }

  componentWillMount() {
    const data = {
      email: this.props.user.email
    };
    this.props.travelerDashboard(data);
  }

  render() {
    let image = null;
    const properties = Object.keys(this.props.dashProperties)
      .map(property => this.props.dashProperties[property])
      .slice(0, 3);
    let showproperty = properties.map(prop => {
      image = prop.photos.split(",");
      return (
        <div className="col-md-4">
          <div className="card" style={{ height: "400px" }}>
            <div className="card-img-top">
              <img
                className="card-img"
                src={"uploads/" + image[0]}
                alt="pic1"
                style={{
                  position: "relative"
                }}
              />
            </div>
            <div className="card-block pt-2 mr-4">
              <div className="card-title">
                <h4>{prop.city}</h4>
              </div>
              <div className="card-text">
                <p className="text-muted">{prop.headline}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="login-block searchRecent">
        <h3 style={{ fontSize: "28px" }}>Recent Activity</h3>
        <br />
        <div className="row">{showproperty}</div>
      </div>
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
  { travelerDashboard }
)(TravelHistory);
