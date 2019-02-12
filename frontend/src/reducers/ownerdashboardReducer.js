import { OWNER_DASHBOARD } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  properties: []
};

export default function(state = initialState, action) {
  console.log("In Owner Dashboard Reducer");
  switch (action.type) {
    case OWNER_DASHBOARD:
      return {
        ...state,
        properties: action.payload
      };

    default:
      return state;
  }
}
