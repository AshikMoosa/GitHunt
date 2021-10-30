import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div
        className="badge all-center"
        style={{
          padding: "0",
          margin: "0",
          position: "fixed",
          right: "0",
          bottom: "0",
          background: "none",
        }}
      >
        <h3>&copy; GitHunt 2021 </h3>
        <h4>
          Created By <a href="https://ashikmoosa.vercel.app/">Ashik Moosa</a>
        </h4>
      </div>
    );
  }
}

export default Footer;
