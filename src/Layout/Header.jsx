import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "../Components/ui/Button";
import "../Css/Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/about", label: "About us" },
    { to: "/services", label: "Services" },
    { to: "/case", label: "Case Studies" },
    { to: "/blog", label: "Blog" },
    { to: "/works", label: "How it Works" },
    { to: "/hire", label: "Hire" },
  ];

  return (
    <header>
      {/* Logo */}
      <div className="logo">
        <img src="/img/logo.png" alt="Logo" />
        <div className="logo-text">JK developers</div>
      </div>

      {/* Hamburger */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Nav */}
      <div className={`Navlink ${menuOpen ? "open" : ""}`}>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to} onClick={() => setMenuOpen(false)}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Button */}
      <div className="header-btn">
        <Button variant="gradient">Contact us</Button>
      </div>
    </header>
  );
};
