import Link from 'next/link'
import '../../style/todos.css'


export async function getStaticProps(context) {
  const { params } = context
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`,
  )

  const todo = await data.json()

  return {
    props: { todo },
  }
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await response.json()

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    }
  })

  return { paths, fallback: false }
}

export default function Todo({ todo }) {
  return (
    <>
    <div className='todos animeleft'>
      <Link href="/todos">
        Voltar
      </Link>
      <h1>Exibindo o todo: {todo.id}</h1>
      <br/>
      <p>Texto: {todo.title}</p>
      <br/>
      <p>
        Comentário: legal 
        {'  '}
        <Link className='todolinks' href={`/todos/${todo.id}/comment/1`}>
          Detalhes
        </Link>
      </p>
      <p>
        Comentário: maneiro {'  '}
        <Link className='todolinks' href={`/todos/${todo.id}/comment/2`}>
          Detalhes
          </Link>
      </p>
      <p>
        Comentário: diferente {'  '}
        <Link className='todolinks' href={`/todos/${todo.id}/comment/3`}>
          Detalhes
        </Link>
      </p>
      </div>
    </>
  )
}