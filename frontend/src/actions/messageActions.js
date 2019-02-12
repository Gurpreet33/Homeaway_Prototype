import axios from "axios";
import { SEND_MESSAGE, REPLY, GET_MSG, GET_MSG_OWNER } from "./types";

const ROOT_URL = "http://localhost:3001";

export const sendMessage = (Data, history) => dispatch => {
  console.log("i am in send message actions");
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/sendmessage`, Data)
    .then(res => {
      console.log(res.status);
      if (res.status === 200) {
        console.log(res.data);
        window.alert(
          "Message sent successfully.You can see the owner's reply in your inbox!"
        );

        dispatch({
          type: SEND_MESSAGE,
          payload: res.data
        });
      } else {
        window.alert(
          "There was some error sending message.Try again after sometime."
        );
        window.location.reload(1);
      }
    })
    .catch(err => console.log(err));
};

export const replyToTraveler = (Data, history) => dispatch => {
  console.log("i am in reply actions");
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/reply`, Data)
    .then(res => {
      console.log("Response is: ", res.status);
      if (res.status === 200) {
        console.log(res.data);

        dispatch({
          type: REPLY,
          payload: res.data
        });
        window.alert("Message sent successfully!");
        history.push("/home");
        window.location.reload(1);
      } else {
        window.alert(
          "There was some error sending message.Try again after sometime."
        );
      }
    })
    .catch(err => console.log(err));
};

export const getTravelerMessage = (Data, history) => dispatch => {
  console.log("i am in get traveler message actions");
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/gettravelermessage`, Data)
    .then(res => {
      if (res.status === 200) {
        console.log(res.data);
        dispatch({
          type: GET_MSG,
          payload: res.data
        });
      } else {
        window.alert("There are no recent messages!");
        history.push("/ownerdashboard");
      }
    })
    .catch(err => console.log(err));
};

export const getOwnerMessage = (Data, history) => dispatch => {
  console.log("i am in get traveler message actions");
  axios.defaults.withCredentials = true;
  axios
    .post(`${ROOT_URL}/getownermessage`, Data)
    .then(res => {
      if (res.status === 200) {
        console.log(res.data);
        dispatch({
          type: GET_MSG_OWNER,
          payload: res.data
        });
      } else {
        window.alert("There are no messages!");
        history.push("/home");
      }
    })
    .catch(err => console.log(err));
};
