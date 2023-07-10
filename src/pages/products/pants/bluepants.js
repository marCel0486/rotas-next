import Head from "next/head"
import Image from "next/image"
export default function bluepants(){

    return(


        <div className="bluepants animeleft">

<Head>
                <title>
                    Calças / azul
                </title>
            </Head>

            <Image
src='/img/CalcaA.png'
width={300}
height={400}/>

<br/>

<h2> calca azul -- R$: 200</h2>

<br/>

<button>
    Comprar
</button>
           
        </div>
    )
}