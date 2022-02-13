import { useState, useEffect } from "react"

export const Users = () => {
    const [users, getUsers] =useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resolve => resolve.json())
        .then(data => {getUsers(data); return data})
        .then(data => console.log(data))
        .catch((error) => console.log(error))
    },[])

    if(users) {
        return (
            <>
            <h3>Users</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} {user.surname} works in {user.company.name}</li>
                ))}
            </ul>
            </>
        )
    } else {
        return (
            <>
            <h3>Users</h3>
            <div>Loading...</div>
            </>
        )    
    }
}