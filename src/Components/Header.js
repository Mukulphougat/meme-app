import React from "react";
import "./Styles.css"
import troll from "../Images/troll.png"
function Header() {
    return (
        <nav className="header">
            <img src={troll} width={50} className="troll"/>
            <h2 className="heading">Meme Generator</h2>
        </nav>
    )
}
export default Header;