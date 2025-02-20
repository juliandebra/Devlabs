"use client";
import Link from "next/link";
import { deleteCookie } from "cookies-next";
import { redirect, useRouter } from "next/navigation";
import { useAuth } from "@/Context/AuthContext";
import styles from "../styles/navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <nav className={styles.navbar}>
      <Image
        src="/note-logo.png"
        alt="Note logo"
        width={50}
        height={50}
        onClick={() => redirect("/")}
      />

      <div>
        <Link href="/">Home</Link>
        {!isAuthenticated && (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
        {isAuthenticated && (
          <>
            <Link href="/tasks">Tasks</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
