import React, { Component } from 'react'

 class UserInput extends Component {
    render() {
        return (
                <form className="row">
                    <input type="text" className="col-8 "/>
                    <button className="col-3">Search</button>
                </form>
        )
    }
}

export default UserInput;
