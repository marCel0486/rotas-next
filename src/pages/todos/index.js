import '../../style/todos.css'

import Link from 'next/link'

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')

  const todos = await data.json()

  return {
    props: { todos },
  }
}

export default function Todos({ todos }) {
  return (
    <>
    <div className='todos animeleft'>
    <h1>Tarefas para fazer:</h1>
      <ul className='todolist'>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id} - {todo.title} -
            <Link href={`/todos/${todo.id}`}>
              Ver
            </Link>
          </li>
        ))}
      </ul>
    </div>
      
    </>
  )
}