'use client';

import styles from './Header.module.scss';
import Link from 'next/link';


export default function Header() {
  return (
    <>
      <nav className={styles.Link}>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/produtos">Produtos</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}