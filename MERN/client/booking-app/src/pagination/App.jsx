import React,{useEffect,useState} from 'react';
import Axios from 'axios'


export default function App() {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{

        Axios.get('http://jsonplaceholder.typicode.com/todos')
        .then((result)=>{
            // console.log(result)
            setTodos(result.data)
        })
        .catch((error)=>{
            console.error(error)
        })
    })

  return (
    <div>
        <h1>Get Todos</h1>
        {
            todos.map((newtodo)=>{
                return <p>{newtodo.title}</p>
            })
        }
    </div>
  )
}
