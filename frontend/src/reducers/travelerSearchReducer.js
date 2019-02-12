import {
  SEARCH_MODIFIED,
  PROPERTY_SELECTED,
  BOOK_RENTAL
} from "../actions/types";

const initialState = {
  propertySel: [],
  confirmBooking: false
};

export default function(state = initialState, action) {
  console.log("In traveler search results Reducer");
  switch (action.type) {
    case PROPERTY_SELECTED:
      console.log("prop selected reducer", action.payload);
      return {
        ...state,
        propertySel: action.payload
      };
    case BOOK_RENTAL:
      return {
        ...state,
        confirmBooking: action.payload
      };
    default:
      return state;
  }
}
