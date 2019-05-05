import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Menu.css"

export default class Menu extends Component {

    render() {
        return (
            <nav className="menu-bar">
                <ul className="nav-spread">
                    {this.props.links.map((link, i) => {
                        return (
                            <li className="nav-item" key={i}>
                                <p className="pointer" onClick={() => this.props.handleClick(link.id)}>{link.name}</p>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
