import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'


const fetchpost=(id)=>{
    console.log("axios running",id)
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
}

const Post = () => {
   const {id}=useParams()
   const pageid=parseInt(id)
   
   const{data,isLoading,error,isError}=useQuery(['posts',pageid],()=>fetchpost(pageid))
   console.log(data)
  return (
    <div className="container">
        <p>userid: {data.data.userId}</p>
        <p>title: {data.data.title}</p> 
        <button>submit</button> 
    </div>
  )
}

export default Post