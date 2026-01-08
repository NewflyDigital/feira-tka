import Link from "next/link";
import styles from "../styles/Banner.module.css";
import { useState } from "react";

import ModalOrcamento from "./modal";
import ModalVideo from "./video";

export default function Banner() {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className={styles.background}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.badge}>● CONEXPO Las Vegas 2026</span>

        <h1>
          <strong>TKA Cranes:</strong>
          <br />
          <span>Global Engineering</span>
          <br />
          for a Connected World.
        </h1>

        <p>
          TKA designs and manufactures cranes and aerial platforms built to
          operate more and deliver consistent results in any market.
        </p>

        <div className={styles.actions}>
          <Link legacyBehavior passHref href="/conexpo-2026">
            <button className={styles.btnBlue}>Meet Us at CONEXPO →</button>
          </Link>

          <button
            className={styles.btnOrange}
            onClick={() => setShowVideo(true)}
          >
            ▶ Watch Video
          </button>

          <button className={styles.btnDark} onClick={() => setShowModal(true)}>
            Become a Dealer
          </button>
        </div>
      </div>

      <ModalVideo open={showVideo} onClose={() => setShowVideo(false)} />
      <ModalOrcamento open={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
