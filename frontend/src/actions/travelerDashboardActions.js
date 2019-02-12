import axios from "axios";
import { TRAVELER_DASHBOARD } from "./types";

const ROOT_URL = "http://localhost:3001";

export const travelerDashboard = (Data, history) => dispatch => {
  console.log("i am in traveler Dashboard actions");
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/travelerdashboard`, Data)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: TRAVELER_DASHBOARD,
        payload: res.data
      });
    })
    .catch(err => {
      if (err) {
        window.alert("You are not authorised to go to this page. Login first!");
        window.location.reload(1);
        history.push("/logintraveller");
      }
    });
};
