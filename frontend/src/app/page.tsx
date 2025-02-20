"use client";
import Image from "next/image";
import styles from "./styles/page.module.scss";

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.themeLight}`}>
      <main className={styles.main}>
        <div className={styles.bannerContainer}>
          <Image
            src="/banner.webp"
            alt="Home"
            fill
            className={styles.bannerImage}
            priority
          />
        </div>
        <div className={styles.description}>
          <h1>Welcome to Tasks Manager App</h1>
          <p>
            Organizing your tasks has never been easier! 🚀 Tasks Manager is
            your personal assistant, designed to help you stay on top of your
            daily goals, deadlines, and priorities—all in one place.
          </p>
          <p>
            To unlock the full experience, you'll need to sign up and log in.
            This ensures that all your tasks, notes, and progress are securely
            saved and accessible whenever you need them.
          </p>
          <p>So why wait? Join now and take control of your productivity! ✅</p>
        </div>
      </main>
    </div>
  );
}
