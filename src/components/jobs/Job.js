import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAsia,
  faClock,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
class Job extends Component {
  calcDays(postDate) {
    let d = new Date();
    let d2 = new Date(postDate);
    let Difference_In_Time = d2.getTime() - d.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let daysAgo = Math.abs(Math.floor(Difference_In_Days));
    return daysAgo;
  }
  render() {
    const { jobDetails } = this.props.location.state;
    return (
      <div className="job-info">
        <div className="left">
          <Link to="/jobs" style={{ color: "#1e86ff", fontFamily: "poppins" }}>
            {" "}
            <FontAwesomeIcon
              icon={faLongArrowAltLeft}
              style={{ paddingRight: "1em" }}
            />
            Back to search
          </Link>

          <h3 style={{ color: "#B9BDCF", fontFamily: "poppins" }}>
            HOW TO APPLY
          </h3>
          <a
            href={jobDetails.redirect_url}
            style={{
              color: "#334680",
              fontFamily: "poppins",
              textDecoration: "underline",
            }}
          >
            Click here to apply to this job
          </a>
        </div>
        <div className="right">
          <div>
            <h2
              style={{
                marginBottom: "0.5em",
                color: "#334680",
                fontFamily: "roboto",
              }}
            >
              {jobDetails.title}
            </h2>
            <button
              className="btn text-dark"
              style={{
                width: "70px",
                height: "25px",
                background: "transparent",
                border: "1px solid #334680",
                color: "#334680",
                fontFamily: "roboto",
              }}
            >
              Full time
            </button>
            <p style={{ color: "#B9BDCF", fontFamily: "roboto" }}>
              {"  "}
              <FontAwesomeIcon icon={faClock} />
              {"  "}
              {this.calcDays(jobDetails.created)} days ago
            </p>
          </div>
          <div
            style={{
              display: "flex",
              columnGap: "1rem",
              margin: "2rem 0rem",
              fontFamily: "roboto",
            }}
          >
            <div className="details">
              <h3 style={{ color: "#334680", fontFamily: "roboto" }}>
                {jobDetails.company.display_name}
              </h3>
              <p
                style={{
                  marginBlockEnd: "auto",
                  color: "#B9BDCF",
                  fontFamily: "roboto",
                }}
              >
                <FontAwesomeIcon icon={faGlobeAsia} /> {"  "}
                {jobDetails.location.display_name}
                {"  "}
              </p>
            </div>
          </div>
          <p style={{ color: "#334680", fontFamily: "roboto" }}>
            {jobDetails.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Job;
