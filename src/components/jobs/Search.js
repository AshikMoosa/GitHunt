import React, { useState, Fragment, useContext } from "react";
import JobsImage from "../../images/jobs.png";
import JobContext from "../../context/job/jobContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const jobContext = useContext(JobContext);
  const alertContext = useContext(AlertContext);

  const { searchJobs } = jobContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchJobs(text);
      setText("");
    }
  };
  return (
    <Fragment>
      <img
        style={{ width: "100%", height: "180px" }}
        src={JobsImage}
        alt="User Background.."
      />

      <form
        className="form search-form"
        style={{
          zIndex: "1",
          position: "absolute",
          top: "12em",
          width: "90%",
          left: "9%",
        }}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="text"
          placeholder="Search job title..."
          className="input-search"
          value={text}
          onChange={onChange}
          style={{
            zIndex: "1",
          }}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-search"
          style={{
            zIndex: "1",
            cursor: "pointer",
          }}
        />
      </form>
    </Fragment>
  );
};

export default Search;
