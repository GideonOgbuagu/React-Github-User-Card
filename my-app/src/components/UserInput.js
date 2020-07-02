import React, { Component } from 'react'
import './UserInput.css'

 class UserInput extends Component {
    render() {
        return (
                <form className="row formCont">
                    <input type="text" className="col-12"/>
                    <button className="col-6 button">Search</button>
                </form>
        )
    }
}

export default UserInput;
