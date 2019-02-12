import axios from "axios";
import { SEARCH_MODIFIED, PROPERTY_SELECTED, BOOK_RENTAL } from "./types";

const ROOT_URL = "http://localhost:3001";

export const propertySelected = (Data, history) => dispatch => {
  console.log("i am in PROPERTY SELECTED actions");

  axios.defaults.withCredentials = true;
  axios
    .get(`${ROOT_URL}/searchresults/${Data.id}`)
    .then(res => {
      console.log("property selected actions", res.data);
      if (res.status === 200) {
        dispatch({
          type: PROPERTY_SELECTED,
          payload: res.data
        });

        history.push("/searchresults");
      } else {
        window.alert("An error occured");
      }
    })
    .catch(err => console.log(err));
};

export const bookRental = (Data, history) => dispatch => {
  console.log("i am in PROPERTY SELECTED actions");
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/booking`, Data)
    .then(res => {
      console.log(res.data);
      if (res.status === 200) {
        window.alert("Booking Successful");
        history.push("/home");
        dispatch({
          type: BOOK_RENTAL,
          payload: res.data
        });
      } else if (res.status === 204) {
        window.alert(
          "There was some error in booking. Please proceed again for booking"
        );
        history.push("/home");
      } else {
        window.alert(
          "Some mandatory fields were missing!Please fill out those and then proceed with booking."
        );
      }
    })
    .catch(err => console.log(err));
};
