
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'

export default function SinscriresurMym() {

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
        <h1>S'inscrire sur MYM </h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/BTb794xF-wk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <p>Avant de s inscrire sur MYM vous devez choisir le type de compte que vous souhaitez entre un compte ambassadeur MYM ou un compte créateur MYM.</p>
          <p>En effet, cela déterminera l’activité dont vous avez le droit d’exercer ainsi que les sources de revenus que vous allez percevoir.</p>
          <p>Le compte créateur MYM s’adresse aux personnes ayant déjà une communauté ou bien souhaitant en créer pour monétiser du contenu de manière sécurisée. La garantie du contenu exclusif ainsi que la sécurisation des moyens de paiements permettent aux influenceurs de ne se soucier que de leur communauté.</p>

          <p>Le compte ambassadeur MYM est plutôt destiné aux entrepreneurs et managers souhaitant démocratiser la plateforme MYM et aider les créateurs de contenu à générer plus de chiffres d’affaires. Il est nécessaire de les accompagner à travers le développement de leurs canaux d’acquisition et leur fournir des processus qui fonctionnent pour monter une communauté engagée et apte à dépenser de l’argent.</p>
          <p>Il n’y a pas de prérequis pour devenir ambassadeur mais la connaissance du marketing digital est indispensable. Pour recevoir gratuitement la formation Ambassadeur MYM, cliquez ici.</p>

          <p>Pour en apprendre d’avantage sur le compte ambassadeur MYM cliquez <Link href="/compte-ambassadeur-MYMM">ici</Link>
          </p>

          <p>Pour en apprendre d’avantage sur le compte créateur MYM cliquez <Link href="/compte-createur-MYMM">ici</Link></p>

          <p>Une fois le type de compte choisi pour s’inscrire sur MYM vous devrez entrer vos informations personnelles.</p>

          <ul>
              <li>Nom</li>
              <li>Prenom</li>
              <li>Mail</li>
              <li>Mot de passe</li>
          </ul>
          <p>Pour un compte ambassadeur, ils vous demanderont un texte explicatif de motivation afin de vérifier vos bonnes intentions envers la plate-forme. Il suffit d’écrire au minimum 200 caractères.</p>

          <p>Vous pouvez écrire (attention, ne pas copier coller) sur le fait que vous allez promouvoir leur plateforme auprès de votre communauté et les accompagner dans le développement de leur image afin de monétiser leur audience de manière sécurisée…</p>
          <br/>

          <h2>S’inscrire sur un compte ambassadeur</h2>

          <p>Tout d’abord, remplissez vos informations classiques :</p>
          <ul>
              <li>Nom</li>
              <li>Prenom</li>
              <li>Mail</li>
              <li>Mot de passe</li>
          </ul>

          <p>Pour le compte ambassadeur MYM, ils vous demanderont un texte explicatif de motivation afin de vérifier vos bonnes intentions envers la plate-forme. Il suffit d’écrire au minimum 200 caractères.</p>

          <p>Vous pouvez écrire (attention, ne pas copier coller) sur le fait que vous allez promouvoir leur plateforme auprès de votre communauté et les accompagner dans le développement de leur image afin de monétiser leur audience de manière sécurisée…</p>

          <p>Une fois validé, ils vous enverront un email de confirmation sous 48h. </p>

          <p>Renseignez votre date de naissance et numéro de téléphone avec l indicatif de pays (+33… pour la France).</p>

          <p>Pour certifier votre compte et recevoir vos futurs paiements, vous devrez envoyer ces documents :</p>
          <ul>
              <li>Pièce d’identité (carte d identité ou passeport)</li>
              <li>Selfie en tenant votre carte d’identité dans votre main (elle doit être lisible entièrement)</li>
              <li>Coordonées bancaire</li>
          </ul>


          <h2>S’inscrire sur un compte créateur</h2>
      </main>


    </>
  )
}
