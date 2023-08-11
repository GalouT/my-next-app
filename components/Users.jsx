'use client'
import { useRouter } from "next/navigation"


export default function Users({users}) {
    const router = useRouter()

    return (
        <ul className="list-group">
            {users.map((user)=>(
                <li key = {user.id}
                className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                onClick={()=>{
                    /* console.log(user.id) */
                    router.push(`/users/${user.id}`)
                }}>
                    <h4>ID:{user.id}</h4>
                    <h5>Nombre: {user.first_name} {user.last_name}</h5>
                <img src={user.avatar}
                    style={{borderRadius:"50%"}}/>
            </li>
        ))}  
        </ul>    
        
    )
}
