'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`${styles.navbar_list} ${menuOpen ? styles.show : ''}`}>
        <li>
          <Link href="/" className={styles.navbar_link}>
            <div className="header-contents">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/schedule" className={styles.navbar_link}>
            <div className="header-contents">Schedule</div>
          </Link>
        </li>
        <li>
          <Link href="/Register-Now" className={styles.navbar_link}>
            <div className="header-contents">Login</div>
          </Link>
        </li>
        <li>
          <Link href="/profile" className={styles.navbar_link}>
            <div className="header-contents">Profile</div>
          </Link>
        </li>
        <li>
          <Link href="/teams" className={styles.navbar_link}>
            <div className="header-contents">Teams</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
