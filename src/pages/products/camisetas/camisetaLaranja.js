import Head from "next/head"
import Image from "next/image"
export default function camisetaPreta() {

    return(

        <div className="camisetalaranja animeleft">

<Head>
                <title>
                    Camisetas / Laranja
                </title>
            </Head>

            <Image
src='/img/Claranja.png'
width={300}
height={400}/>
         
<br/>

<h2> Camiseta Laranja -- R$: 99,90</h2>

<br/>

<button>
    Comprar
</button>
           
        </div>
    )
}