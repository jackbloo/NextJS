import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link';

export default function Card({data}){
    return(
        <Link href={`/blogs/${data.name}`} >
        <a className={styles.card} data-testid="card-container">
        <Image src={data.image} alt="Building" width={500} height={200}/>
          <h2>{data.name}</h2>
          <p className={styles.text}>{data.content}</p>
          </a>
        </Link>
    )
}