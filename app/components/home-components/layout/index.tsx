'use client';

import React from 'react';
import styles from './Layout.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import imageTeste1 from '../../../../public/images/MaterialTeste1.jpg';
import imageTeste2 from '../../../../public/images/MaterialTeste2.jpg';
import tijolo from '../../../../public/images/tijolo.jpg'
import madeira from '../../../../public/images/madeira.jpg'
import tinta from '../../../../public/images/tinta.jpg'
import cimento from '../../../../public/images/cimento.jpg'

const Layout = () => (
  <>
    <div className={styles.MiniBanners}>
      <Image src={imageTeste1} alt="Um distribuidora legal" />
      <div className={styles.CardCentral}>
        <h2>A melhor rede de Materiais!</h2>
        <div>
          <p>seja um parceiro agora:</p>
          <p>ligue para <a href="callto:99999999999">(99) 99999-999</a></p>
        </div>
      </div>
      <Image src={imageTeste2} alt="Um hambúrguer desconstruído" />
    </div>
    <div className={styles.Categorias}>
      <div className={styles.TipoDePrato}>
        <Image src={tijolo} alt="Tijolo"/>
        <h4>Tijolos</h4>
      </div>
      <div className={styles.TipoDePrato}>
        <Image src={cimento} alt="Cimento" />
        <h4>Cimento</h4>
      </div>
      <div className={styles.TipoDePrato}>
        <Image src={tinta} alt="Tinta" />
        <h4>Tinta</h4>
      </div>
      <div className={styles.TipoDePrato}>
        <Image src={madeira} alt="Madeira" />
        <h4>Madeira</h4>
      </div>
    </div>
    <div className={styles.Links}>
      <h3>Conheça os melhores produtos</h3>
      <p>Clique <Link href='/produtos'>aqui</Link></p>
    </div>
  </>
);

export default Layout;
