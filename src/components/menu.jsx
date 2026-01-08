import { useEffect, useState } from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.menuAlternative : ""
      }`}
    >
      <div className={styles.container}>
        <Link legacyBehavior passHref href="/" className={styles.logo}>
          <img src="/static/images/logo-branco.png" alt="TKA" />
        </Link>

        <nav className={styles.nav}>
          <Link legacyBehavior passHref href="/produtos">Products</Link>
          <Link legacyBehavior passHref href="/conexpo-2026">CONEXPO 2026</Link>
          <Link legacyBehavior passHref href="/why-tka">Why TKA</Link>
          <Link legacyBehavior passHref href="/contact">Contact</Link>
        </nav>

        <Link legacyBehavior passHref href="tel:+555432023000" className={styles.cta}>
          +55 54 3202.3000
        </Link>

        <button
          className={styles.mobileButton}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          <Link legacyBehavior passHref href="/produtos" onClick={() => setOpen(false)}>Products</Link>
          <Link legacyBehavior passHref href="/why-tka" onClick={() => setOpen(false)}>Why TKA</Link>
          <Link legacyBehavior passHref href="/conexpo-2026" onClick={() => setOpen(false)}>CONEXPO 2026</Link>
          <Link legacyBehavior passHref href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <Link
            legacyBehavior
            passHref
            href="/conexpo-2026"
            className={styles.mobileCta}
            onClick={() => setOpen(false)}
          >
            Meet Us at CONEXPO
          </Link>
        </div>
      )}
    </header>
  );
}
