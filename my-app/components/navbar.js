import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar(){
    return (
        <header className={styles.header}>
        <nav className={styles.nav}>        
          <ul className={styles.navul}>
            <li className={styles.navli}>
              <Link href="/L3W/whiteList">
                <a>Whitelist</a>
              </Link>
            </li>
            <li className={styles.navli}>
              <Link href="/L3W/nft-collection">
                <a>NFT-collection</a>
              </Link>
            </li>
            <li className={styles.navli}>
              <Link href="/L3W/ico">
                <a>ICO</a>
              </Link>
            </li>
            <li className={styles.navli}>
              <Link href="/L3W/dao">
                <a>DAO</a>
              </Link>
            </li>
            <li className={styles.navli}>
              <Link href="/L3W/exchange">
                <a>Exchange</a>
              </Link>
            </li>
          </ul>        
        </nav>
      </header>
    )
}