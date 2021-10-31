import React, { useContext } from "react";
import Search from "./Search";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import Alert from "../layout/Alert";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { loading, users } = githubContext;
  const { alert, setAlert } = alertContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Search />
        <Alert />
        <div className="container">
          <div style={userStyle}>
            {users.map((user) => {
              return <UserItem key={user.id} user={user} />;
            })}
          </div>
        </div>
      </>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gridGap: "1rem",
};

export default Users;
