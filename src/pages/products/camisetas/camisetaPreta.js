import Head from "next/head"
import Image from "next/image"

export default function camisetaPreta() {

    return(

        <div className="camisetapreta animeleft">

<Head>
                <title>
                    Camisetas / Preta
                </title>
            </Head>

<Image
src='/img/Cpreta.png'
width={300}
height={400}/>

<br/>

<h2> Camiseta Preta -- R$: 95,90</h2>

<br/>

<button>
    Comprar
</button>
           
        </div>
    )
}