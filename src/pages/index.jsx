import * as React from "react";
import { useState } from "react";
import Banner from "../components/banner";
import Menu from "../components/menu";
import styles from "../styles/Index.module.css";
import Link from "next/link";
import GoogleMap from "../components/map";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeNewFly from "../components/rodape-newfly";

export default function Home() {
  React.useEffect(() => {
    window.document.body.style.backgroundColor = "#01030e";
  }, []);

  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Menu />
      <a id="banner"></a>
      <Banner />
      {/* Seção Global Presence */}
      <section className={styles.globalPresence}>
        {/* VIDEO BACKGROUND */}
        <div className={styles.bgVideo}>
          <video
            src="/static/video/tka-mapa.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* OVERLAY opcional para contraste */}
        <div className={styles.overlay}></div>

        {/* CONTEÚDO */}
        <div className={styles.interno2}>
          <div className={styles.leftContent}>
            <span className={styles.badge2}>
              <svg
                className={styles.badgeIcon}
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 12a10 10 0 1020 0 10 10 0 10-20 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              GLOBAL PRESENCE
            </span>

            <h2 className={styles.title}>
              Engineered for <br />
              <span>Global Performance</span>
            </h2>

            <p className={styles.paragrafoLight}>
              TKA is a global engineering company delivering high-performance
              solutions for the most demanding industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Product Portfolio */}
      <section className={styles.productPortfolio}>
        <div className={styles.internoColumn}>
          <span className={styles.badge}>PRODUCT PORTFOLIO</span>

          <h2 className={styles.title}>
            Solutions Built to <span>Perform</span>
          </h2>

          <p className={styles.paragrafoLight}>
            From service cranes to aerial platforms, each TKA solution is
            engineered for maximum uptime and operational efficiency.
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <h4>High Performance</h4>
              <p>Designed for heavy-duty operations and continuous use.</p>
            </div>

            <div className={styles.featureItem}>
              <h4>Low Maintenance</h4>
              <p>Fewer downtimes, more productivity.</p>
            </div>

            <div className={styles.featureItem}>
              <h4>Simple Operation</h4>
              <p>Intuitive controls with full focus on the operator.</p>
            </div>

            <div className={styles.featureItem}>
              <h4>Robust Structure</h4>
              <p>Reinforced construction for maximum durability.</p>
            </div>
          </div>

          <div className={styles.cards}>
            {[
              {
                img: "/static/images/17-900.png",
                tag: "Easy maintenance",
                title: "TKA 17.900",
                sub: "Heavy-duty construction",
                desc: "Optimal balance of reach and capacity for versatile jobsite applications",
                link: "https://tkacranes.com/produtos/17.900c",
              },
              {
                img: "/static/images/23-700.png",
                tag: "Continuous performance",
                title: "TKA 23.700",
                sub: "Medium-duty lifting operations",
                desc: "Extended reach capabilities with enhanced load stability",
                link: "https://tkacranes.com/produtos/23700c",
              },
              {
                img: "/static/images/50-700.png",
                tag: "Intuitive operation",
                title: "TKA 50.700",
                sub: "Industrial & infrastructure",
                desc: "Maximum lifting capacity for the most demanding operations",
                link: "https://tkacranes.com/produtos/50700c",
              },
            ].map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardImage}>
                  <span className={styles.cardTag}>{item.tag}</span>
                  <img src={item.img} alt={item.title} />
                </div>

                <h4>{item.title}</h4>
                <p className={styles.cardSubtitle}>{item.sub}</p>
                <p className={styles.desc}>{item.desc}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.learnMore}
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className={styles.whyChoose}>
        <div className={styles.internoColumn}>
          <span className={styles.badge}>WHY CHOOSE TKA</span>

          <h2 className={styles.title}>
            Why Operators and <br />
            Partners <span>Choose TKA</span>
          </h2>

          <div className={styles.featuresGrid2}>
            {[
              ["High Durability", "Built to withstand the toughest conditions"],
              ["Low Maintenance", "Reduced downtime"],
              ["Available Spare Parts", "Global availability"],
              ["Strength & Reliability", "Consistent performance"],
              ["Fast Technical Support", "Expert assistance"],
              ["Operator-Focused Design", "Intuitive controls"],
            ].map(([title, text], i) => (
              <div key={i} className={styles.featureBox}>
                <div className={styles.iconWrapper}>
                  <svg
                    className={styles.mainIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2L4 6v6c0 5 3.4 9.7 8 10 4.6-.3 8-5 8-10V6l-8-4z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className={styles.checkBadge}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12l4 4 10-10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.performanceSection}>
        <div className={styles.performanceBox}>
          {/* Linha laranja superior */}
          <div className={styles.topAccent}></div>

          {/* Conteúdo */}
          <div className={styles.performanceContent}>
            {/* LEFT */}
            <div className={styles.performanceLeft}>
              <h2 className={styles.performanceTitle}>
                Designed to Work Harder.
                <br />
                Built to Last Longer.
              </h2>

              <p className={styles.performanceText}>
                Every TKA solution is engineered with one goal: delivering
                uncompromising performance and reliability throughout the
                equipment's lifecycle.
              </p>
            </div>

            {/* RIGHT */}
            <div className={styles.performanceRight}>
              {[
                "Proven durability",
                "Low maintenance",
                "Easy spare parts",
                "Strength & reliability",
                "Fast support",
                "Operational simplicity",
              ].map((item, i) => (
                <div key={i} className={styles.performanceItem}>
                  <div className={styles.performanceCheck}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12l4 4 10-10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.conexpoSection}>
        <div className={styles.internoColumn}>
          <span className={styles.badge}>PRODUCT PORTFOLIO</span>

          <h2 className={styles.title2}>
            Solutions Built to <span>Perform</span>
          </h2>

          <p className={`${styles.paragrafoLight} mb-[5rem]`}>
            From service cranes to aerial platforms, each TKA solution is
            engineered for maximum uptime and operational efficiency.
          </p>
        </div>

        <div className={styles.conexpoContainer}>
          <div className={styles.conexpoBox}>
            {/* LEFT */}
            <div className={styles.conexpoLeft}>
              <img
                src="/static/images/logo-conexp.png"
                alt="CONEXPO CON/AGG"
                className={styles.conexpoLogo}
              />

              <div className={styles.infoItem}>
                <span className={styles.icon}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <strong>March 3–7, 2026</strong>
                  <p>5 Days of Innovation</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.icon}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="10" r="2.5" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <strong>Las Vegas, Nevada (USA)</strong>
                  <p>Las Vegas Convention Center</p>
                </div>
              </div>

              <div className={styles.standCard}>
                <span className={styles.standLabel}>TKA Stand Location</span>
                <strong>Diamond Lot – D1241</strong>
                <p>Las Vegas Convention Center</p>

                <a
                  href="https://directory.conexpoconagg.com/8_0/floorplan/?_gl=1*z7pnhe*_gcl_au*MTg3MTUyMDQwOC4xNzY3NjMyNDgz*_ga*MTMyNjU1NTgyLjE3Njc2MzI0ODI.*_ga_QLG8NHE3BQ*czE3Njc2MzI0ODEkbzEkZzEkdDE3Njc2MzI1MTQkajI3JGwwJGgxMDAyOTU5NTY4*_ga_RT19FB5CTH*czE3Njc2MzI0ODEkbzEkZzEkdDE3Njc2MzI1MTQkajI3JGwwJGgw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnBlue}
                >
                  View Official Fair Map ↗
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className={styles.conexpoRight}>
              <div className={styles.imageHolder}>
                <img
                  src="/static/images/conexpo-map.png" // seu PNG aqui
                  alt="TKA Stand Location"
                  className={styles.centerImage}
                />
              </div>

              <span className={styles.location}>Las Vegas, NV</span>
            </div>
          </div>
        </div>
      </section>

      <Rodape />
      <Whats />
    </>
  );
}
