import {
  GET_ERRORS,
  SIGNUP_ERROR,
  SIGNUP_ERROR_OWNER,
  LOGIN_ERROR,
  INPUT_ERROR_SIGNUP,
  INPUT_ERROR_LOGIN,
  RESET_SIGNUP_ERROR,
  RESET_LOGIN_ERROR
} from "../actions/types";

const initialState = {
  errorLogin: false,
  signupErrorTraveler: false,
  signupErrorOwner: false,
  loginError: false,
  errorSignup: {},
  errorLogin: {}
};

export default function(state = initialState, action) {
  console.log("In Error Reducer");
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errorLogin: true
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signupErrorTraveler: true
      };

    case SIGNUP_ERROR_OWNER:
      return {
        ...state,
        signupErrorOwner: true
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: true
      };

    case INPUT_ERROR_SIGNUP:
      console.log("Error in input fields of sign up is: ", action.payload);
      return {
        ...state,
        errorSignup: action.payload
      };

    case INPUT_ERROR_LOGIN:
      console.log("Error in input fields of login is: ", action.payload);
      return {
        ...state,
        errorLogin: action.payload
      };

    case RESET_SIGNUP_ERROR:
      return {
        errorSignup: {}
      };

    case RESET_LOGIN_ERROR:
      return {
        errorLogin: {}
      };
    default:
      return state;
  }
}
