import axios from "axios";
import {
  LOCATION,
  DETAILS,
  BOOKING_OPTIONS,
  PHOTOS,
  PHOTOS_UPLOAD,
  PRICING
} from "./types";

const ROOT_URL = "http://localhost:3001";

export const locationEntries = (Data, history) => dispatch => {
  console.log("i am in location entries actions");
  history.push("/details");
  return dispatch({
    type: LOCATION,
    payload: Data
  });
};

export const details = (Data, history) => dispatch => {
  console.log("i am in details actions");
  history.push("/bookingoptions");
  return dispatch({
    type: DETAILS,
    payload: Data
  });
};

export const bookingOptions = (Data, history) => dispatch => {
  console.log("i am in booking options actions");
  history.push("/photos");
  return dispatch({
    type: BOOKING_OPTIONS,
    payload: Data
  });
};

export const photosUpload = Data => dispatch => {
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/image`, Data)
    .then(res => {
      console.log("I am here");
      dispatch({
        type: PHOTOS_UPLOAD
      });
    })
    .catch(err => console.log(err));
};

export const photos = Data => dispatch => {
  console.log("i am in Photos actions", Data);
  return dispatch({
    type: PHOTOS,
    payload: Data
  });
};

export const pricing = (Data, history) => dispatch => {
  console.log("i am in pricing actions");
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/confirmListing`, Data)
    .then(res => {
      if (res.status === 200) {
        window.alert("Booking successful");
        history.push("/ownerdashboard");
        dispatch({
          type: PRICING,
          payload: res.data
        });
      } else {
        window.alert("There was some error in booking");
      }
    })
    .catch(err => console.log(err));
};
