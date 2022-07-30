import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Homeheader from '../components/HomeHeader'

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homeheader></Homeheader>
      



          <div className={styles.flexarticle}>

            <Link href="/inscrire-sur-MYM">
              <div className={styles.cardarticlemain}>
                <img src="/images/article1.jpg" alt="" className={styles.imgmain}/>
                <div className={styles.bodycardarticle}>
                    <h2>S inscrire sur MYM</h2>
                    <aside>Avant de s'inscrire sur MYM vous devez choisir le type de compte que vous souhaitez entre un compte ambassadeur MYM ou un compte créateur MYM. En effet, cela déterminera...</aside>
                </div>
              </div>
            </Link>

            <Link href="/compte-ambassadeur-MYM">
              <div className={styles.cardarticle}>
               <div className={styles.imgsecond}>
                <img src="https://mym.fans/images/cover-social-networks.png" alt="" />
              </div>
                <div className={styles.bodycardarticle}>
                    <h2>Compte Ambassadeur MYM</h2>
                    <aside>Sur la plateforme MYM, le compte ambassadeur MYM permet de recevoir 10% des revenus des créateurs à vie, sans pour autant leur retirer de bénéfices. MYM s’engage...</aside>
                </div>
              </div>
            </Link>

            <Link href="/compte-createur-MYM">
              <div className={styles.cardarticle}>
                <div className={styles.imgsecond}>
                  <img src="https://www.evangeline-lilly.net/wp-content/uploads/2021/05/lampe-tik-tok-2.jpg" alt="" />
                </div>
                
                <div className={styles.bodycardarticle}>
                    <h2>Compte Createur MYM</h2>
                    <aside>Sur la plateforme MYM, le compte créateur MYM permet de percevoir entre 75% et 90% du chiffre d’affaires NET directement sur votre compte bancaire. Il y a 3 sources de revenus possible ...</aside>
                </div>
              </div>
            </Link>

            <Link href="/3-erreurs-a-eviter-nouveaux-clients">
              <div className={styles.cardarticle}>
              <div className={styles.imgsecond}>
                <img src="https://www.devenir-influenceur.pro/wp-content/uploads/2022/03/mym-faq.png" alt="" />
              </div>
                <div className={styles.bodycardarticle}>
                    <h2>3 erreurs à éviter pour acquérir de nouveaux clients</h2>
                    <aside>Vous devez voir MYM comme une entreprise à faire tourner. Chaque réseau social est comme ...</aside>
                </div>
              </div>
            </Link>

        </div> 


    </>
  )
}
