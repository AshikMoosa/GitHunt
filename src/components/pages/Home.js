import React, { Component } from "react";
import Footer from "../layout/Footer";
import HomeImg from "../../images/htest.png";
class Home extends Component {
  render() {
    return (
      <div style={{ height: "350px", display: "block" }}>
        <div className="hero">
          <h1>
            Welcome to GitHunt
            <p>
              <span> A place where your job hunt ends!</span>
            </p>
          </h1>

          <img src={HomeImg} alt="Home page Img" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
