import React from 'react'

const Users = ({user}) => {
  return (
    <div className="container">
        <img src={user.avatar}  alt='avatar'/>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>Email:{user.email}</p>
        <p>User id:{user.id}</p>
    </div>
  )
}

export default Users