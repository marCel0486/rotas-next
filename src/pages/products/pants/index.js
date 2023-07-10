import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

export default function pants (){

    return(
        <div className="animeleft" >

            <Head>
                <title>
                    Calças
                </title>
            </Head>


<div className="pants">
<Image
src='/img/Ccargo.png'
width={600}
height={330}/>

</div>




<div className="linksPants">
<Link href='/products/pants/bluepants'>
<button>
    calça azul
</button>
</Link>

<Link href='/products/pants/redpants'>
<button>
    calça vermelha
</button>
</Link>

</div>



        </div>
    )
}