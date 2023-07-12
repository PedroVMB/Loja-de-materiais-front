'use client';

import styles from './Banner.module.scss';

const Banner = () => {
  return (<section className={styles.BannerArea}>
    <div className={styles.Container}>
     <div className={styles.separacao}>
        <h1 className={styles.Titulo}>MateriaisUI</h1>
        <p>Felicidade a cada compra</p>
     </div>
    </div>
  </section>)
}

export default Banner