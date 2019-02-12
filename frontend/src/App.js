import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import store from "./store";
import NavBar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import LoginOwner from "./components/Login and sign up/loginowner";
import LoginTraveller from "./components/Login and sign up/logintraveller";
import MainPage from "./components/ListProperty/mainpage";
import PropDetails from "./components/ListProperty/propdetails";
import LocaTion from "./components/ListProperty/location";
import Details from "./components/ListProperty/details";
import BookingOptions from "./components/ListProperty/bookingoptions";
import SignupTraveler from "./components/Login and sign up/signuptraveler";
import SignupOwner from "./components/Login and sign up/signupowner";
import Photos from "./components/ListProperty/photos";
import Search from "./components/Search/search";
import AvailabilityPricing from "./components/ListProperty/availabilityPricing";
import UpdateProfile from "./components/Profile/updateprofile";
import OwnerDashboard from "./components/ListProperty/ownerdashboard";
import SearchResults from "./components/Search/searchresults";
import TravelerDashboard from "./components/Search/travelerdashboard";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { LOGIN_OWNER } from "./actions/types";
import { setCurrentUser } from "./actions/loginactions";
import TravelerInbox from "./components/Inbox/travelerInbox";
import OwnerInbox from "./components/Inbox/ownerInbox";

if (localStorage.jwtToken) {
  //Setting header of authorization token
  setAuthToken(localStorage.jwtToken);

  //Get user info from token by decoding it
  const decoded = jwt_decode(localStorage.jwtToken);

  //Set user and flag
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={NavBar} />
        <Route path="/home" exact component={Home} />
        <Route path="/loginowner" exact component={LoginOwner} />
        <Route path="/logintraveller" exact component={LoginTraveller} />
        <Route path="/signuptraveler" exact component={SignupTraveler} />
        <Route path="/mainpage" exact component={MainPage} />
        <Route path="/propdetails" exact component={PropDetails} />
        <Route path="/location" exact component={LocaTion} />
        <Route path="/details" exact component={Details} />
        <Route path="/bookingoptions" exact component={BookingOptions} />
        <Route path="/signupowner" exact component={SignupOwner} />
        <Route path="/photos" exact component={Photos} />
        <Route path="/search" exact component={Search} />
        <Route
          path="/availabilityPricing"
          exact
          component={AvailabilityPricing}
        />
        <Route path="/updateprofile" exact component={UpdateProfile} />
        <Route path="/ownerdashboard" exact component={OwnerDashboard} />
        <Route path="/searchresults" exact component={SearchResults} />
        <Route path="/travelerdashboard" exact component={TravelerDashboard} />
        <Route path="/travelerInbox" exact component={TravelerInbox} />
        <Route path="/ownerInbox" exact component={OwnerInbox} />
      </div>
    );
  }
}

export default App;
