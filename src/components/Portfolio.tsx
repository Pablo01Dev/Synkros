"use client";

import React from 'react';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <section className={styles.ctaContainer}>
      <div className={styles.contentWrapper}>

        <div className={styles.textContent}>

          <h1 className={styles.title}>
            Transforme Seu<br /> Espaço Agora.
          </h1>

          <p className={styles.description}>
            Pronto para um ambiente mais inteligente,<br />
            confortável e eficiente? <strong>A Kalê Tecnologia<br />
              é a escolha certa.</strong>
          </p>

          <p className={styles.subDescription}>
            Invista na inteligência que seu espaço merece!
          </p>

          <button className={styles.ctaButton}>
            SOLICITE UMA CONSULTORIA
          </button>
        </div>

        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <img
              src="/placeholders/mulher-ligando.jpg"
              alt="Homem usando smartphone em ambiente com luz suave"
              className={styles.mainImage}
            />

          </div>
        </div>

      </div>
    </section>
  );
}