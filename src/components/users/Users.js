import React from "react";
import Search from "./Search";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import Alert from "../layout/Alert";
const Users = ({
  users,
  loading,
  searchUsers,
  clearUsers,
  showClear,
  setAlert,
  alert,
}) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Search
          searchUsers={searchUsers}
          clearUsers={clearUsers}
          showClear={showClear}
          setAlert={setAlert}
        />
        <Alert alert={alert} />
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
