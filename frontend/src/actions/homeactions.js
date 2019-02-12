import axios from "axios";
import {
  SEARCH_BUTTON_CLICK,
  LIST_PROPERTY_BUTTON,
  RESET_ACTION,
  STORE_SEARCH_CRITERIA,
  SEARCH_BUTTON_HOME,
  SEARCH_MODIFIED
} from "./types";

const ROOT_URL = "http://localhost:3001";

export const searchButtonClick = (Data, history) => dispatch => {
  console.log("i am in home actions");

  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/search`, Data)
    .then(res => {
      console.log(res.status);
      if (res.status === 200) {
        dispatch({
          type: SEARCH_BUTTON_CLICK,
          payload: res.data
        });
        dispatch({
          type: STORE_SEARCH_CRITERIA,
          payload: Data
        });
        window.location.reload(1);
        history.push("/search");
      } else if (res.status === 204) {
        window.alert("No properties found matching this search criteria");
        history.push("/home");
      }
    })
    .catch(err => console.log(err));
};
