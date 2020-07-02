import React, { Component } from "react";
import GithubUser from "./components/GithubUser";
import UserInput from "./components/UserInput";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    myData: {},
    followers: [],
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/gideonogbuagu").then((res) => {
      console.log(res.data);
      this.setState({
        myData: res.data,
      });
    });

    axios
      .get("https://api.github.com/users/gideonogbuagu/followers")
      .then((res) => {
        // console.log(res.data);
        this.setState({
          followers: res.data,
        });
      });
  }


  render() {
    // console.log("I am state", this.state);
    return (
      <div className="App">
        <h1 style={{color: "white", fontSize: "6rem", paddingTop: "60px", paddingBottom: "30px"}}>Github Users</h1>
        <div className="App-header">
          <div className="my-card">
            <img src={this.state.myData.avatar_url} alt="" />
            <div>
              <h4>{this.state.myData.login}</h4>
              <a href={this.state.myData.html_url}>Github</a>
            </div>
          </div>
          <div className="container inputCont">
            <UserInput />
          </div>
        </div>

        <div className="container github-users">
          {this.state.followers.map((item) => (
            <GithubUser key={item.id} followers={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
