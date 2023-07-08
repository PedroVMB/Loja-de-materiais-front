'use client';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.nomeLoja}>
          <h2>Loja de Materiais</h2>
        </div>

        <div>
          <li><Link href="/home">Home</Link></li>
        </div>

        <div>
          <li><Link href="/produtos">Produtos</Link></li>
        </div>

        <div>
          <li><Link href="/contato">Contato</Link></li>
        </div>
        <hr />

      </div>
    </>
  )
}