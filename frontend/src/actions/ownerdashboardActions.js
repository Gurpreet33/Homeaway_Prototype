import axios from "axios";
import { OWNER_DASHBOARD } from "./types";

const ROOT_URL = "http://localhost:3001";

export const ownerDashboard = (Data, history) => dispatch => {
  console.log("i am in Owner Dashboard actions", Data);
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/ownerdashboard`, Data)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: OWNER_DASHBOARD,
        payload: res.data
      });
    })
    .catch(err => {
      if (err) {
        window.alert("You are not authorised to go to this page. Login first!");
        window.location.reload(1);
        history.push("/loginowner");
      }
    });
};
