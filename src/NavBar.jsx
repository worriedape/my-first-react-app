import React, { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import "./NavBar.css";

const NavBar = React.memo(function NavBar({ placement = "top", menuItems }) {
  // State for mobile menu open/closed & navbar visibility based on scroll
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  // Refs to track scroll position and timeout for showing navbar on scroll up
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Scroll event: hide navbar when scrolling down past height (62px) and show it when scrolling up.
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 62 && currentScrollY > lastScrollY.current) {
      // Hide navbar on scroll down
      setVisible(false);

      // Close mobile menu if open
      setMobileMenuOpen(false);
    } else if (currentScrollY < lastScrollY.current) {
      // Scrolling up – show navbar after a slight delay
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setVisible(true);
      }, 1);
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    const handleTouchMove = handleScroll; // Ensures the same logic runs for touch events

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  // Close mobile menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !navRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Render menu items (supports one-level nested submenus)
  const renderMenuItems = useCallback((items) => {
    return items.map((item, index) => {
      if (item.subItems && item.subItems.length > 0) {
        return (
          <li
            key={index}
            className="navbar-item has-submenu"
            aria-haspopup="true"
          >
            <button aria-expanded="false">{item.label}</button>
            <ul className="submenu" role="menu">
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex} className="submenu-item" role="none">
                  <a href={subItem.href} role="menuitem">
                    {subItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        );
      }
      return (
        <li key={index} className="navbar-item">
          <a href={item.href}>{item.label}</a>
        </li>
      );
    });
  }, []);

  return (
    <nav
      className={`navbar ${placement} ${visible ? "visible" : "hidden"}`}
      ref={navRef}
      aria-label="Main Navigation"
    >
      <div className="navbar-content">
        <div className="navbar-logo">routtee</div>

        {/* Desktop Menu: visible on screens wider than 599px */}
        <ul className="navbar-menu">{renderMenuItems(menuItems)}</ul>

        {/* Hamburger button for mobile (600px and below) */}
        <button
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Hamburger Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu" ref={mobileMenuRef}>
          <ul>{renderMenuItems(menuItems)}</ul>
        </div>
      )}
    </nav>
  );
});

export default NavBar;
