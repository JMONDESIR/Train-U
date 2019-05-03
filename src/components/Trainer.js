import React, { Component } from 'react'
import ApplicationViews from './ApplicationViews'
import Menu from "./menu/Menu"
import NavBar from "./nav/NavBar"
export default class Trainer extends Component {
        render() {
                return (
                        <React.Fragment>
                                <NavBar />
                                <Menu />
                                <ApplicationViews />
                        </React.Fragment>
                );
        }
}
