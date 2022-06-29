import React, { useState } from "react"

const Register = () => { 
    const handleSubmit = async (e) => {
        e.preventDefault()
   
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 
    {
        fetch('https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/users/register', {
    method: "POST",
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        user: {
            username: username,
            password: password
        }
    })
}) .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(console.error);
}


return(
    <div id="register-fields">
        <h4 className="page-title">{title}</h4>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Sign Up!</button>
        </form>
    </div>
)}
}
export default Register 