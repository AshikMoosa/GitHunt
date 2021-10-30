import React, { Component, Fragment } from "react";

class Location extends Component {
  state = {
    text: "",
  };

  onChange = (e) => this.setState({ text: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchCountry(this.state.text);
      this.setState({ text: "" });
    }
  };
  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} className="form">
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
          <h3>Location</h3>

          <input
            list="locations"
            name="text"
            id="text"
            placeholder="Search country"
            style={{ width: "100%" }}
            value={this.state.text}
            onChange={this.onChange}
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
  }
}

export default Location;
