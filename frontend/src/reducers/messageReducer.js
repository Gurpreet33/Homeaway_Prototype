import { SEND_MESSAGE, GET_MSG, REPLY, GET_MSG_OWNER } from "../actions/types";

const initialState = {
  trMsg: [],
  replyInfo: [],
  trInfo: [],
  ownerInfo: {}
};

export default function(state = initialState, action) {
  console.log("In Message Reducer");
  switch (action.type) {
    case SEND_MESSAGE:
      console.log("nessage sent trMsg: ", action.payload);
      return {
        ...state,
        trMsg: action.payload
      };
    case REPLY:
      console.log(action.payload);
      return {
        ...state,
        replyInfo: action.payload
      };
    case GET_MSG:
      console.log(action.payload);
      return {
        ...state,
        trInfo: action.payload
      };

    case GET_MSG_OWNER:
      return {
        ...state,
        ownerInfo: action.payload
      };
    default:
      return state;
  }
}
