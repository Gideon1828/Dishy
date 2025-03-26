import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo and Tagline */}
        <div className="footer-left">
          <img src={logo} alt={t("footer.left.title")} className="footer-logo" />
          <h2 className="footer-title">{t("footer.left.title")}</h2>
          <p className="footer-tagline">{t("footer.left.tagline")}</p>
        </div>

        {/* Center Section - Explore Links */}
        <div className="footer-center">
          <h3>{t("footer.center.title")}</h3>
          <ul>
            <li><a href="/about">{t("footer.center.links.about")}</a></li>
            <li><a href="/privacy">{t("footer.center.links.privacy")}</a></li>
            <li><a href="/terms">{t("footer.center.links.terms")}</a></li>
          </ul>
        </div>

        {/* Right Section - Contact Details */}
        <div className="footer-right">
          <h3>{t("footer.right.title")}</h3>
          <p>{t("footer.right.email")}</p>
          <p>{t("footer.right.phone")}</p>
          <p>{t("footer.right.address")}</p>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="footer-copyright">
        {t("footer.copyright")}
      </p>
    </footer>
  );
};

export default Footer;
