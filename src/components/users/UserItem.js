import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          className="btn-more btn-dark btn-sm"
          style={{ margin: "1rem 0" }}
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
