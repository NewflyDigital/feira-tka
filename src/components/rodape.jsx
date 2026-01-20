import * as React from "react";
import styles from "../styles/Rodape.module.css";
import Link from "next/link";

function Rodape() {
  return (
    <footer className={styles.background}>
      <div className={styles.interno}>
        <div className={styles.rodapePrincipal}>
          {/* LOGO + DESCRIÇÃO */}
          <div className={styles.colLogo}>
            <h2 className={styles.logoText}>[TKA]</h2>

            <p className={styles.desc}>
              TKA Cranes develops robust crane and aerial platform solutions for
              operations that demand continuous performance and structural
              reliability.
            </p>

            <h4 className={styles.tagline}>
              Global Engineering. <span>Real Performance.</span>
            </h4>
          </div>

          {/* QUICK LINKS */}
          <div className={styles.coluna}>
            <h4>Quick Links</h4>
            <Link legacyBehavior href="#products">
              <a>Products</a>
            </Link>
            <Link legacyBehavior href="#why-tka">
              <a>Why TKA</a>
            </Link>
            <Link legacyBehavior href="#conexpo-2026">
              <a>CONEXPO 2026</a>
            </Link>
            <Link legacyBehavior href="#contact">
              <a>Contact</a>
            </Link>
          </div>

          {/* SOCIAL */}
          <div className={styles.social}>
            <h4>Connect</h4>
            <div className={styles.icones}>
              <Link legacyBehavior href="https://tkacranes.com">
                <a
                  target="_blank"
                  className={styles.iconBox}
                  aria-label="Website"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.iconSvg}
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </Link>

              <Link legacyBehavior href="https://www.linkedin.com/company/tkacranes/">
                <a target="_blank" className={styles.iconBox}>
                  in
                </a>
              </Link>
              <Link legacyBehavior href="https://www.instagram.com/tkacranes">
                <a target="_blank" className={styles.iconBox}>
                  ◎
                </a>
              </Link>
            </div>
            <p className={styles.site}>tkacranes.com</p>
          </div>
        </div>

        {/* DIVISÃO */}
        <div className={styles.divisorHorizontal}></div>

        {/* COPYRIGHT */}
        <div className={styles.copy}>
          <p>© 2026 TKA Cranes. All rights reserved.</p>
          <p className={styles.conexpo}>
            Built for <span>CONEXPO Las Vegas 2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
