import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';

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

                                                <TextField
                                                        id="userName"
                                                        htmlFor="userName"
                                                        label="User Name"
                                                        style={{ margin: 8 }}
                                                        placeholder="Get ready..."
                                                        variant="outlined"
                                                        onChange={this.handleFieldChange}
                                                        InputLabelProps={{
                                                                shrink: true,
                                                        }}
                                                        defaultValue={this.state.name}
                                                />

                                                <TextField
                                                        id="password"
                                                        htmlFor="password"
                                                        type="password"
                                                        label="Password"
                                                        style={{ margin: 8 }}
                                                        placeholder="Get set..."
                                                        variant="outlined"
                                                        onChange={this.handleFieldChange}
                                                        InputLabelProps={{
                                                                shrink: true,
                                                        }}
                                                        defaultValue={this.state.name}
                                                />

                                                <div className="pa3 mb4 flex justify-center">
                                                        <button className="pointer pt1 pb1 pl2 pr2 mr1" onClick={this.handleLogin} >GO!</button>
                                                        <Link
                                                                to="/signup"
                                                                className="pointer pt1 pb1 pl2 pr2">Signup</Link>
                                                </div>
                                        </form>
                                </div>
                        </div>
                )
        }
}
