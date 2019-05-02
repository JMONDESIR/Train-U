import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class NavBar extends Component {
  render() {
    return (
      <div>
            <nav className="menu-bar">
                <ul className="nav-spread">
                    <li className="nav-item">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/log-in">Log In</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile">My Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
      </div>
    )
  }
}
