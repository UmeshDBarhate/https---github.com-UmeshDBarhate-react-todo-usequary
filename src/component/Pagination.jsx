import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getusersPage } from '../api/usersAPI'
import Users from './Users'
import PageButton from './PageButton'

const Pagination = () => {
    const[page,setPage]=useState(1)
    const{data:users,isError,isFetching,error,isPreviousData,isLoading}=useQuery(['users',page],()=>getusersPage(page),{
        keepPreviousData:true
    })
    if (isLoading){
        return <h1>LOADING...</h1>
    }
    if (isError){
        return <p>Error:{error.message}</p>
    }
    const content = users.data.map(users=>{return <Users key={users.id} user={users}/>})

    const lastPage=()=>setPage(users.total_pages)
    const firstPage=()=>setPage(1)

    //fill all buttons between first and last button
    const pagesArray = Array(users.total_pages).fill().map((_,i)=>i+1)

    //create navbar
    const nav =(
        <div>
            <button onClick={firstPage} disabled={isPreviousData || page===1}>first page</button>
            {pagesArray.map(pg=>{return <PageButton pg={pg} setPage={setPage}/>})}
            <button onClick={lastPage} disabled={isPreviousData || page===users.total_pages}>last Page page</button>
        </div>
    )

  return (
    <>
    {nav}
    {isFetching && <span>Loading...</span>}
    {content}
    </>
  )
}

export default Pagination