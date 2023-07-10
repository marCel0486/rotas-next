import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function camisetas () {

    return(
        <div className="animeleft">

            <Head>
                <title>
                   camisetas
                </title>
            </Head>


<div className="camiseta">

<Image
src='/img/camisetasO.png'
width={400}
height={300}/>
</div>






<div className="linksPants">
<Link href='/products/camisetas/camisetaPreta'>
<button>
    Preta
</button>
</Link>

<Link href='/products/camisetas/camisetaLaranja'>
<button>
    laranja
</button>
</Link>

</div>



        </div>
    )  
        
}