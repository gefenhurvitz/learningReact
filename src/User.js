import React from 'react'

export const User = (props) => {
  return (
    <div>
    <h1>name: {props.name}</h1>
    <h2>age: {props.age}</h2>
    <h3>email: {props.email}</h3>
    <h3>gender: {props.gender}</h3>
    <hr/>
    </div>
  )
}

// export default User;