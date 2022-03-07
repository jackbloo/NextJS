import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Footer(){
    return(
        <footer className={styles.footer}>
        <a
          href="https://digit-sense.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/digitsense.jpeg" alt="Vercel Logo" width={72} height={40} />
          </span>
        </a>
      </footer>
    )
}