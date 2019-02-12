import { SIGN_OWNER, SIGN_TRAVELER } from "../actions/types";

const initialState = {
  ownerSignFlag: false,
  travelerSignFlag: false
};

export default function(state = initialState, action) {
  console.log("In sign up reducer");
  switch (action.type) {
    case SIGN_OWNER:
      return {
        ...state,
        ownerSignFlag: action.payload
      };

    case SIGN_TRAVELER:
      return {
        ...state,
        travelerSignFlag: action.payload
      };

    default:
      return state;
  }
}
