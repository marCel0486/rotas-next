import Head from "next/head"
import Image from "next/image"

export default function home () {

    return(
    <>
    
    <Head>
        <title>
            Home
        </title>

        <meta
        name="keyworkds"
        content="Roupas"></meta>
    </Head>
    <div className='home animeleft'>

        
<Image
src='/img/banner1.png'
width={550}
height={300}

/>

<h2>
    Seja bem vindo a melhor loja !!!
</h2>


       
    </div>

    
    </>)
}