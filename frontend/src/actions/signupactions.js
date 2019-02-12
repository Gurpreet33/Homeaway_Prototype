import {
  SIGN_OWNER,
  SIGN_TRAVELER,
  SIGNUP_ERROR,
  SIGNUP_ERROR_OWNER,
  INPUT_ERROR_SIGNUP,
  RESET_SIGNUP_ERROR
} from "./types";
import axios from "axios";

const ROOT_URL = "http://localhost:3001";

export const signowner = (Data, history) => dispatch => {
  console.log("i am in signowner actions");
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/signupowner`, Data)
    .then(res => {
      console.log("what is the error", res.data);
      if (res.status === 200) {
        history.push("/loginowner");
        dispatch({
          type: SIGN_OWNER,
          payload: res.data
        });

        dispatch({
          type: RESET_SIGNUP_ERROR
        });
      } else if (res.status === 202) {
        dispatch({
          type: INPUT_ERROR_SIGNUP,
          payload: res.data
        });
      }
    })
    .catch(err => console.log("what is the error", err));
};

export const signtraveler = (Data, history) => dispatch => {
  console.log("i am in signtraveler actions");
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/signuptraveler`, Data)
    .then(res => {
      console.log("Response status is:", res.status);
      if (res.status === 200) {
        console.log("I entered here in status 200");
        window.location.reload(1);
        history.push("/logintraveller");
        dispatch({
          type: SIGN_OWNER,
          payload: res.data
        });
        dispatch({
          type: RESET_SIGNUP_ERROR
        });
      } else if (res.status === 202) {
        dispatch({
          type: INPUT_ERROR_SIGNUP,
          payload: res.data
        });
      }
    })
    .catch(err => console.log(err));
};
