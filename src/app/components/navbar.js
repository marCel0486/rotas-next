import Link from "next/link"
import  '../../style/navbar.css'

export default function Navbar() {

    return(
        <div className="menu">

<Link href='/'>
Home
</Link> 

            <nav >
                
<ul className="ul">


                   <li> <Link href='/products'>
                Produtos
                </Link>
                    </li>

                    <li>
                    <Link href='/products/camisetas'>
    Camiseta
</Link></li>

                    <li>
                    <Link href='/products/pants'>
    Calças
</Link></li>

                   
                    

                </ul>
            </nav>
            




        </div>
    )
}