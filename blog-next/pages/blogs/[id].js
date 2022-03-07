import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() =>import('../../components/Navbar'))
const Footer = dynamic(() => import('../../components/Footer'))


const  Details = ({data}) =>  {
  return (
    <div className={styles.container}>
      <Head>
        <title>DigitSense Next Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar/>
        <h1 className={styles.title}>
          {data[0].name}
        </h1>
        <div className={styles.picture}>
          <Image src={data[0].image} alt="Minimalist" width={800} height={400}/>
        </div>
        <div style={{width: '50%', textAlign: 'center'}}>
        <p className={styles.text}>
                {data[0].content}
            </p>
        </div>

      </main>
    <Footer/>
    </div>
  )
}
export const getStaticProps= async ({ params, ...otherProps }) => {
    const data = [{name:"Building", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.", image:"https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}, {name:"Space", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.", image:"https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"}, {name:"Lamp", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.", image:"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},  {name:"Stairs", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.", image:"https://images.unsplash.com/photo-1448318440207-ef1893eb8ac0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80"}]
    const filter = data.filter((el,id) => el.name === params.id)
    return {props:{data: filter}}
  };
  
  export const getStaticPaths = async () => ({
    paths: ['/blogs/Building', '/blogs/Space', '/blogs/Lamp', '/blogs/Stairs'],
    fallback: false,
  });
export default Details
