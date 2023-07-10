import Head from "next/head"
import Image from "next/image"

export default function h2roducts(){

    return(

        <div className="vendas animeleft">

            <Head>
                <title>
                    Produtos
                </title>
            </Head>
            

            <Image
            className="imgProdutos"
            src='/img/banner2.png'
            width={600}
            height={330}
            />

            <h2>
                Loja toda com promoções imperdiveis !!!
            </h2>
            
        </div>
    )
}