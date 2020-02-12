import React, { Component } from "react";
import GithubUser from "./components/GithubUser";
import UserInput from "./components/UserInput";
import axios from "axios";
import "./App.css";

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
    // console.log("I am state", this.state);
    return (
      <div className='container App'>
        <div className=''>
          <div className=''>
            <h1>Github Users</h1>
            <p>{this.state.myData.login}</p>
          </div>

          <UserInput />
        </div>

        <div className='github-users'>
          {this.state.followers.map(item => (
            <GithubUser key={item.id} followers={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
