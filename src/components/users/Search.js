import React, { useState, Fragment, useContext } from "react";
import UserImage from "../../images/user.jpg";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <Fragment>
      <img
        style={{ width: "100%", height: "180px" }}
        src={UserImage}
        alt="User Background.."
      />

      <form
        className="form search-form"
        style={{
          zIndex: "1",
          position: "absolute",
          top: "12em",
          width: "90%",
          left: "9%",
        }}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="text"
          placeholder="Search github users..."
          className="input-search"
          value={text}
          onChange={onChange}
          style={{
            zIndex: "1",
          }}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-search"
          style={{
            zIndex: "1",
            cursor: "pointer",
          }}
        />
      </form>
      {githubContext.users.length > 0 && (
        <button className="btn-clear" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

export default Search;
