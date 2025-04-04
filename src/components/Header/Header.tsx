import "./Header.css";
import React from "react";
import logo from "./img/logo.svg";
const Header = () => {
    return (
        <header className="flex">
            <img src={logo.src} alt="" />
            <hr />
            <nav>
                <ul className="flex justify-between items-center">
                    <li>
                        <a href="#">00home</a>
                    </li>
                    <li>
                        <a href="#">01destination</a>
                    </li>
                    <li>
                        <a href="#">02crew</a>
                    </li>
                    <li>
                        <a href="#">03technology</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
