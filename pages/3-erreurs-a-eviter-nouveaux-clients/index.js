
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Erreursaeviternouveauxclients() {

  const router = useRouter();

  useEffect(
    ()=> {
      if(router.pathname !== "/"){
        window.addEventListener('scroll', event => {    
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
      
          document.documentElement.style.setProperty('--article-read-bar', `${scrolled}%`);
        });
      } else {
        document.documentElement.style.removeProperty('--article-read-bar')
      }
    },[router.pathname]
  )

  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <h1>3 erreurs à éviter pour acquérir de nouveaux clients</h1>
        <img src="../images/erreuraeviter.png" alt="3 erreur a eviter compte MYM" />
        <p>Vous devez voir MYM comme une entreprise à faire tourner.</p>

        <h2>Se concentrer sur un seul réseau social</h2>

        <p>Chaque réseau social est comme un terrain vide en immobilier. Vous devez le conquérir quoi qu’il en coûte.</p>
        <p>Pourquoi se priver de tel ou tel réseau ? Si vous en avez déjà développé quelques-uns il suffit de recycler votre contenu pour l’adapter à l’algorithme des autres réseaux sociaux.</p>
        <p>Pour comprendre comment fonctionnent les algorithmes des réseaux sociaux cliquez ici.</p>
        <p>Il est indispensable d’avoir au minimum 5 réseaux sociaux pour promouvoir son image</p>

        <h2>Créer trop de contenu</h2>
        <p>Vous n’avez pas besoin de créer constamment du nouveau contenu. Prévoyez un shooting et préparez votre contenu en avance.</p>
        <p>Réutilisez le même contenu à différent moment et sur différents réseaux sociaux.</p>
        <p>Le but est de recycler votre contenu afin d’optimiser le ratio temps/gains.</p>

        <h2>Trop se diversifier</h2>
        <p>Si vous souhaitez attirer tout le monde, vous n’attirerez personne.</p>
        <p>Vous devez être niché. C est-à-dire vous spécialisez dans une thématique.</p>
        <p>C’est de cette façon que vous allez créer de l’engagement de la part de vos followers qui seront plus à même de dépenser de l’argent pour vous qui êtes spécialisés.</p>

      </main>


    </>
  )
}
