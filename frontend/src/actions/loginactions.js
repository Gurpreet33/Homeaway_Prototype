import axios from "axios";
import {
  CRED_CHANGE,
  LOGIN,
  GET_ERRORS,
  LOGIN_TRAVELER,
  LOGOUT_USER,
  LOGIN_ERROR,
  INPUT_ERROR_LOGIN,
  RESET_LOGIN_ERROR
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

const ROOT_URL = "http://localhost:3001";

export const loginOwner = (Data, history) => dispatch => {
  console.log("i am in loginowner actions", Data);
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/loginowner`, Data)
    .then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        console.log("here before loginowner");
        dispatch(setCurrentUser(decoded));
        dispatch({
          type: RESET_LOGIN_ERROR
        });
        history.push("/ownerdashboard");
        window.location.reload(1);
      } else if (res.status === 202) {
        console.log("i entered here in status 202", res.data);
        dispatch({
          type: INPUT_ERROR_LOGIN,
          payload: res.data
        });
      }
    })
    .catch(err => console.log("error is: ", err));
};

export const loginTraveler = (Data, history) => dispatch => {
  console.log("i am in login travler actions");
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/logintraveller`, Data)
    .then(res => {
      console.log("Response status is:", res.status);
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        console.log("here before logintraveler");
        dispatch(setCurrentUser(decoded));
        dispatch({
          type: RESET_LOGIN_ERROR
        });
        history.push("/home");
        window.location.reload(1);
      } else if (res.status === 202) {
        console.log("i entered here in status 202", res.data);

        // window.alert("Password is incorrect");
        // window.location.reload(1);
        dispatch({
          type: INPUT_ERROR_LOGIN,
          payload: res.data
        });
      }
    })
    .catch(err => console.log(err));
};

export const logoutUser = () => dispatch => {
  //Remove token from localStorage
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("state");
  //remove auth header fro future requests
  setAuthToken(false);
  //set current user to {}
  dispatch(setCurrentUser({}));
};

export const setCurrentUser = decoded => {
  console.log("here after");
  return {
    type: LOGIN,
    payload: decoded
  };
};
