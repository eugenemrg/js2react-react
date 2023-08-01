import React from 'react'

function Users({ users_data }) {
  return (
    <div>
        {users_data.map( a_user => {
            return <p key={a_user.id}>{a_user.id}. {a_user.firstName} {a_user.lastName} ({a_user.age} years old)</p>
        })}
    </div>
  )
}

export default Users