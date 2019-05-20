import React, { Component } from 'react'
import GroupManager from "../../modules/GroupManager"
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom'

class SignUp extends Component {

        state = {
                userName: "",
                email: "",
                password: ""
        }

        handleFieldChange = (evt) => {
                const stateToChange = {}
                stateToChange[evt.target.id] = evt.target.value
                this.setState(stateToChange)
        }

        newUser = evt => {
                console.log(this.state)
                evt.preventDefault();
                if (this.state.userName === "") {
                        window.alert("You must enter a user name");
                } else {
                        const user = {
                                userName: this.state.userName,
                                email: this.state.email,
                                password: this.state.password
                        }
                        GroupManager
                                .addUser(user)
                }
                this.props.history.push('/')
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
                                                        placeholder="Create a user name"
                                                        variant="outlined"
                                                        onChange={this.handleFieldChange}
                                                        InputLabelProps={{
                                                                shrink: true,
                                                        }}
                                                        defaultValue={this.state.userName}
                                                />

                                                <TextField
                                                        id="email"
                                                        htmlFor="email"
                                                        label="email address"
                                                        style={{ margin: 8 }}
                                                        placeholder="Enter your email address"
                                                        variant="outlined"
                                                        onChange={this.handleFieldChange}
                                                        InputLabelProps={{
                                                                shrink: true,
                                                        }}
                                                        defaultValue={this.state.email}
                                                />

                                                <TextField
                                                        id="password"
                                                        type="password"
                                                        htmlFor="password"
                                                        label="Password"
                                                        style={{ margin: 8 }}
                                                        placeholder="Create a password"
                                                        variant="outlined"
                                                        onChange={this.handleFieldChange}
                                                        InputLabelProps={{
                                                                shrink: true,
                                                        }}
                                                        defaultValue={this.state.password}
                                                />
                                                <button type="submit" className="pointer pt1 pb1 pl2 pr2 mr1" onClick={this.newUser} >Submit</button>
                                        </form>
                                </div>
                        </div>
                )
        }
}

export default withRouter(SignUp)