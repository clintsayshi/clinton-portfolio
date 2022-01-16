import React, { useState, useEffect, useRef } from "react";

import { useStaticQuery, Link, graphql } from "gatsby";

const Header = () => {
  //
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef();

  const content = JSON.parse(
    useStaticQuery(graphql`
      {
        storyblokEntry(slug: { eq: "about" }) {
          content
        }
      }
    `).storyblokEntry.content
  );

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isMenuOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  //
  const header = "py-2 top-0 left-0 right-0  bg-white bg-opacity-80 z-999";
  const nav = `relative container mx-auto flex items-center justify-between`;
  const menuClosed = `-translate-y-12 opacity-0 pointer-events-none transition-transform duration-100 absolute top-full right-0 bg-slate-100`;
  const menuOpened = `pt-4 pb-4 transform translate-y-0 opacity-100 pointer-events-auto transition-transform duration-100 absolute top-full right-0 rounded flex flex-col bg-slate-100`;
  const navLink = `block w-max py-4 pl-10 pr-16 font-medium text-2xl hover:underline`;

  return (
    <header ref={dropdownRef} className={header}>
      <nav className={nav}>
        <img
          className="h-14 w-14 rounded-full object-cover"
          src={content.avatar.filename}
          alt={content.avatar.alt}
        />

        <div className="relative flex items-center">
          <div
            onClick={closeMenu}
            role="group"
            className={isMenuOpen ? menuOpened : menuClosed}
          >
            <Link to="/" className={navLink}>
              Home
            </Link>

            <Link to="/#about" className={navLink}>
              About
            </Link>

            <Link to="/#skills" className={navLink}>
              Skills
            </Link>

            <Link to="/projects" className={navLink}>
              Some of my work
            </Link>

            <Link to="/#contact" className={navLink}>
              Get in touch
            </Link>
          </div>

          <button onClick={handleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
