import * as React from "react";
import styles from "../styles/Rodape.module.css";
import Link from "next/link";

function Rodape() {
  return (
    <footer className={styles.background}>
      <div className={styles.interno}>
        <div className={styles.rodapePrincipal}>
          {/* Logo + descrição */}
          <div className={styles.colLogo}>
            <img
              src="/static/images/logo-tka.png"
              alt="TKA Cranes"
              className={styles.logo}
            />
            <p className={styles.desc}>
              TKA Cranes develops robust crane and aerial platform solutions for
              operations requiring continuous performance and structural
              reliability.
            </p>
            <h4 className={styles.tagline}>
              Global Engineering. <span>Real Performance.</span>
            </h4>
          </div>

          <div className={styles.divisor}></div>

          {/* Links */}
          <div className={styles.links}>
            <div className={styles.coluna}>
              <h4>Quick Links</h4>
              <Link legacyBehavior href="/produtos">
                <a>Products</a>
              </Link>
              <Link legacyBehavior href="/why-tka">
                <a>Why TKA</a>
              </Link>
              <Link legacyBehavior href="/conexpo-2026">
                <a>CONEXPO 2026</a>
              </Link>
              <Link legacyBehavior href="/contato">
                <a>Contact</a>
              </Link>
            </div>

            {/* Social */}
            <div className={styles.social}>
              <h4>Connect</h4>
              <div className={styles.icones}>
                <Link legacyBehavior href="https://tkacranes.com">
                  <a target="_blank">
                    <img src="/globe.png" alt="Website" />
                  </a>
                </Link>
                <Link legacyBehavior href="https://www.linkedin.com/company/tka">
                  <a target="_blank">
                    <img src="/linkedin.png" alt="LinkedIn" />
                  </a>
                </Link>
                <Link legacyBehavior href="https://www.instagram.com/tkacranes">
                  <a target="_blank">
                    <img src="/instagram.png" alt="Instagram" />
                  </a>
                </Link>
              </div>
              <p className={styles.site}>tkacranes.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copy}>
          <p>
            © 2026 TKA Cranes. All rights reserved.<br />
            Built for CONEXPO Las Vegas 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;