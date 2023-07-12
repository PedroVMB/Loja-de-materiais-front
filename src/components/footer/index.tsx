'use client'

import styles from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <hr />
      <footer className={styles.Rodape}>
        <div>
          <p>Copyright &copy; {new Date().getFullYear()} MateriaisUI</p>
        </div>
        <div>
          <p>Uma alegria <em>a cada material</em></p>
        </div>
        <div className={styles.link}>
          <p>
            Link para funcionários -
            <span>
              <Link href="/login">
                Aqui
              </Link>
            </span>
          </p>
        </div>
      </footer>
    </>
  )
}