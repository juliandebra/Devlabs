"use client";
import { useAuth } from "@/Context/AuthContext";
import { login } from "@/services/authService";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "../styles/form.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { setIsAuthenticated } = useAuth();

  const validateForm = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await login({ email, password });
      setCookie("token", response.token, {
        maxAge: 60 * 60,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        httpOnly: false,
      });

      setError("");
      setIsAuthenticated(true);
      router.push("/tasks");
    } catch (err) {
      setError("Invalid email or password.");
      console.error("Login error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Login</h2>
      <div className={styles.inputSection}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          id="email"
          className={styles.input}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.inputSection}>
        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input
          id="password"
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.submit} type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
