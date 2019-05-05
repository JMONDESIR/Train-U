import React, { Component } from 'react'
import ApplicationViews from './ApplicationViews'
import NavBar from "./nav/NavBar"
import LogIn from "./auth/LogIn"
import GroupManager from "../modules/GroupManager"
export default class Trainer extends Component {

        state = {
                userAuthorized: false
        }
        handleUserAuth = user => {
                console.log(user)
                GroupManager.getAllUsers().then(res => {
                        const exists = res.filter(currentUser => currentUser.userName === user.userName && currentUser.password === user.password)
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
        render() {
                if (this.state.userAuthorized) {
                        return (
                                <React.Fragment>
                                        <NavBar />
                                        <ApplicationViews />
                                </React.Fragment>
                        )
                } else {
                        return (
                                <React.Fragment>
                                        <LogIn handleUserAuth={this.handleUserAuth} />
                                </React.Fragment>
                        )
                }
        }
}
