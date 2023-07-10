import Link from "next/link";

export default function NotFound() {

    return(
        <div className="home">
            <h2>404</h2>
            <br/>
            <p>
                Está página não existe.
            </p>
            <br/>
            <Link href='/'>
            Voltar
            </Link>
        </div>
    )
}