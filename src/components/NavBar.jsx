import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "../data";
import { BiMenu } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";
import "../components/navbar.css";



const NavBar = () => {
   
    const [isNavShowing, setIsNavShowing] = useState(false)

    const handleShow = () => {
        setIsNavShowing(prev => !prev)
    }

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo" />
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
                    {links.map(({ name, path }, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className={({isActive}) =>
                                        isActive ? "active-nav" : ""
                                    }
                                    onClick={handleShow}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <button className="nav__toggle-btn" onClick={handleShow}>
                    {
                        isNavShowing ? <MdOutlineClear/> : <BiMenu/> 
                    }
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
