import { PROFILE } from "./types";
import axios from "axios";

const ROOT_URL = "http://localhost:3001";

export const updateProfile = (Data, history) => dispatch => {
  console.log("i am in signowner actions");
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/updateprofile`, Data)
    .then(res => {
      console.log("Response is: ", res.status);
      if (res.status === 200) {
        window.alert("Successfully Updated Profile!");
        history.push("/ownerdashboard");
        dispatch({
          type: PROFILE,
          payload: res.data
        });
      } else {
        window.alert("Failure in profile update");
        window.location.reload(1);
      }
    })
    .catch(err => console.log(err));
};
