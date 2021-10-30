import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAsia,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class JobItem extends Component {
  render() {
    const { job } = this.props;
    return (
      <div className="card">
        <div style={{ gridGap: "1rem" }}>
          <div className="details" style={{ marginTop: "-1.5em" }}>
            <h5>{job.company.display_name}</h5>
            <h4 style={{ marginTop: "-1em", marginBottom: "1em" }}>
              {job.title}
            </h4>
            <Link to={{ pathname: "jobs/info", state: { jobDetails: job } }}>
              <button
                className="btn text-dark"
                style={{
                  width: "70px",
                  height: "25px",
                  background: "transparent",
                  border: "1px solid blue",
                  cursor: "pointer",
                }}
              >
                More
              </button>
            </Link>
            <div
              className="loctime"
              style={{
                display: "grid",
                fontSize: "12px",
                gridTemplateColumns: "repeat(2,1fr)",
              }}
            >
              <p style={{ marginBlockEnd: "auto" }}>
                {"  "}
                <FontAwesomeIcon icon={faGlobeAsia} />
                {job.location.display_name}
                {"  "}
              </p>
              <p style={{ gridColumnStart: "3" }}>
                {"  "}
                <FontAwesomeIcon icon={faMoneyBillWave} />
                {job.salary_min && job.salary_max
                  ? " " + job.salary_min + "-" + job.salary_max
                  : " NA "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobItem;
