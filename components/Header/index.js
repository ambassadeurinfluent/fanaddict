import Link from "next/link"

const Header = () => {
  return (
    <header className="article-home">  
      <Link href="/">
        <h1>Fan Addict</h1>
      </Link>      
    </header>
  )
}

export default Header