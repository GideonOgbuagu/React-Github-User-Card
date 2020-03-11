import React from "react";
import "./GithubUser.css";

const GithubUser = props => {
  // console.log(props.followers);
  return (
    <div className='user-card'>
      <img src={props.followers.avatar_url} />
      <div>
        <h4>{props.followers.login}</h4>
        <a href={props.followers.html_url}>{props.followers.html_url}</a>
      </div>
    </div>
  );
};

export default GithubUser;
