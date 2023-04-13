import logo from "../images/logo.png"
import "./style.css";

export default function Header () {
    return (
        <div className="Header">
            <img src={logo}></img>my travel journal.
        </div>
    );
}