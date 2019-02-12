import {
  LOCATION,
  DETAILS,
  BOOKING_OPTIONS,
  PHOTOS_UPLOAD,
  PHOTOS,
  PRICING
} from "../actions/types";
import { bookingOptions, photos } from "../actions/listPropertyActions";

const initialState = {
  LocationEntries: {},
  LocationFlag: false,
  DetailsFlag: false,
  Details: {},
  BookingFlag: false,
  bookingData: {},
  photosData: {},
  photoFlag: false,
  confirmFlag: false
};

export default function(state = initialState, action) {
  console.log("In location reducer");
  switch (action.type) {
    case LOCATION:
      return {
        ...state,
        LocationEntries: action.payload,
        LocationFlag: true
        // OwnerFlag: action.payload
      };
    case DETAILS:
      return {
        ...state,
        Details: action.payload,
        DetailsFlag: true
      };

    case BOOKING_OPTIONS:
      return {
        ...state,
        bookingData: action.payload,
        BookingFlag: true
      };

    case PHOTOS_UPLOAD:
      return {
        ...state,
        photoFlag: true
      };

    case PHOTOS:
      return {
        ...state,
        photosData: action.payload
      };

    case PRICING:
      return {
        ...state,
        confirmFlag: action.payload
      };

    default:
      return state;
  }
}
