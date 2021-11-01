import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import Users from "./components/users/Users";
import User from "./components/users/User";
import "./styles/App.scss";
import Search from "./components/jobs/Search";
import Location from "./components/jobs/Location";
import Job from "./components/jobs/Job";
import Jobs from "./components/jobs/Jobs";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import JobState from "./context/job/JobState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        {/* <JobState> */}
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/users" render={(props) => <Users />} />
              <Route exact path="/user/:login" component={User} />
              <JobState>
                <Route
                  exact
                  path="/jobs"
                  render={(props) => (
                    <>
                      <Search />
                      <Alert />
                      <div className="jobs-page">
                        <Location />
                        <Jobs />
                      </div>
                    </>
                  )}
                />
                <Route exact path="/jobs/info" component={Job} />
              </JobState>
            </Switch>
          </div>
        </Router>
        {/* </JobState> */}
      </AlertState>
    </GithubState>
  );
};

export default App;
