import React from 'react'
import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
import { getTodos,addTodo,updateTodo,deleteTodo } from '../api/todoesAPI'
import { useState } from 'react'


const Home = () => {
  const [newTodo,setNewTodo]=useState('')
  const quaryClient = useQueryClient()

  const{data,error,isError,isLoading}=useQuery(['todos'],getTodos)
  console.log(data)

  const addTodoMutation = useMutation(addTodo,{
    onSuccess:()=>{quaryClient.invalidateQueries('todos')}
  })

  const updateTodoMutation = useMutation(updateTodo,{
    onSuccess:()=>{quaryClient.invalidateQueries('todos')}
  })

  const deleteTodoMutation = useMutation(deleteTodo,{
    onSuccess:()=>{quaryClient.invalidateQueries('todos')}
  })

 const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('handlesubmit running')
    addTodoMutation.mutate({userId:1,title:newTodo,completed:false})
    setNewTodo('')
 }

 const newItemSection=(
  <div className="conatiner">
    <form onSubmit={handleSubmit}>
      <label >Enter new todo</label>
      <input placeholder='enter todo' type="text" id='new-todo' value={newTodo} onChange={e=>{setNewTodo(e.target.value)}}/>
    <button type='submit'>Add</button>
    </form>
  </div>
 )

 let content
  if (isLoading){
    content=<h1>loading...</h1>
  }else if(isError){
    content=<p>{error.message}</p>
  }else{
    content= data.map((todo)=>{
      return(
        <div key={todo.id}>
          <input type="checkbox" id={todo.id} checked={todo.completed} 
          onChange={()=>{updateTodoMutation.mutate({...todo,completed:!todo.completed})}}/>
          <label>{todo.title}</label>

          <button onClick={()=>{deleteTodoMutation.mutate({id:todo.id})}}>Delete</button>
        </div>
      )
    })
  }



  return (
    <>
    <h1>new todo app</h1>
    {newItemSection}
    {content}
    </>
  )

}

export default Home