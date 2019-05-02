import React, { Component } from 'react'
import ApplicationViews from './ApplicationViews'
import Menu from "./menu/Menu"

export default class Trainer extends Component {
        render() {
                return (
                        <React.Fragment>
                                <Menu />
                                <ApplicationViews />
                        </React.Fragment>
                );
        }
}
