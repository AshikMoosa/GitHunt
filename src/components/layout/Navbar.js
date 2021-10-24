import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuOpen from "../../images/menu.svg";
import MenuExit from "../../images/exitw.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps = {
    title: "GitHunt",
  };
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  render() {
    return (
      <div className="navbar">
        <h1>
          <Link to="/">{this.props.title}</Link>
        </h1>
        <img
          id="mobile-cta"
          className="mobile-menu"
          src={MenuOpen}
          alt="mobilemenu"
          style={{
            height: "2.5em",
          }}
          onClick={this.handleClick}
        />
        <nav
          className={`${this.state.isToggleOn ? "mobile-exit" : "mobile-cta"}`}
        >
          <img
            id="mobile-exit"
            className="mobile-menu-exit"
            src={MenuExit}
            alt="mobilemenuExit"
            style={{
              height: "2.5em",
            }}
            onClick={this.handleClick}
          />
          <ul className="primary-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
