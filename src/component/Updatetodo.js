// import { useMutation, useQuery } from '@tanstack/react-query'
// import axios from 'axios'
// import React from 'react'
// import { Link } from 'react-router-dom'

// const  updatetodo=(id,title,userId,completed)=>{
//     return axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`),{
//         id,title,userId,completed 
//     },{
//         headers :{
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     }
    
// }

// const Updatetodo = ({id,title,userId,completed}) => {
//     const{data,mutateAsync}=useMutation(['updatetodo',id],()=>updatetodo(id,title,userId,completed))
//   return (
//     <>
//     <Link to="/"><button onClick={()=>{}}>UPDATE</button> </Link>
//     </>
//   )
// }

// export default Updatetodo