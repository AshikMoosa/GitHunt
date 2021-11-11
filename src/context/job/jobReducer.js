import {
  SEARCH_JOBS,
  SET_LOADING,
  SEARCH_COUNTRY,
  SET_TITLE,
  SET_COUNTRY,
  GET_JOBS,
} from "../types";

const jobReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_COUNTRY:
      return {
        ...state,
        country: action.payload,
        loading: false,
      };
    case SEARCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default jobReducer;
