'use client';

import styles from './Header.module.scss';
import Link from 'next/link';


export default function Header() {
  return (
    <>
      <nav className={styles.Link}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/produtos">Produtos</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}