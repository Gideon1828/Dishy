import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Optimized input handlers
  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const handlePasswordChange = useCallback(
    (e) => setPassword(e.target.value),
    []
  );

  // Custom debounce function
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // Handle login API request
  const loginRequest = async () => {
    setLoading(true);
    console.log("Sending login request:", { email, password });

    try {
      const response = await axios.post(
        "https://dishy-2g4s.onrender.com/login",
        { email, password }
      );
      console.log("Response received:", response.data);

      if (response.data.message) {
        alert(response.data.message);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", response.data.token);
        navigate("/working");
      } else {
        alert(t("login.unexpectedResponse"));
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.error || t("login.loginFailed"));
    }

    setLoading(false);
  };

  // Debounce login function
  const debouncedLogin = debounce(loginRequest, 100);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    debouncedLogin();
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        {/* Left side - Image section */}
        <div className="login-image">
          <div className="overlay"></div>
        </div>

        {/* Right side - Login form */}
        <div className="login-form-container">
          <div className="login-box">
            <h1 className="login-title">{t("login.title")}</h1>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
                <label htmlFor="email">{t("login.emailLabel")}</label>
                <input
                  id="email"
                  type="email"
                  placeholder={t("login.emailPlaceholder")}
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">{t("login.passwordLabel")}</label>
                <input
                  id="password"
                  type="password"
                  placeholder={t("login.passwordPlaceholder")}
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <button type="submit" className="login-button" disabled={loading}>
                {loading ? t("login.loggingIn") : t("login.title")}
              </button>

              <div className="login-footer">
                <p>
                  {t("login.noAccount")}{" "}
                  <Link to="/register">{t("login.register")}</Link>
                </p>
                <Link to="/" className="back-home">
                  {t("login.backHome")}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
