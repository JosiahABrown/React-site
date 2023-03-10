import React from "react"
import logo from "../images/reactjs-logo-small.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav-logo" src={logo} />
            <h3 className="nav-title nav-title-main">ReactFacts</h3>
            <h4 className="nav-title nav-title-sub">React Course | Project 1</h4>
        </nav>
    )
}