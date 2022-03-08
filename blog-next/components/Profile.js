import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Profile({data}){
    return(
        <div className={styles.profile} data-testid="profile-container">
        <div className={styles.profilePicture}>
          <Image src={data.image} alt="Minimalist" width={250} height={300} objectFit="cover" layout='fixed'/>
        </div>
            <h1>
                {data.name}
            </h1>
            <p>
                {data.role}
            </p>
            <p className={styles.text}>
                {data.content}
            </p>
        </div>
    )
}