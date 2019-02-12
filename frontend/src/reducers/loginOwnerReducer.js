import { LOGIN, LOGOUT_USER } from "../actions/types";
import isEmpty from "../Validations/is-empty";

const initialState = {
  Flag: false,
  user: {}
};

export default function(state = initialState, action) {
  console.log("In Login Owner Reducer");
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        Flag: !isEmpty(action.payload),
        user: action.payload
      };

    default:
      return state;
  }
}
