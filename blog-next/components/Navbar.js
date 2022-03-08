import styles from '../styles/Home.module.css'
import Link from 'next/link';


function Nav({data, title,id}){
return(
    <div className={styles.nav} style={{fontWeight: data ? 'bold' : 'normal', textDecoration: data ? 'underline' : 'none'}}>
    <Link href={`/${id}`}><a>{title}</a></Link>
    </div>
)

}


export default function Navbar({title}){
    const data = [{id:'', title:'Home'},{id:'about', title:'About us'}]
    return(
        <div className={styles.navbar} data-testid="navbar-container">
        <div className={styles.rightNavbar}>
        <Link href="/"><a>Digitsense Blog</a></Link>
        </div>
        <div className={styles.leftNavbar}>
            {data.map((el,i) => <Nav data={title === el.id} title={el.title} id={el.id} key={`${el.id} - ${i}`}/>)}
            <Nav/>
        </div>
      </div>
    )
}