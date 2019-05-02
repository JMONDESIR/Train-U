import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Menu.css"

export default class Menu extends Component {
    render() {
        return (
            <nav className="menu-bar">
                <ul className="nav-spread">
                    <li className="nav-item">
                        <Link to="/chest">CHEST</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/back">BACK</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shoulders">SHOULDERS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/arms">ARMS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/abs">ABS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/legs">LEGS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cardio">CARDIO</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
