import  { useState, useEffect, useRef } from "react"; 
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // New state for navbar visibility
  const [prevScrollY, setPrevScrollY] = useState(0); // State to track previous scroll position
  const navbarRef = useRef(null); // Ref to the navbar element

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        // Scrolling down (and past a threshold to avoid flickering at top)
        setIsNavbarVisible(false);
      } else if (currentScrollY < prevScrollY) {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, [prevScrollY]); // useEffect dependency on prevScrollY

  return (
    <nav
      className={`navbar ${!isNavbarVisible ? "navbar-hidden" : ""}`}
      ref={navbarRef}
    >
      {" "}
      {/* Add navbar-hidden class conditionally and ref */}
      <div className="navbar-logo">
        <a href="/">routtee</a>
      </div>
      <button className="hamburger-icon" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
