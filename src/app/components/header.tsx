import Home from "../page";
import "../style/header.css";
import Link from "next/link";
function Header() {
    return (
        <div className="header">
            {/* left */}
            <div>
                <h1 className="logo">RT.</h1>
            </div>

            {/* right */}

            <div className="header-right-div">
                <ul className="header-lists">
                    <li>
                        <Link className="nav-links"  href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="nav-links" href={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link className="nav-links" href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default Header