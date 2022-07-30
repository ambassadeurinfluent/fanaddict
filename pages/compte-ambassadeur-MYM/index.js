
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Compteambassadeurmym() {

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
        <h1>Compte Ambassadeur MYM</h1>

          <p>Sur la plateforme MYM, le compte ambassadeur MYM permet de recevoir 10% des revenus des créateurs à vie, sans pour autant leur retirer de bénéfices.</p>
          <p>MYM s’engage tout simplement à vous reverser une partie de leur bénéfice pour vous remercier de promouvoir leur plateforme.</p>
          <p>C’est une stratégie GAGNANT-GAGNANT d’affiliation qui fonctionne sur le long terme.</p>

        <h2>Rôle de l’ambassadeur</h2>

          <p>L’ambassadeur MYM promouvoit la plateforme afin de percevoir des revenus sur ses affiliés.</p>
          <p>Vous devez ainsi comprendre comment celle-ci fonctionne et accompagner vos filleuls sur le développement de leur chiffre d’affaires.</p>
          <p>C’est encore une fois du GAGNANT-GAGNANT. Plus votre filleul gagne, plus vous gagnez.</p>
          <p>Ainsi, vous devez passer par la case formation et connaître les meilleurs processus pour acquérir des clients.</p>
          <p>Pour éviter les 3 erreurs pour acquérir de nouveaux clients cliquez ici</p>

      </main>


    </>
  )
}