import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import { fetchPosts } from './api/api';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Newpost from './components/Newpost';

// import LoginForm from './components/LoginForm';


const App = () =>
{
    const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

    const [posts,setPosts]=useState([]);
    useEffect(()=>
    {
        Promise.all([fetchPosts()])
        .then(([postsData])=>
        {
            setPosts(postsData);
        });
    },[])
    return (
        <div id='PageGrandParent'>
        <h1 id='mainTitle'>Stranger's Things</h1>
        <div id='page'>
        <Navbar/>
       <Routes>
            <Route exact path = "/Posts" element={ <Posts posts={posts} setPosts={setPosts}/> }></Route>
            <Route exact path = "/Register" element={ <Register/> }></Route>
            <Route exact path = "/Login" element={ <Login/> }></Route>
            <Route exact path = "/Newpost" element={ <Newpost/> }></Route>
       </Routes>
        </div>
    </div>
)}

ReactDOM.render(
    <BrowserRouter>
      <App />,  
    </BrowserRouter>,
   document.getElementById('app'),
   );


   // function myApp() {
   //     const adminUser = {
   //         userName: "johncaden124",
   //         password: "123"
   //     }
   
   //     const [user, setUser] = useState({name: "", userName: ""});
   //     const [error, setError] = useState("");
   
   //     const Login = details => {
   //         console.log(details);
   
   //         if (details.userName == adminUser.userName && details.password == adminUser.password) {
   //             console.log("Logged in");
   //             setUser({
   //                 name: details.name,
   //                 userName: details.userName
   //             });
   //         }
   //         else {
   //         console.log("Details do not match!");
   //         setError("Details do not match!")
   //     }
   // }
   
   //     const Logout = () => {
   //         setUser({name: "", userName: ""});
   //     }
   
   //     return (
   //         <div className="App">
   //             {(user.userName !="") ? (
   //                 <div className="welcome">
   //                     <h2>welcome, <span>{user.name}</span></h2>
   //                     <button onClick={Logout}>Logout</button>
   //                 </div>
   //             ) : (
   //                 <LoginForm Login={Login} error={error} />
   //             )}
   //         </div>
   //     )
   // }