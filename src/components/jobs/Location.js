import React, { Component, Fragment, useState, useContext } from "react";
import JobContext from "../../context/job/jobContext";
import AlertContext from "../../context/alert/alertContext";

const Location = () => {
  const jobContext = useContext(JobContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = (e) => {
    let countryCodeMap = new Map([
      ["Austria", "at"],
      ["Australia", "au"],
      ["United Kingdom", "gb"],
      ["Brazil", "br"],
      ["Canada", "ca"],
      ["France", "fr"],
      ["Germany", "de"],
      ["India", "in"],
      ["Italy", "it"],
      ["Netherlands", "nl"],
      ["New Zealand", "nz"],
      ["Poland", "pl"],
      ["Russia", "ru"],
      ["Singapore", "sg"],
      ["South Africa", "za"],
      ["United States", "us"],
    ]);
    let countryCode = countryCodeMap.get(e.target.value);
    setText(countryCode);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      jobContext.searchCountry(text);
      setText("");
    }
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit} className="form">
        {/* <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              name="time"
              id="time"
              style={{ width: "18px" }}
            />
            <label htmlFor="time" style={{ margin: " 1.35em 0.5em" }}>
              Full time
            </label>
          </div> */}
        <h3 style={{ fontFamily: "poppins", color: "rgb(185, 189, 207)" }}>
          Location
        </h3>

        <input
          list="locations"
          name="text"
          id="text"
          placeholder="Search country"
          style={{ width: "100%" }}
          onChange={onChange}
        />
        <datalist id="locations">
          <option value="Austria" />
          <option value="Australia" />
          <option value="Brazil" />
          <option value="Canada" />
          <option value="France" />
          <option value="Germany" />
          <option value="India" />
          <option value="Italy" />
          <option value="Netherlands" />
          <option value="New Zealand" />
          <option value="Poland" />
          <option value="Russia" />
          <option value="Singapore" />
          <option value="South Africa" />
          <option value="United Kingdom" />
          <option value="United States" />
        </datalist>
        {/* <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              maxWidth: "2rem",
              marginBottom: "2rem",
              gridAutoRows: "2.5em",
            }}
          >
            <input
              type="radio"
              name="location"
              id="location"
              style={{ width: "18px" }}
            />
            <label htmlFor="location" style={{ margin: " 1.35em 0.5em" }}>
              London
            </label>
            <input
              type="radio"
              name="location"
              id="location"
              style={{ width: "18px" }}
            />
            <label htmlFor="location" style={{ margin: " 1.35em 0.5em" }}>
              Amsterdam
            </label>
            <input
              type="radio"
              name="location"
              id="location"
              style={{ width: "18px" }}
            />
            <label htmlFor="location" style={{ margin: " 1.35em 0.5em" }}>
              New York
            </label>
            <input
              type="radio"
              name="location"
              id="location"
              style={{ width: "18px" }}
            />
            <label htmlFor="location" style={{ margin: " 1.35em 0.5em" }}>
              Berlin
            </label>
          </div> */}
      </form>
    </Fragment>
  );
};

export default Location;
