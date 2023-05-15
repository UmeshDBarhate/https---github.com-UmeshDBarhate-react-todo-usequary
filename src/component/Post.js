import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'



const fetchpost1=(id)=>{
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
}

const Post = () => {
    const { id } = useParams();
    const individualId = parseInt(id)
    console.log(individualId)
      
  
   const{data,isLoading,error,isError} = useQuery(["todo",id],async()=>fetchpost1(id))

    
  
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  
   return (
    <div className="container">
      <input type="text" defaultValue={data.data.id} disabled/>
      <br />
        <input type="text" defaultValue={data.data.title} />
      <br />
      <button>Update</button>
       
    </div>
  )
}

export default Post