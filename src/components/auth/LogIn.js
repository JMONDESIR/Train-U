import React, { Component } from 'react'

export default class LogIn extends Component {

        state = {
                userName: "",
                password: ""
        }

        handleFieldChange = (evt) => {
                const stateToChange = {}
                stateToChange[evt.target.id] = evt.target.value
                this.setState(stateToChange)
        }

        handleLogin = e => {
                e.preventDefault()
                this.props.handleUserAuth(this.state)
        }

        render() {
                return (
                        <div className="flex flex-column justify-center mt4-l mt0 w-30 mr-auto ml-auto">
                                <div className="_loginForm">
                                        <form className="flex flex-column ">
                                                <div className="w-100 flex flex-column pa3">
                                                        <label htmlFor="userName">Username</label>
                                                        <input onChange={this.handleFieldChange}
                                                                id="userName"
                                                                type="text"
                                                                placeholder="Username"
                                                                className="pa2 outline-0 _customInput"
                                                        />
                                                </div>

                                                <div className="flex flex-column pa3">
                                                        <label htmlFor="password">Password</label>
                                                        <input onChange={this.handleFieldChange}
                                                                id="password"
                                                                type="password"
                                                                placeholder="Password"
                                                                className="pa2 outline-0 _customInput"
                                                        />
                                                </div>

                                                <div className="pa3 mb4 flex justify-center">
                                                        <button className="_button-traverse pointer pt1 pb1 pl2 pr2 mr1" onClick={this.handleLogin} >
                                                                Login
              </button>
                                                        <button
                                                                className="_button-traverse pointer pt1 pb1 pl2 pr2">Signup</button>
                                                </div>
                                        </form>
                                </div>
                        </div>
                )
        }
}
