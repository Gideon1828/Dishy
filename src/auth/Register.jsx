import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function RegisterPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dishy-2g4s.onrender.com/register", formData);
      alert(response.data.message);
      navigate("/login"); // Navigate after successful registration
    } catch (error) {
      alert(error.response?.data?.error || t("register.registrationFailed"));
    }
  };

  return (
    <div>
      <Header />
      <div className="register-container">
        {/* Left side - Image section */}
        <div className="register-image">
          <div className="overlay"></div>
        </div>

        {/* Right side - Registration form */}
        <div className="register-form-container">
          <div className="register-box">
            <h1 className="register-title">{t("register.title")}</h1>
            <p className="register-subtitle">{t("register.subtitle")}</p>

            <form onSubmit={handleSubmit} className="register-form">
              <div className="input-group-row">
                <div className="input-group">
                  <label htmlFor="firstname">{t("register.firstName")}</label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder={t("register.firstNamePlaceholder")}
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="lastname">{t("register.lastName")}</label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder={t("register.lastNamePlaceholder")}
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="username">{t("register.username")}</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder={t("register.usernamePlaceholder")}
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">{t("register.email")}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("register.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">{t("register.password")}</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder={t("register.passwordPlaceholder")}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="register-button">
                {t("register.registerButton")}
              </button>

              <div className="register-footer">
                <p>
                  {t("register.alreadyHaveAccount")} <Link to="/login">{t("register.login")}</Link>
                </p>
                <Link to="/" className="back-home">
                  {t("register.backHome")}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
