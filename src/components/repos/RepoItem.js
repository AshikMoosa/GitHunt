import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className="card ">
      <h3 style={{ textAlign: "center" }}>
        <a href={repo.html_url} style={{ color: "inherit" }}>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

export default RepoItem;
