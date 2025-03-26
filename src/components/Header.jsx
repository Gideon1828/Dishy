import React, { useState,useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
// Import Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


const Header = () => {
  const { t } = useTranslation();

  const [usernames, setUsernames] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://dishy-2g4s.onrender.com/working", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          // Assuming the endpoint returns an object with a "username" field
          setUsernames(response.data.username);
        })
        .catch((error) => {
          console.error("Error fetching data from MongoDB:", error);
        });
    }
  }, []);

  // Dummy authentication values; replace with your actual auth logic.
  const isLoggedIn =localStorage.getItem("isLoggedIn") === "true"; 
  const name=usernames
  const user = {
    name:name,
    avatarUrl: "/PhotoProfile.png", // Update with your actual profile image path.
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    //window.location.reload(); // Reload to reflect the changes
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    // Prevent click from propagating to document so the dropdown doesn't immediately close
    e.stopPropagation();
    setDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickAnywhere = () => {
      setDropdownVisible(false);
    };

    document.addEventListener("click", handleClickAnywhere);
    return () => {
      document.removeEventListener("click", handleClickAnywhere);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Left Side: Logo and Title */}
        <div className="logo-container">
          <img src={logo} alt={t("header.title")} className="logo" />
          <h1 className="title">{t("header.title")}</h1>
        </div>

        {/* Right Side: Navigation, Language Switcher, and Profile */}
        <div className="nav-container">
          <nav className="nav">
            <Link to="/" className="nav-link" onClick={handleLogout}>
              {t("header.nav.home")}
            </Link>
            <Link to="/login" className="nav-link" onClick={handleLogout}>
              {t("header.nav.login")}
            </Link>
            <Link to="/register" className="nav-link" onClick={handleLogout}>
              {t("header.nav.register")}
            </Link>
          </nav>
          <LanguageSwitcher />

          {/* Profile Section: Appears only when user is logged in */}
          {isLoggedIn && (
            <div className="profile-section" onClick={toggleDropdown}>
              <img
                src={user.avatarUrl}
                alt="Profile"
                className="profile-icon"
              />
              {dropdownVisible && (
                <div className="profile-dropdown">
                  <div className="profile-info">
                    <img
                      src={user.avatarUrl}
                      alt="Profile"
                      className="profile-dropdown-icon"
                    />
                    <span>{user.name}</span>
                  </div>
                  <Link to="/change-password" className="dropdown-item">
                    Change Password
                  </Link>
                  <Link to="/favorites" className="dropdown-item">
                    <FontAwesomeIcon icon={faHeart} className="dropdown-icon" />
                    Favorites
                  </Link>
                  
                  <Link to="/" onClick={handleLogout} className="btn">Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
