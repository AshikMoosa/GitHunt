import React, { Component, Fragment } from "react";
import UserImage from "../../images/user.jpg";
class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <Fragment>
        <img
          style={{ width: "100%", height: "180px" }}
          src={UserImage}
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
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            className="input-search"
            value={this.state.text}
            onChange={this.onChange}
            style={{
              zIndex: "1",
              // width: "90%",
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
        {this.props.showClear && (
          <button className="btn-clear" onClick={this.props.clearUsers}>
            Clear
          </button>
        )}
      </Fragment>
    );
  }
}

export default Search;
