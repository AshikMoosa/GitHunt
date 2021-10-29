import React, { Component, Fragment } from "react";

class Location extends Component {
  render() {
    return (
      <Fragment>
        <form action="#" className="form">
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              name="time"
              id="time"
              style={{ width: "18px" }}
            />
            <label htmlFor="time" style={{ margin: " 1.35em 0.5em" }}>
              Full time
            </label>
          </div>
          <h3>Location</h3>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search city, state, zip code or country"
            style={{ width: "100%" }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              //gridGap: "1rem",
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
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Location;
