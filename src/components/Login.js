import React, { useState } from 'react';

// function LoginForm({ Login, error }) {
//   const [details, setDetails] = useState({name: "", userName: "", password: ""});

//   const submitHandler = e => {
//     e.preventDefault();

//     Login(details);
//   }

//   return (
//       <form onSubmit={submitHandler}>
//         <div className=".form-inner">
//           <h2>Login</h2>
//           {(error != "") ? (<div className="error">{error}</div> ) : ""}
//           <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="userName">userName: </label>
//             <input type="userName" name="userName" id="userName" onChange={e => setDetails({...details, userName: e.target.value})} value={details.userName}/>
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
//           </div>
//           <input type="submit" vlaue="LOGIN"/>
//         </div>
//       </form>
//   )
// }

// export default LoginForm


const Login = () => { 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault()
    

    const response = await fetch('https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT/users/login', {
    method: "POST",
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        user: {
            username: username,
            password: password,
        },
    }),
}) 
if (response.ok) {
  const data = await response.json()
  const token = data.data.token
  localStorage.setItem('token', token)
  setUsername('')
  setPassword('')
}

setUsername('')
setPassword('')
}


return(
  <form onSubmit={handleSubmit}>
  <label>
    Username:
    <input 
    type="text" 
    name="username" 
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
    Password:
    <input 
    type="password" 
    name="password" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
  </label>
  <input type="submit" value="Log In!" />
</form> 
)}

export default Login