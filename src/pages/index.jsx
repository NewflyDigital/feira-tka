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

  const icons = {
    shield: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L4 6v6c0 5 3.4 9.7 8 10 4.6-.3 8-5 8-10V6l-8-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),

    wrench: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M21 7a6 6 0 01-8.7 5.3L6 18.6a2 2 0 01-2.8-2.8l6.3-6.3A6 6 0 0021 7z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    package: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M21 16V8a2 2 0 00-1-1.7l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.7l7 4a2 2 0 002 0l7-4a2 2 0 001-1.7z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M3.3 7L12 12l8.7-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),

    energy: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),

    headset: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 15v-3a8 8 0 0116 0v3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="2"
          y="13"
          width="4"
          height="6"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="18"
          y="13"
          width="4"
          height="6"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),

    user: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M5.5 21a6.5 6.5 0 0113 0"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  };

  return (
    <>
      <Menu />
      <a id="banner"></a>
      <Banner />

      {/* Seção Product Portfolio */}
      <section id="products" className={styles.productPortfolio}>
        <div className={styles.internoColumn}>
          <span className={styles.badge}>PRODUCT PORTFOLIO</span>

          <h2 className={styles.title}>
            Solutions Built to <span>Perform</span>
          </h2>

          <p className={styles.paragrafoLight}>
            From service cranes to aerial platforms, each TKA solution is
            engineered for maximum uptime and operational efficiency.
          </p>
          {/*

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
*/}

          <div className={styles.cards}>
            {[
              {
                img: "/static/images/Linha-Canivete.jpg",
                tag: "Knucle Boom",
                title: "TKA 66.700",
                sub: "Versatility and efficiency",
                desc: "Compact and robust cranes, designed for agile operations, functional reach, and efficient vehicle integration.",
                link: "https://tkacranes.com/produtos?c=01_canivete",
              },
              {
                img: "/static/images/Linha-Cesto.jpg",
                tag: "Aerial Lifts",
                title: "15.5 DI",
                sub: "Safety and precision at height",
                desc: "Stability and control for air operations with a focus on safety and efficiency.",
                link: "https://tkacranes.com/en/produtos?c=04_cestos",
              },
              {
                img: "/static/images/Linha-ServiceCrane.jpg",
                tag: "Service Crane",
                title: "Service Crane",
                sub: "",
                desc: "Global engineering for the American market Lifting solutions developed specifically for the United States, with the expertise of a world-leading manufacturer.",
                link: "https://drive.google.com/file/d/1w3xM5CWklZc-2-IP5RsmlFlWoTBseJPQ/view?usp=sharing",
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
      {/* Feature Boxes */}
      <section id="why-tka" className={styles.whyChoose}>
        <div className={styles.internoColumn}>
          <span className={styles.badge}>WHY CHOOSE TKA</span>

          <h2 className={styles.title}>
            Why Operators and <br />
            Partners <span>Choose TKA</span>
          </h2>

          <div className={styles.featuresGrid2}>
            {[
              {
                icon: "shield",
                title: "High Durability",
                text: "Built to withstand the toughest conditions",
              },
              {
                icon: "wrench",
                title: "Low Maintenance",
                text: "Reduced downtime",
              },
              {
                icon: "package",
                title: "Available Spare Parts",
                text: "Global availability",
              },
              {
                icon: "energy",
                title: "Strength & Reliability",
                text: "Consistent performance",
              },
              {
                icon: "headset",
                title: "Fast Technical Support",
                text: "Expert assistance",
              },
              {
                icon: "user",
                title: "Operator-Focused Design",
                text: "Intuitive controls",
              },
            ].map((item, i) => (
              <div key={i} className={styles.featureBox}>
                <div className={styles.iconWrapper}>
                  <div className={styles.mainIcon}>{icons[item.icon]}</div>

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

                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*



      <section className={styles.performanceSection}>
        <div className={styles.performanceBox}>
        
          <div className={styles.topAccent}></div>

        
          <div className={styles.performanceContent}>
         
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

*/}

      <section id="conexpo-2026" className={styles.conexpoSection}>
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
                  src="/static/images/Conexpo.jpg" // seu PNG aqui
                  alt="TKA Stand Location"
                  className={styles.centerImage}
                />
              </div>
            </div>
            <span className={styles.location}>Las Vegas, NV</span>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.buildTogetherSection}>
        <div className={styles.internoColumn}>
          <span className={styles.badge}>CONNECT WITH US</span>

          <h2 className={styles.title3}>
            Let's Build <span>Together</span>
          </h2>

          <p className={styles.paragrafoLight}>
            Schedule a meeting at CONEXPO 2026 or subscribe to stay connected
            with TKA's global developments.
          </p>

          <div className={styles.buildGrid}>
            {/* LEFT CARD */}
            <div className={styles.buildCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>
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
                  <h4>Schedule a Meeting</h4>
                  <p>Meet us at CONEXPO 2026</p>
                </div>
              </div>

              <form className={styles.form}>
                <label>
                  Name *
                  <input type="text" placeholder="Your full name" />
                </label>

                <label>
                  Company *
                  <input type="text" placeholder="Company name" />
                </label>

                <div className={styles.formRow}>
                  <label>
                    Country *
                    <input type="text" placeholder="Country" />
                  </label>

                  <label>
                    Interest *
                    <select>
                      <option>Select</option>
                      <option>Cranes</option>
                      <option>Platforms</option>
                      <option>Services</option>
                    </select>
                  </label>
                </div>

                <label>
                  Email *
                  <input type="email" placeholder="your@email.com" />
                </label>

                <button type="submit" className={styles.btnBlueFull}>
                  ✈ Schedule a Meeting
                </button>
              </form>
            </div>
            <a
              href="https://wa.me/555481552000"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.buildCard} ${styles.whatsCard}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>💬</span>
                <div>
                  <h4>WhatsApp TKA</h4>
                  <p>Speak to our team now.</p>
                </div>
              </div>

              <p className={styles.cardText}>
                Quick service for questions, quotes, and technical support.
Click and talk directly to us.
              </p>

              <div className={styles.whatsButton}>CALL US ON WHATSAPP</div>
            </a>

            {/* RIGHT CARD
             <div className={styles.buildCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>✉</span>
                <div>
                  <h4>TKA Global News</h4>
                  <p>Stay connected with TKA</p>
                </div>
              </div>

              <p className={styles.cardText}>
                Receive product updates, technical insights, and global news
                directly to your inbox.
              </p>

              <form className={styles.form}>
                <label>
                  Name *
                  <input type="text" placeholder="Your full name" />
                </label>

                <label>
                  Email *
                  <input type="email" placeholder="your@email.com" />
                </label>

                <label>
                  Country *
                  <input type="text" placeholder="Country" />
                </label>

                <button type="submit" className={styles.btnBlueFull}>
                  ✉ Subscribe to TKA Global News
                </button>
              </form>
            </div>
            */}
          </div>
        </div>
      </section>

      <Rodape />
      <RodapeNewFly />
      <Whats />
    </>
  );
}
