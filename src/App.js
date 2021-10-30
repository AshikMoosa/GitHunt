import axios from "axios";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Users from "./components/users/Users";
import User from "./components/users/User";
import "./styles/App.scss";
import Search from "./components/jobs/Search";
import Location from "./components/jobs/Location";
import Job from "./components/jobs/Job";
import Jobs from "./components/jobs/Jobs";

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    jobs: [],
    loading: false,
    alert: null,
    title: "javascript",
    country: "gb",
  };

  //Display 5 random JS jobs on page load
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${process.env.REACT_APP_ADZUNA_CLIENT_ID}&app_key=${process.env.REACT_APP_ADZUNA_CLIENT_KEY}&results_per_page=5&what=javascript&content-type=application/json`
    );
    this.setState({ jobs: res.data.results, loading: false });
  }

  //Search Users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  //Get Single User
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  //Get single user repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  };

  //Clear Users
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  //Alert User
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  //search Jobs
  searchJobs = async (title) => {
    const { country } = this.state;
    this.setState({ loading: true });
    const res = await axios.get(
      `http://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=${process.env.REACT_APP_ADZUNA_CLIENT_ID}&app_key=${process.env.REACT_APP_ADZUNA_CLIENT_KEY}&results_per_page=5&what=${title}&content-type=application/json`
    );
    this.setState({ title: title });
    this.setState({ jobs: res.data.results, loading: false });
  };

  //search Jobs by country
  searchCountry = async (text) => {
    const { title } = this.state;
    this.setState({ loading: true });
    const res = await axios.get(
      `http://api.adzuna.com/v1/api/jobs/${text}/search/1?app_id=${process.env.REACT_APP_ADZUNA_CLIENT_ID}&app_key=${process.env.REACT_APP_ADZUNA_CLIENT_KEY}&results_per_page=5&what=${title}&content-type=application/json`
    );
    this.setState({ country: text });
    this.setState({ jobs: res.data.results, loading: false });
  };
  render() {
    const { users, loading, user, alert, repos, jobs } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/users"
              render={(props) => (
                <Users
                  clearUsers={this.clearUsers}
                  searchUsers={this.searchUsers}
                  showClear={this.state.users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                  users={users}
                  loading={loading}
                  alert={alert}
                />
              )}
            />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  user={user}
                  loading={loading}
                  repos={repos}
                />
              )}
            />
            <Route
              exact
              path="/jobs"
              render={(props) => (
                <>
                  <Search searchJobs={this.searchJobs} />
                  <div className="jobs-page">
                    <Location searchCountry={this.searchCountry} />
                    <Jobs loading={loading} jobs={jobs} />
                  </div>
                </>
              )}
            />
            <Route exact path="/jobs/info" component={Job} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
