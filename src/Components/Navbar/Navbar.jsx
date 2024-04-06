import React, { useState, useRef, useEffect } from "react";
import "./Navbar.scss";
import AstronautIcon from "../../assets/icons/astronaut.svg";
import ContactIcon from "../../assets/icons/contact.svg";
import PortfolioIcon from "../../assets/icons/portfolio.svg";
import SkillsIcon from "../../assets/icons/skills.svg";
import ResumeIcon from "../../assets/icons/resume.svg";
import CV from "../../assets/pdf/Jerome Kithinji CV.pdf";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className={`navbar__container ${
                isOpen ? "menuOpen-container" : ""
            }`}
        >
            {isOpen && <div className="navbar__backdrop" onClick={showNavBar} />}
            <nav className={`navbar ${isOpen ? "show" : ""}`} ref={navRef}>
                <div className="navbar__header">
                    <a className="navbar__header-name" href="#landing__section">
                        Jerome Kithinji
                    </a>
                    <p className="navbar__header-title">Full-Stack Developer</p>
                </div>
                <div className="navbar__links">
                    <ul className="navbar__links-list">
                        <li className="navbar__link">
                            <a
                                className="navbar__link-content"
                                href="#about__section"
                            >
                                <img
                                    className="navbar__link-icon"
                                    src={AstronautIcon}
                                    alt="Astronaut Icon"
                                />
                                About Me
                            </a>
                        </li>
                        <li className="navbar__link">
                            <a
                                className="navbar__link-content"
                                href="#portfolio__section"
                            >
                                <img
                                    className="navbar__link-icon"
                                    src={PortfolioIcon}
                                    alt="Portfolio Icon"
                                />
                                Portfolio
                            </a>
                        </li>
                        <li className="navbar__link">
                            <a
                                className="navbar__link-content"
                                href="#experience__section"
                            >
                                <img
                                    className="navbar__link-icon"
                                    src={SkillsIcon}
                                    alt="Skills Icon"
                                />
                                Experience
                            </a>
                        </li>
                        <li className="navbar__link">
                            <a
                                className="navbar__link-content"
                                href="#contact__section"
                            >
                                <img
                                    className="navbar__link-icon"
                                    src={ContactIcon}
                                    alt="Contact Icon"
                                />
                                Contact
                            </a>
                        </li>
                        <li className="navbar__link">
                            <a
                                className="navbar__link-content"
                                href={CV}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="navbar__link-icon"
                                    src={ResumeIcon}
                                    alt="Resume Icon"
                                />
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            {isOpen ? (
                <div className="navbar__collapsed" >
                    <MdClose className="navbar__collapsed-icon" onClick={showNavBar}/>
                    {isOpen ? null : (
                        <div className="navbar__collapsed__header">
                            <p className="navbar__collapsed__header-name">Jerome Kithinji</p>
                            <p className="navbar__collapsed__header-title">Full-Stack Developer</p>
                        </div>
                    ) }
                    <div></div>
                </div>
            ) : (
                <div className="navbar__collapsed">
                    <MdMenu className="navbar__collapsed-icon" onClick={showNavBar} />
                    {isOpen ? null : (
                        <div className="navbar__collapsed__header">
                            <p className="navbar__collapsed__header-name">Jerome Kithinji</p>
                            <p className="navbar__collapsed__header-title">Full-Stack Developer</p>
                        </div>
                    ) }
                    <div></div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
