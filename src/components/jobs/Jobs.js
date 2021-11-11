import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import JobItem from "./JobItem";
import JobContext from "../../context/job/jobContext";

const Jobs = () => {
  const jobContext = useContext(JobContext);
  const { loading, jobs } = jobContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="container" style={{ fontFamily: "roboto" }}>
          {jobs.map((job) => {
            return <JobItem key={job.id} job={job} />;
          })}
        </div>
      </>
    );
  }
};

export default Jobs;
