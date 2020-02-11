import React, { Component } from "react";
import GithubUsers from "./components/GithubUsers";
import UserInput from "./components/UserInput";
import axios from "axios";

class App extends Component {
  state = {
    myData: {},
    followers: []
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/gideonogbuagu").then(res => {
      // console.log(res.data);
      this.setState({
        myData: res.data
      });
    });
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/gideonogbuagu/followers")
      .then(res => {
        console.log(res.data);
        this.setState({
          followers: res.data
        });
      });
  }

  render() {
    console.log("I am state", this.state);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-5 mx-auto'>
            <h1>Github Users</h1>
            <p>{this.state.myData.login}</p>
          </div>
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <UserInput />
          </div>
        </div>
        <GithubUsers followers={this.state.users} />
        <div></div>
      </div>
    );
  }
}

export default App;
