import React, { Component } from 'react'
import LogIn from "./auth/LogIn"
import GroupManager from "../modules/GroupManager"
import ApplicationViews from './ApplicationViews';
import { BrowserRouter as Router, Route, } from "react-router-dom"
import SignUp from './auth/SignUp';

export default class Main extends Component {

        state = {
                userAuthorized: false,
        }

// filter is returning username and password of authorized user and comparing to user provided username and password
        handleUserAuth = user => {
                GroupManager.getAllUsers().then(res => {
                        const exists =
                                res.filter(currentUser =>
                                        currentUser.userName === user.userName
                                        && currentUser.password === user.password
                                )
                        if (exists.length > 0) {
                                sessionStorage.setItem(
                                        "credentials",
                                        JSON.stringify({
                                                userName: exists[0].userName,
                                                password: exists[0].password,
                                                id: exists[0].id
                                        })
                                )
                                this.setState({
                                        userAuthorized: true
                                })
                        }
                })
        }

// TODO add comments here about session storage temination
        handleSignOut = () => {
                sessionStorage.clear()
                this.setState({
                        userAuthorized: false
                })
        }

// This is called a "truthy statement", as it assumes to condition is true
        render() {
                if (this.state.userAuthorized) {
                        return (
                                <React.Fragment>
                                        <ApplicationViews handleSignOut={this.handleSignOut} />
                                </React.Fragment>
                        )
                } else {
                        return (
                                <Router>
                                        <Route
                                                exact path="/" render={props => {
                                                        if (this.state.userAuthorized) {
                                                                return <ApplicationViews {...props} />
                                                        } else {
                                                                return <LogIn handleUserAuth={this.handleUserAuth} />
                                                        }
                                                }}
                                        />
                                        <Route exact path='/signup' component={SignUp} />
                                </Router>
                        )
                }

        }
}

// App