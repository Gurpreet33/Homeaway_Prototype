import {
  SEARCH_BUTTON_CLICK,
  LIST_PROPERTY_BUTTON,
  RESET_ACTION,
  SEARCH_BUTTON_HOME,
  STORE_SEARCH_CRITERIA,
  SEARCH_MODIFIED
} from "../actions/types";

const initialState = {
  searchEntries: [],
  HomeFlag: false,
  ListFlag: false,
  storeSearchCriteria: []
};

export default function(state = initialState, action) {
  console.log("In Home Reducer");
  switch (action.type) {
    case SEARCH_BUTTON_CLICK:
      return {
        ...state,
        searchEntries: action.payload
      };

    case LIST_PROPERTY_BUTTON:
      return {
        ...state,
        ListFlag: action.payload
      };

    case RESET_ACTION:
      return {
        ListFlag: false
      };

    case STORE_SEARCH_CRITERIA:
      return {
        ...state,
        storeSearchCriteria: action.payload
      };

    case SEARCH_MODIFIED:
      return {
        ...state,
        searchEntries: action.payload
      };

    default:
      return state;
  }
}
