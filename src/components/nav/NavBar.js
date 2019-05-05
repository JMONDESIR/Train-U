import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class NavBar extends Component {
  render() {
    return (
      <div className="pre-navbar">
            <nav className="nav-bar">
                <ul className="pre-navContainer">
                    <li className="pre-navItem">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="pre-navItem">
                        <Link to="/profile">My Profile</Link>
                    </li>
                    <li className="pre-navItem">
                        <Link to="/log-in">Log In</Link>
                    </li>
                    <li className="pre-navItem">
                        <Link to="/home">Home</Link>
                    </li>
                </ul>
            </nav>
      </div>
    )
  }
}
