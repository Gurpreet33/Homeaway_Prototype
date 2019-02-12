import { TRAVELER_DASHBOARD } from "../actions/types";

const initialState = {
  dashProperties: []
};

export default function(state = initialState, action) {
  console.log("In Traveler Dashboard Reducer");
  switch (action.type) {
    case TRAVELER_DASHBOARD:
      return {
        ...state,
        dashProperties: action.payload
      };

    default:
      return state;
  }
}
