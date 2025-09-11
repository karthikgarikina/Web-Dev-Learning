import React, { Component } from "react";
import Logo from "./logo";
import "./header.css";
const Header = () => {
    return (
        <div className="header">
            <Logo />
            <h1>Hello world</h1>
        </div>
    );
}
export default Header;