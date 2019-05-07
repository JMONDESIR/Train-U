import React, { Component } from 'react'
import GroupManager from "../../modules/GroupManager"

export default class SignUp extends Component {

        state = {
                firstname: [],
                lastname: [],
                username: [],
                email: [],
                password:[]
        }

        newUser = evt => {
                evt.preventDefault();
                if (this.state.firstname === "") {
                        window.alert("Enter your first name");
                } else {
                        const user = {
                                firstname: this.state.firstname,
                                lastname: this.state.lastname,
                                username: this.state.username,
                                email: this.state.email,
                                password: this.state.password
                        }
                        GroupManager
                                .addUser(user)
                                .then(() => this.props.history.push("/user/new"));
                }
        }
        render() {
                return (
                        <form>
                                <div>
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                                type="text"
                                                required
                                                id="firstName"
                                                placeholder="Enter your first name"
                                                onChange={this.handleFieldChange}
                                        />
                                </div>
                                <div>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                                type="text"
                                                required
                                                id="lastName"
                                                placeholder="Enter your last name"
                                                onChange={this.handleFieldChange}
                                        />
                                </div>
                                <div>
                                        <label htmlFor="userName">User Name</label>
                                        <input
                                                type="text"
                                                required
                                                id="userName"
                                                placeholder="Create a user name"
                                                onChange={this.handleFieldChange}
                                        />
                                </div>
                                <div>
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                                type="text"
                                                required
                                                id="email"
                                                placeholder="Enter your email address"
                                                onChange={this.handleFieldChange}
                                        />
                                </div>
                                <div>
                                        <label htmlFor="password">Password</label>
                                        <input
                                                type="text"
                                                required
                                                id="password"
                                                placeholder="Create a password"
                                                onChange={this.handleFieldChange}
                                        />
                                </div>
                                <button type="submit" onClick={this.newUser}>Submit</button>
                        </form>
                )
        }
}
