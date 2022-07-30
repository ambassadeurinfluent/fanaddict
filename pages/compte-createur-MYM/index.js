
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Comptecreateurmym() {

  const router = useRouter();

  useEffect(
    ()=> {
      console.log(router.pathname)

      if(router.pathname !== "/"){
        window.addEventListener('scroll', event => {    
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
      
          document.documentElement.style.setProperty('--article-read-bar', `${scrolled}%`);
        });
      }
    },[router.pathname]
  )

  return (
    <>
      <Head>
        <title>Fan Addict</title>
        <meta name="description" content="Créez votre nouvelle source de revenue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <main className={styles.main}>
      
        <h1>Compte createur MYM</h1>
        
          <p>Sur la plateforme MYM, le compte créateur MYM permet de percevoir entre 75% et 90% du chiffre d’affaires NET directement sur votre compte bancaire.</p>

          <p>Il y a 3 sources de revenus possible avec un compte créateur :</p>
          <ul>
              <li>Abonnement</li>
              <li>Photo privée</li>
              <li>Pourboire</li>
          </ul>

          <p>On compte généralement un ratio de revenus globaux 50/50. C’est à dire que si vous gagnez 1000€/mois avec l’abonnement, il n’est pas difficile de mettre en place des processus de ventes additionnels pour gagner 1000€/mois supplémentaire avec les photos privées et pourboires.</p>

      </main>


    </>
  )
}
