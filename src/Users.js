import { useState, useEffect } from "react"

export const Users = () => {
    const [users, getUsers] =useState(null);

    /* 
    WAŻNE: useEffect nie może zwrócić promise
    Poniższy zapis jest niewłaściwy:
    useEffect(asycn () => {})
     */
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resolve => resolve.json())
        .then(data => {getUsers(data); return data})
        .catch((error) => console.log(error))
    },[])

    // Poniżej przykład z async await z pobieraniem danych
   /*  useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            getUsers(data);
        }

        fetchData();
    },[])
 */
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