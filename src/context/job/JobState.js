import React, { useReducer, useEffect } from "react";
import axios from "axios";
import JobContext from "./jobContext";
import JobReducer from "./jobReducer";
import {
  SEARCH_JOBS,
  SEARCH_COUNTRY,
  SET_TITLE,
  SET_LOADING,
  SET_COUNTRY,
  GET_JOBS,
} from "../types";

let adzunaClientId;
let adzunaClientSecret;
if (process.env.NODE_ENV !== "production") {
  adzunaClientId = process.env.REACT_APP_ADZUNA_CLIENT_ID;
  adzunaClientSecret = process.env.REACT_APP_ADZUNA_CLIENT_KEY;
} else {
  adzunaClientId = process.env.ADZUNA_CLIENT_ID;
  adzunaClientSecret = process.env.ADZUNA_CLIENT_KEY;
}

const JobState = (props) => {
  const initialState = {
    jobs: [],
    title: "Javascript",
    country: "gb",
    loading: false,
  };

  const [state, dispatch] = useReducer(JobReducer, initialState);

  //Display 5 random JS jobs on page load
  useEffect(() => {
    const fetchData = async () => {
      setLoading();
      const res = await axios.get(
        `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${adzunaClientId}&app_key=${adzunaClientSecret}&results_per_page=5&what=javascript&content-type=application/json`
      );
      dispatch({
        type: GET_JOBS,
        payload: res.data.results,
      });
    };
    fetchData();
  }, []);

  //search Jobs
  const searchJobs = async (title) => {
    setLoading();
    const res = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/${state.country}/search/1?app_id=${adzunaClientId}&app_key=${adzunaClientSecret}&results_per_page=5&what=${title}&content-type=application/json`
    );
    setTitle(title);
    dispatch({
      type: SEARCH_JOBS,
      payload: res.data.results,
    });
  };

  //search Jobs by country
  const searchCountry = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/${text}/search/1?app_id=${adzunaClientId}&app_key=${adzunaClientSecret}&results_per_page=5&what=${state.title}&content-type=application/json`
    );

    setCountry(text);
    dispatch({
      type: SEARCH_JOBS,
      payload: res.data.results,
    });
  };

  //Set Country
  const setCountry = (text) => dispatch({ type: SET_COUNTRY, payload: text });

  //Set Title
  const setTitle = (title) => dispatch({ type: SET_TITLE, payload: title });
  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <JobContext.Provider
      value={{
        title: state.title,
        country: state.country,
        jobs: state.jobs,
        loading: state.loading,
        searchJobs,
        searchCountry,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobState;
