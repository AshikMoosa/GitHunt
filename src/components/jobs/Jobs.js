import React from "react";
import Search from "./Search";
import Spinner from "../layout/Spinner";
import JobItem from "./JobItem";

const Jobs = ({ loading, jobs }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="container">
          <div>
            {jobs.map((job) => {
              return <JobItem key={job.id} job={job} />;
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Jobs;
