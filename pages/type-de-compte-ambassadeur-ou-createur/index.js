
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Typedecompteambassadeuroucreateur() {

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
      } else {
        document.documentElement.style.removeProperty('--article-read-bar')
      }
    },[router.pathname]
  )

  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <h1>Quel type de compte choisir ? Ambassadeur ou créateur</h1>

        <img src="/images/typecompte.png" alt="type de compte MYM" />

          <p>Sur la plateforme MYM, le compte ambassadeur MYM permet de recevoir 10% des revenus des créateurs à vie, sans pour autant leur retirer de bénéfices.</p>
          <p>MYM s’engage tout simplement à vous reverser une partie de leur bénéfice pour vous remercier de promouvoir leur plateforme.</p>
          <p>C’est une stratégie <span>GAGNANT-GAGNANT</span> d’affiliation qui fonctionne sur le long terme.</p>

        <h2>Rôle de l’ambassadeur</h2>

          <p>L’ambassadeur MYM promouvoit la plateforme afin de percevoir des revenus sur ses affiliés.</p>
          <p>Vous devez ainsi comprendre comment celle-ci fonctionne et accompagner vos filleuls sur le développement de leur chiffre d’affaires.</p>
          <p>C’est encore une fois du <span>GAGNANT-GAGNANT</span>. Plus votre filleul gagne, plus vous gagnez.</p>
          <p>Ainsi, vous devez passer par la case formation et connaître les meilleurs processus pour acquérir des clients.</p>
          <p>Pour éviter les 3 erreurs pour acquérir de nouveaux clients cliquez <Link href="/3-erreurs-a-eviter-nouveaux-clients">ici</Link></p>

          <h2>Compte createur MYM</h2>

          <p>Sur la plateforme MYM, le compte créateur MYM permet de percevoir entre 75% et 90% du chiffre d’affaires NET directement sur votre compte bancaire.</p>

          <p>Il y a 3 sources de revenus possible avec un compte créateur :</p>
          <ul>
              <li>Abonnement</li>
              <li>Photo privée</li>
              <li>Pourboire</li>
          </ul>

          <p>On compte généralement un ratio de revenus globaux 50/50. C’est à dire que si vous gagnez 1000€/mois avec l’abonnement, il n’est pas difficile de mettre en place des processus de ventes additionnels pour gagner 1000€/mois supplémentaire avec les photos privées et pourboires.</p>

          <h3>Abonnement</h3>

          <p>L’abonnement est la première source de revenus à mettre en place et permet d’avoir une base récurrente. 4 options au choix avec la possibilité de payer par semestre avec une réduction</p>
          <ul>
            <li>9,99€ ou 39,99€ pour 6 mois</li>
            <li>19,99€ ou 79,99€ pour 6 mois</li>
            <li>49,99€ ou 199,99€ pour 6 mois</li>
            <li>99,99€ ou 399,99€ pour 6 mois</li>
          </ul>

          <h3>Photo privée</h3>

          <p>Ce que l’on appelle les Push Privés sont des messages et/ou médias envoyés en privés. Ils peuvent être gratuits ou payants.</p>

          <h4>Gratuit</h4>
          <p>Le Push gratuit doit créer de l’engagement envers la personne afin qu’elle soit apte à dépenser de l’argent pour votre contenu en lui montrant le côté humain.</p>

          <h4>Payant</h4>
          <p>Le prix est libre, généralement de quelques euros pour un simple message jusqu’à des centaines d’euros pour du contenu personnalisé</p>

          <h3>Pourboire</h3>
          <p>Les pourboires sont libres de la part de vos followers.</p>
          <p>L’action vient d’eux et il ne faut pas négliger les appels à l’action en proposant du contenu en échange de pourboires par exemple.</p>

      </main>


    </>
  )
}
