import Head from "next/head"
import Image from "next/image"
export default function redpants(){

    return(


        <div className="redpants animeleft">
<Head>
                <title>
                    Calças / vermelha
                </title>
            </Head>

            <Image
src='/img/calcaV.png'
width={300}
height={400}/>

<br/>


<h2>
calca vermelha -- R$: 250
</h2>

<br/>

<button>
    Comprar
</button>
          
        </div>
    )
}