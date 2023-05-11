import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios  from 'axios'
import { Link } from 'react-router-dom';

const fetchposts=()=>{
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
    
}
const Home = () => {
    const{data,isLoading,error,isError}=useQuery(['todos'],()=>fetchposts())

    console.log(data)
    
  return (
    <div className="card">
        {data?.data.map((posts)=>{
         return( <Link to={`/${posts.id}`}>
            <div className="card-body" key={posts.id}>
            <p>userid: {posts.userId}</p>
            <p>title: {posts.title}</p>
            
          </div>
          </Link>)  
        })}
    </div>

  )
}

export default Home