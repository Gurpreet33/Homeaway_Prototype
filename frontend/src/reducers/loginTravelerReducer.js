import { LOGIN_TRAVELER } from "../actions/types";

const initialState = {
  TravelerFlag: false,
  tokenTraveler: ""
};

export default function(state = initialState, action) {
  console.log("In login traveler reducer");
  switch (action.type) {
    case LOGIN_TRAVELER:
      return {
        ...state,
        tokenTraveler: action.payload,
        TravelerFlag: true
        // OwnerFlag: action.payload
      };
    default:
      return state;
  }
}
