import { PROFILE } from "../actions/types";

const initialState = {
  profileFlag: false
};

export default function(state = initialState, action) {
  console.log("In update profile Reducer");
  switch (action.type) {
    case PROFILE:
      return {
        ...state,
        profileFlag: true
      };

    default:
      return state;
  }
}
