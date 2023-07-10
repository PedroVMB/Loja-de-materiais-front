'use client'

import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <>
      <footer className={styles.Rodape}>
        <div>
          <p>Copyright &copy; {new Date().getFullYear()} MateiaisUI</p>
        </div>
        <div>
          <ul className="social-icons">
            <li><i className="fa fa-facebook"><Facebook /></i></li>
            <li><i className="fa fa-twitter"><Twitter /></i></li>
            <li><i className="fa fa-linkedin"><LinkedIn /></i></li>
          </ul>
        </div>
        <div>
          <p>Uma alegria <em>a cada material</em></p>
        </div>
      </footer>
    </>
  )
}