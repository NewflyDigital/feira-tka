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
        <div className={styles.interno}>
          <div className={styles.leftContent}>
            <h2 className={styles.tituloOrange}>GLOBAL PRESENCE</h2>
            <h3 className={styles.subtitulo}>
              Engineered for Global Performance
            </h3>
            <p className={styles.paragrafoLight}>
              TKA develops robust crane and aerial platform solutions for
              operations that demand continuous performance, structural
              reliability, and operational simplicity—regardless of market or
              challenge.
            </p>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.globeCircle}>
              <img
                src="/static/images/globe-icon.png"
                alt="Global Connectivity"
                className={styles.globeIcon}
              />
              <div className={styles.orbit}></div>
              <div className={styles.orbit}></div>
              <div className={styles.orbit}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Product Portfolio */}
      <section className={styles.productPortfolio}>
        <div className={styles.internoColumn}>
          <h2 className={styles.tituloOrange}>PRODUCT PORTFOLIO</h2>
          <h3 className={styles.subtitulo}>Solutions Built to Perform</h3>
          <p className={styles.paragrafoLight}>
            Engineered for maximum uptime and operational efficiency.
          </p>

          {/* Filtros */}
          <div className={styles.filters}>
            <button>Continuous Performance</button>
            <button>Easy Maintenance</button>
            <button>Intuitive Operation</button>
            <button>Structural Reliability</button>
          </div>

          {/* Cards */}
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src="/static/images/tka-38900.jpg" alt="TKA 38.900" />
              <span className={styles.tag}>Continuous performance</span>
              <h4>TKA 38.900</h4>
              <p className={styles.desc}>Medium-duty lifting operations</p>
              <p className={styles.details}>
                Optimal balance of reach and capacity for versatile jobsite
                applications
              </p>
              <a href="/produtos/tka38900" className={styles.learnMore}>
                Learn More →
              </a>
            </div>

            <div className={styles.card}>
              <img src="/static/images/tka-45900.jpg" alt="TKA 45.900" />
              <span className={styles.tag}>Easy maintenance</span>
              <h4>TKA 45.900</h4>
              <p className={styles.desc}>Heavy-duty construction</p>
              <p className={styles.details}>
                Extended reach capabilities with enhanced load stability
              </p>
              <a href="/produtos/tka45900" className={styles.learnMore}>
                Learn More →
              </a>
            </div>

            <div className={styles.card}>
              <img src="/static/images/tka-50700.jpg" alt="TKA 50.700" />
              <span className={styles.tag}>Intuitive operation</span>
              <h4>TKA 50.700</h4>
              <p className={styles.desc}>Industrial & infrastructure</p>
              <p className={styles.details}>
                Maximum lifting capacity for the most demanding operations
              </p>
              <a href="/produtos/tka50700" className={styles.learnMore}>
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className={styles.whyChoose}>
        <div className={styles.internoColumn}>
          <h2 className={styles.tituloOrange}>WHY CHOOSE TKA</h2>
          <h3 className={styles.subtitulo}>
            Why Operators and Partners Choose TKA
          </h3>

          <div className={styles.featuresGrid}>
            <div className={styles.featureBox}>
              <h4>High Durability</h4>
              <p>Built to withstand the toughest operational conditions</p>
            </div>
            <div className={styles.featureBox}>
              <h4>Low Maintenance</h4>
              <p>Simplified service routines reduce downtime</p>
            </div>
            <div className={styles.featureBox}>
              <h4>Available Spare Parts</h4>
              <p>Globally accessible components for quick repairs</p>
            </div>
            <div className={styles.featureBox}>
              <h4>Strength & Reliability</h4>
              <p>Consistent performance you can count on</p>
            </div>
            <div className={styles.featureBox}>
              <h4>Fast Technical Support</h4>
              <p>Expert assistance when you need it most</p>
            </div>
            <div className={styles.featureBox}>
              <h4>Operator-Focused Design</h4>
              <p>Intuitive controls for maximum productivity</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={styles.bottomText}>
            <h3>
              Designed to Work Harder.
              <br />
              Built to Last Longer.
            </h3>
            <p>
              Every TKA solution is engineered with one goal: delivering
              uncompromising performance and reliability throughout the
              equipment’s lifecycle.
            </p>
            <ul className={styles.checklist}>
              <li>✔ Proven durability</li>
              <li>✔ Low maintenance</li>
              <li>✔ Easy spare parts</li>
              <li>✔ Strength & reliability</li>
              <li>✔ Fast support</li>
              <li>✔ Operational simplicity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.conexpoSection}>
        <div className={styles.interno}>
          {/* Lado esquerdo - informações */}
          <div className={styles.leftContent}>
            <h2 className={styles.tituloOrange}>MEET US IN PERSON</h2>
            <h3 className={styles.subtitulo}>
              Meet TKA at CONEXPO Las Vegas 2026
            </h3>
            <p className={styles.paragrafoLight}>
              Join us at CONEXPO-CON/AGG 2026 and experience TKA’s global
              engineering solutions designed for performance, durability, and
              reliability in the world’s most demanding environments.
            </p>

            <div className={styles.eventInfo}>
              <h4>CONEXPO CON/AGG</h4>
              <p>
                📅 March 3–7, 2026
                <br />5 Days of Innovation
              </p>
              <p>
                📍 Las Vegas, Nevada (USA)
                <br />
                Las Vegas Convention Center
              </p>
              <p>
                <strong>TKA Stand Location</strong>
                <br />
                Pavilion & Stand TBD
                <br />
                Details coming soon
              </p>
              <a href="/mapa" className={styles.viewMap}>
                View Fair Map →
              </a>
            </div>
          </div>

          {/* Lado direito - círculo TKA */}
          <div className={styles.rightContent}>
            <div className={styles.tkaCircle}>
              <span className={styles.tkaText}>TKA</span>
              <div className={styles.gridPattern}></div>
            </div>
            <span className={styles.location}>Las Vegas, NV</span>
          </div>
        </div>
      </section>
      <Rodape />
      <RodapeNewFly />
      <Whats />
    </>
  );
}
